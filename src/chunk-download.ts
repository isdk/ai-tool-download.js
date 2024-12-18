import { AbortErrorCode, throwError, wait } from "@isdk/ai-tool";
import fs from "fs";
import ky, { type Options } from 'ky';

import { EventEmitter } from 'events-ex';
import type { MessagePort } from 'worker_threads'
import { AlreadyDownloadErrCode, FileDownloadStatus, RangeRequestErrCode, createWritableStream, getUrlMetaInfo } from "./utils";

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
  agent?: any
}

export class ChunkDownload extends EventEmitter {
  static nextId: number = 0

  options: ChunkOptions
  lastError?: Error;
  _status: FileDownloadStatus = 'pending'

  get status() {
    return this._status
  }
  set status(value: FileDownloadStatus) {
    if (this._status !== value) {
      this._status = value
      this.emit('status', value)
    }
  }

  constructor(
    options: ChunkOptions
  ) {
    super()
    options = { ...options }
    if (options.index === undefined) { options.index = ChunkDownload.nextId++ }

    if (!options.aborter) {
      options.aborter = new AbortController()
    }
    if (options.onDownloadProgress) {options.onDownloadProgress = options.onDownloadProgress.bind(this)}
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
      if (!options.agent) {options.agent = this.options.agent}
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

      const retry = options.retry ?? 9
      if (options.retry !== retry) {options.retry = retry}

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
      options = {...options}
      delete (options as any)._req
      delete (options as any)._res
      delete (options as any).skipCheck
      const downloadProgress = options.onDownloadProgress
      const onProgress: any = (progress: any, chunk: Uint8Array) => {
        this.emit('progress', progress, chunk)
        if (downloadProgress) { downloadProgress.call(this, progress, chunk) }
      }
      options.onDownloadProgress = onProgress

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
      await body.pipeTo(writer)
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
    const options = this.options
    return {startByte: options.startByte, endByte: options.endByte, status: this.status}
  }

}
