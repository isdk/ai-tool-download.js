import fs from "fs";
import path from 'path'
import type { Options } from 'ky';
import { EventEmitter } from 'events-ex';
import { AbortErrorCode, NotImplementationError, throwError, wait } from "@isdk/ai-tool";

import { ChunkDownload, type ChunkOptions } from "./chunk-download";
import {
  AlreadyDownloadErrCode,
  FileDownloadStatus,
  type UrlMetaInfo,
  concatStreamTo,
  defaultChunkSizeInBytes,
  defaultConcurrency,
  getFilenameFromUrl,
  getUrlMetaInfo,
  minSplitSizeInBytes
} from "./utils";

export interface BaseFileDownloadOptions extends Options {
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
}

export class BaseFileDownload extends EventEmitter {
  static minSplitSizeInBytes = minSplitSizeInBytes
  static defaultChunkSizeInBytes = defaultChunkSizeInBytes
  static defaultConcurrency = defaultConcurrency

  id?: string
  order?: number
  manager?: any
  options: BaseFileDownloadOptions
  chunks: ChunkDownload[] = []
  _status: FileDownloadStatus = 'pending'

  protected transferredBytes: number = 0
  protected urlMetaInfo?: UrlMetaInfo

  constructor(url: string|BaseFileDownloadOptions, options?: BaseFileDownloadOptions) {
    super()
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
      concurrency: BaseFileDownload.defaultConcurrency,
      chunkSizeInBytes: BaseFileDownload.defaultChunkSizeInBytes,
      destinationFolder: '.',
      ...options,
    }
  }

  get minSplitSizeInBytes() {
    return (this.constructor as any).minSplitSizeInBytes
  }

  get status() {
    return this._status
  }
  set status(value: FileDownloadStatus) {
    if (this._status !== value) {
      this._status = value
      const result = this.getIdInfo()
      this.emit('status', value, result)
    }
  }

  getIdInfo(): {url: string, id?: string, filepath?: string} {
    const result: any = { url: this.options.url }
    if (typeof this.id !== undefined) { result.id = this.id }
    if (typeof this.options?.filepath !== undefined) { result.filepath = this.options.filepath }
    return result
  }

  getAbsPath(options: BaseFileDownloadOptions) {
    if (!options.filepath) {
      options.filepath = getFilenameFromUrl(options.url!)
    }
    return path.resolve(options.destinationFolder!, options.filepath)
  }

  createChunk(options: ChunkOptions): any {
    throw new NotImplementationError
  }

  resolveOptions(options?: BaseFileDownloadOptions) {
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
    return options
  }

  async mergeChunks(options: BaseFileDownloadOptions) {
    const filepath = this.getAbsPath(options)
    const dirPath = filepath + '.temp'

    const chunks = this.chunks.filter(chunk => chunk.status === 'completed')
    // merge all chunks to filepath
    const writer = fs.createWriteStream(filepath, {flags: 'w+'})
    const streams: any = chunks.map(chunk => fs.createReadStream(chunk.options.filepath))
    await concatStreamTo(streams, writer)
    if (options.cleanTempFile !== false) {
      fs.rmSync(dirPath, { recursive: true })
    }
  }

  async splitChunks(options: BaseFileDownloadOptions) {
    const filepath = this.getAbsPath(options)
    const tempDirPath = filepath + '.temp'

    if (!fs.existsSync(tempDirPath)) {
      fs.mkdirSync(tempDirPath, { recursive: true });
    }

    this.transferredBytes = 0

    const onProgress: any = (progress: any, chunk: Uint8Array) => {
      this.emit('progress', progress, chunk, this.getIdInfo())
      if (options.onDownloadProgress) { options.onDownloadProgress.call(this, progress, chunk) }
    }

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
          filepath: path.join(tempDirPath, `${i}.part`),
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

  async _start(options: BaseFileDownloadOptions): Promise<any> {
    throw new NotImplementationError
  }

  async start(options?: BaseFileDownloadOptions) {
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

  async _stop(options: BaseFileDownloadOptions) {
  }

  async stop(options?: BaseFileDownloadOptions) {
    if (this.status === 'downloading') {
      options = this.resolveOptions(options)
      this.status = 'pausing'
      await this._stop(options)
      try {
        options.aborter?.abort({code: AbortErrorCode, message: 'paused'})
        await wait(0)
        await Promise.all(this.chunks.map(chunk => chunk.stop()))
      } finally {
        this.status = 'paused'
      }
    }
  }
  toJSON(): any {
    let result: any = {...this.options, status: this.status}
    if (this.id != null) {result.id = this.id}
    if (this.order != null) {result.order = this.order}
    return result
  }

}
