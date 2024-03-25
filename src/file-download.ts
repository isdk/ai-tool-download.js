import fs, { type WriteStream } from "fs";
import path from 'path'
import { MessageChannel } from 'node:worker_threads'
import TinyPool from 'tinypool'
import pLimit, { type LimitFunction } from 'p-limit';
import type { Options } from 'ky';
import { AbortErrorCode, throwError, wait } from "@isdk/ai-tool";

import { ChunkDownload, type ChunkOptions } from "./chunk-download";
import { AlreadyDownloadErrCode, FileDownloadStatus, UrlMetaInfo, getFilenameFromUrl, getUrlMetaInfo } from "./utils";
import { Stream } from "node:stream";

export const defaultChunkSizeInBytes = 1024 * 1024 * 64 // 64MB
export const defaultConcurrency = 3
export const minSplitSizeInBytes = 1024 * 1024 * 1 // 1MB

// const pool = new TinyPool({
//   // The URL must be a file:// URL
//   filename: new URL('./chunk-download-worker.mjs', import.meta.url).href,
// })

export interface FileDownloadOptions extends Options {
  url: string
  filepath?: string
  /**
   * The number of concurrent chunk downloads.
   */
  concurrency?: number
  /**
   * The size of each chunk.
   */
  chunkSizeInBytes?: number
  /**
   * The folder where the downloaded file will be saved.
   */
  destinationFolder?: string
  cleanTempFile?: boolean
  aborter?: AbortController
  limit?: LimitFunction
}

export class FileDownload {
  static minSplitSizeInBytes = minSplitSizeInBytes
  static defaultChunkSizeInBytes = defaultChunkSizeInBytes
  static defaultConcurrency = defaultConcurrency

  options: FileDownloadOptions
  chunks: ChunkDownload[] = []
  status: FileDownloadStatus = 'pending'

  protected transferredBytes: number = 0
  protected urlMetaInfo?: UrlMetaInfo

  constructor(url: string|FileDownloadOptions, options?: FileDownloadOptions) {
    if (typeof url !== 'string') {
      options = url
    } else {
      if (!options) {
        options = { url }
      } else {
        options.url = url
      }
    }

    this.resolveOptions(options)

    this.options = {
      concurrency: FileDownload.defaultConcurrency,
      chunkSizeInBytes: FileDownload.defaultChunkSizeInBytes,
      destinationFolder: '.',
      ...options,
    }
  }

  get minSplitSizeInBytes() {
    return (this.constructor as any).minSplitSizeInBytes
  }

  getAbsPath(options: FileDownloadOptions) {
    if (!options.filepath) {
      options.filepath = getFilenameFromUrl(options.url!)
    }
    return path.resolve(options.destinationFolder!, options.filepath)
  }

  createChunk(options: ChunkOptions) {
    return new ChunkDownload(options)
  }

  resolveOptions(options?: FileDownloadOptions) {
    if (!options) {options = this.options}
    else if (this.options) {
      const opts = this.options
      if (!options.destinationFolder) {options.destinationFolder = opts.destinationFolder}
      if (!options.filepath) { options.filepath = opts.filepath }
      if (!options.aborter) { options.aborter = opts.aborter }
      if (options.cleanTempFile === undefined) { options.cleanTempFile = opts.cleanTempFile }
    } else {
      if (!options.filepath) { options.filepath = getFilenameFromUrl(options.url!) }
      if (!options.aborter) { options.aborter = new AbortController() }
    }
    if (!options.limit) {
      options.limit = pLimit(options.concurrency ?? FileDownload.defaultConcurrency);
    }
    return options
  }

  async mergeChunks(options: FileDownloadOptions) {
    const filepath = this.getAbsPath(options)
    const dirPath = filepath + '.temp'

    const chunks = this.chunks.filter(chunk => chunk.status === 'completed')
    // merge all chunks to filepath
    const writer = fs.createWriteStream(filepath, {flags: 'a'})
    const streams: any = chunks.map(chunk => fs.createReadStream(chunk.options.filepath))
    await combineStreams(streams, writer)
    if (options.cleanTempFile !== false) {
      fs.rmSync(dirPath, { recursive: true })
    }
  }

  async splitChunks(options: FileDownloadOptions) {
    const filepath = this.getAbsPath(options)
    const dirPath = filepath + '.temp'

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    this.transferredBytes = 0

    const onProgress: any = options.onDownloadProgress || function(){}
    const info = this.urlMetaInfo ?? (this.urlMetaInfo = await getUrlMetaInfo(options.url, options))
    const totalSize = info.size
    if (info.canRange && totalSize && totalSize > this.minSplitSizeInBytes) {
      // split to chunks
      // const concurrency = options.concurrency ?? defaultConcurrency
      const chunkSizeInBytes = options.chunkSizeInBytes! // Math.ceil(totalSize / totalChunks)
      const totalChunks = Math.ceil(totalSize / chunkSizeInBytes)

      for (let i = 0; i < totalChunks; i++) {
        const onDownloadProgress = ((id: number, totalSize: number) => {
          return ({percent, totalBytes, transferredBytes}: any, chunk: Uint8Array) => {
            this.transferredBytes += chunk.length
            onProgress.call(this, {
              // percent, totalBytes, transferredBytes,
              percent: this.transferredBytes / totalSize,
              totalBytes: totalSize,
              transferredBytes: this.transferredBytes,
              id,
            }, chunk)
          }
        })(i, totalSize)
        const startByte = i * chunkSizeInBytes
        const endByte = Math.min(startByte + chunkSizeInBytes - 1, totalSize - 1)
        const chunk = this.createChunk({
          ...options,
          url: options.url,
          filepath: path.join(dirPath, `${i}.part`),
          startByte,
          endByte,
          index: i,
          skipCheck: info.headers,
          onDownloadProgress: onDownloadProgress.bind(this),
        })
        this.chunks.push(chunk)
      }

    } else {
      const chunk = this.createChunk({
        ...options,
        url: options.url,
        filepath,
        skipCheck: info.headers,
        onDownloadProgress: onProgress,
      })
      this.chunks.push(chunk)
    }
  }

  async _start(options: FileDownloadOptions) {
    const limit = options.limit!

    const chunks = this.chunks.filter(chunk => chunk.status !== 'completed')
    return Promise.all(chunks.map(chunk => limit(chunk.start.bind(chunk))))
  }

  async start(options?: FileDownloadOptions) {
    if (this.status === 'downloading') {
      throwError('File download has already started.', 'FileDownload', AlreadyDownloadErrCode)
    }

    this.status = 'downloading'
    options = this.resolveOptions(options)
    if (this.chunks.length === 0) {
      await this.splitChunks(options)
    }

    await this._start(options);

    const chunksStatus = this.chunks.map(chunk => chunk.status)
    if (chunksStatus.every(status => status === 'paused' || status === 'pending')) {
      this.status = 'paused'
    } else if (chunksStatus.every(status => status === 'completed')) {
      await this.mergeChunks(options)
      this.chunks.length = 0
      this.status = 'completed'
    } else {
      this.status = 'failed'
    }
  }

  async stop(options?: FileDownloadOptions) {
    if (this.status === 'downloading') {
      if (!options) {options = this.options}
      const limit = options.limit!
      limit.clearQueue()
      this.status = 'pausing'
      try {
        options.aborter?.abort({code: AbortErrorCode, message: 'paused'})
        await wait(0)
        await Promise.all(this.chunks.map(chunk => chunk.stop()))
      } finally {
        this.status = 'paused'
      }
    }
  }
}

async function combineStreams(sources: Stream[], destination: WriteStream) {
  for (const stream of sources) {
    await new Promise((resolve, reject) => {
      stream.pipe(destination, { end: false })
      stream.on('end', resolve)
      stream.on('error', reject)
    })
  }
  destination.emit('end')
}