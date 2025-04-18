import fs from "fs";
import stream from 'node:stream';
import ky from "ky";

import type { Stream } from "stream";
import type { WriteStream } from "fs";

import type { KyResponse, Options } from 'ky';

export type FileDownloadStatus = 'pending' | 'downloading' | 'pausing' | 'paused' | 'completed' | 'failed'
export const defaultChunkSizeInBytes = 1024 * 1024 * 64 // 64MB
export const defaultConcurrency = 3
export const minSplitSizeInBytes = 1024 * 1024 * 1 // 1MB

export interface UrlMetaInfo {
  size: number | null
  canRange: boolean
  headers?: Headers
}

export const RangeRequestErrCode = 416
export const AlreadyDownloadErrCode = 409

export async function concatStreamTo(sources: Stream[], destination: WriteStream) {
  for (const stream of sources) {
    await new Promise((resolve, reject) => {
      stream.pipe(destination, { end: false })
      stream.on('end', resolve)
      stream.on('error', reject)
    })
  }
  destination.end()
}

export async function getUrlMetaInfo(url:string, options?: Options, headers?: Headers) {
  // console.log('🚀 ~ getUrlMetaInfo ~ options:', url, options)
  if (!headers) {
    const response = await ky.head(url, {
      ...options,
      throwHttpErrors: false,
    })
    headers = response.headers
  }
  // the fastify use specified 'content-length' as payload size, not file size: see fastify/lib/headRoute.js
  const s = headers.get('content-length')
  const size = s != null ? Number(s) : null
  const canRange = headers.get('accept-ranges') === 'bytes'
  const result = {size, canRange: canRange, headers} as UrlMetaInfo

  return result
}

export function getFilenameFromUrl(url: string) {
  // Split the URL by '/', then get the last segment (which should represent the file name)
  const segments = url.split("/");
  const fileName = segments.pop(); // Get the last segment (file name) from the URL

  if (fileName) {
    // Check if the file name contains a query string and remove it if present
    const queryStringIndex = fileName.indexOf("?");
    if (queryStringIndex !== -1) {
      return fileName.substring(0, queryStringIndex);
    }

    return fileName;
  }

  return "";
}

export async function getFilenameFromUrlHead(url: string, options?: Options) {
  try {
    const response = await ky.head(url, {
      ...options,
      throwHttpErrors: false,
    })
    const filename = getFilenameFromResponse(response)
    if (filename) {
      return filename
    }
  } catch (error) {
    // console.error('Error getting filename from URL:', error);
  }
}

export async function getFilenameFromUrlEx(url: string, options?: Options) {
  // first try kv.head to get filenamee from the header
  let result = await getFilenameFromUrlHead(url, options)
  if (!result) {
    // if not found, try to get filename from the header
    result = getFilenameFromUrl(url)
  }
  return result
}

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition
export function getFilenameFromResponse(response: KyResponse) {
  const disposition = response.headers.get('content-disposition')
  if (disposition === null) {
    return
  }
  const utf8FilenameRegex = /filename\*=UTF-8''([\w%\-\.]+)(?:; ?|$)/i;
  const asciiFilenameRegex = /^filename=(["']?)(.*?[^\\])\1(?:; ?|$)/i;

  let fileName: string | undefined;
  if (utf8FilenameRegex.test(disposition)) {
    fileName = decodeURIComponent(utf8FilenameRegex.exec(disposition)![1]);
  } else {
    // prevent ReDos attacks by anchoring the ascii regex to string start and
    //  slicing off everything before 'filename='
    const filenameStart = disposition.toLowerCase().indexOf('filename=');
    if (filenameStart >= 0) {
      const partialDisposition = disposition.slice(filenameStart);
      const matches = asciiFilenameRegex.exec(partialDisposition);
      if (matches != null && matches[2]) {
        fileName = matches[2];
      }
    }
  }
  return fileName;
}

export function createWritableStream(filepath: string, flags = 'a') {
  const writeStream = fs.createWriteStream(filepath, { flags });
  return stream.Writable.toWeb(writeStream)
  // return new WritableStream({
  //   write(chunk) {
  //     writeStream.write(chunk)
  //   },
  //   // close the writeStream
  //   close() {
  //     writeStream.close()
  //   }
  // })
}
