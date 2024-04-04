import { AbortErrorCode, throwError, wait } from "@isdk/ai-tool";
import fs from "fs";
import ky, { type Options } from 'ky';
import { AlreadyDownloadErrCode, FileDownloadStatus, RangeRequestErrCode, createWritableStream, getUrlMetaInfo } from "./utils";
import type { MessagePort } from 'node:worker_threads'

export interface ChunkOptions extends Options {
  /**
   * download the url content
   */
  url: string
  /**
   * save the content to the filePath
   */
  filepath: string
  /**
   * The index of the chunk.
   */
  index?: number
  /**
   * The start byte of the chunk.
   */
  startByte?: number
  /**
   * The end byte of the chunk.
   */
  endByte?: number
  /**
   * overwrite the existing file.
   */
  overwrite?: boolean
  skipCheck?: Headers
  port?: MessagePort
  aborter?: AbortController
}

export class ChunkDownload {
  static nextId: number = 0

  options: ChunkOptions
  lastError?: Error;
  status: FileDownloadStatus = 'pending'

  constructor(
    options: ChunkOptions
  ) {
    options = { ...options }
    if (options.index === undefined) { options.index = ChunkDownload.nextId++ }

    if (!options.aborter) {
      options.aborter = new AbortController()
    }
    if (options.onDownloadProgress) options.onDownloadProgress = options.onDownloadProgress.bind(this)
    this.options = options
  }

  async start(options?: ChunkOptions): Promise<void> {
    if (this.status === 'downloading') {
      throwError(`The download has already started.`, 'ChunkDownload', AlreadyDownloadErrCode)
    }
    this.status = 'downloading'
    this.lastError = undefined

    if (!options) { options = this.options }
    else {
      if (!options.aborter) {options.aborter = new AbortController()}
      if (options.skipCheck === undefined) { options.skipCheck = this.options.skipCheck }
    }

    options.signal = options.aborter!.signal

    if (!options.headers) { options.headers = {} }
    const headers: any = options.headers
    if (!headers['user-agent']) {
      headers['user-agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    }

    let { startByte, endByte } = options
    let fileSize = 0
    let rangeHeader: string|undefined

    if (fs.existsSync(options.filepath)) {
      if (options.overwrite) {
        fs.unlinkSync(options.filepath)
      } else {
        fileSize = fs.statSync(options.filepath).size
      }
    }
    let reqChunkSize: number|undefined
    if (startByte !== undefined && endByte !== undefined) {
      reqChunkSize = endByte - startByte + 1
    }

    if (startByte !== undefined || endByte !== undefined) {
      if (startByte === undefined) { startByte = 0 }
      startByte += fileSize
      const endByteS = endByte === undefined ? '' : endByte.toString()
      if (endByteS && endByte! < startByte) {
        // already downloaded
        this.status = 'completed'
        return
      }

      rangeHeader = `bytes=${startByte}-${endByteS}`
    } else if (fileSize > 0) {
      startByte = fileSize
      rangeHeader = `bytes=${startByte}-`
    }

    // if (options.redirect === undefined) { options.redirect = 'manual' }
    try {
      // first to get content-length, make sure the server supports range requests
      const {canRange, size} = await getUrlMetaInfo(options.url, options, options.skipCheck)
      const contentLength = reqChunkSize ?? size

      if (contentLength && contentLength <= fileSize) {
        // the current file size >= contentLength which means already downloaded
        this.status = 'completed'
        return
      }

      if (rangeHeader) {
        const isPart = !((startByte === 0 || startByte == null) && (endByte === size || endByte == null))

        if (isPart && !canRange) {
          throwError(`The server does not accept range requests.`, 'ChunkDownload', RangeRequestErrCode)
        }
        if (isPart) options.headers = { ...options.headers, Range: rangeHeader }
      }

      if (contentLength == null && !options.skipCheck) {
        // check the range when the server does not return content-length
        const response = await ky.head(options.url, {
          ...options,
          throwHttpErrors: false,
        })

        if (response.status === 416) {
          // already downloaded
          this.status = 'completed'
          return
        }
      }

      const response = await ky.get(options.url, {
        ...options,
      });
      // const {size: thisSize} = await getUrlMetaInfo(options.url, options, response.headers)
      // console.log(options.index, '🚀 ~ ChunkDownload ~ start ~ this fetch Size:', thisSize)

      if (!response.ok) {
        const txt = await response.text()
        throwError(`The server returned an error ${txt}.`, 'ChunkDownload', response.status)
      }

      const body = response.body

      if (!body) { return }

      const writer = createWritableStream(options.filepath)
      await body.pipeTo(writer);
      this.status = 'completed'
    } catch (error: any) {
      if (error.code === AbortErrorCode) {
        this.status = 'paused'
      } else {
        this.status = 'failed'
        this.lastError = error as Error
      }
      throw error
    }
  }

  async stop(options?: ChunkOptions) {
    if (this.status !== 'pending') {
      if (!options) {options = this.options}
      this.status = 'pausing'
      try {
        await wait(0)
        options.aborter?.abort({code: AbortErrorCode, message: 'paused'})
      } finally {
        this.status = 'paused'
      }
    }
  }

  toJSON(): any {
    return {...this.options, status: this.status}
  }

}
