import path from 'path'
import {
  AlreadyExistsError,
  EventName,
  event,
  eventServer,
  isValidFilepath,
  throwError,
  xxhashAsStr,
  ResServerTools,
  ResServerFuncParams,
  NotFoundError,
  ErrorCode,
  // EventBusName,
} from "@isdk/ai-tool";
// import type { DownloadProgress } from 'ky';
// import type { EventEmitter } from 'events-ex';

import { FileDownload, FileDownloadOptions } from "./file-download";
import { BaseFileDownloadOptions } from "./base-file-download";
import { FileDownloadStatus, defaultChunkSizeInBytes, defaultConcurrency } from './utils';

//type DownloadProgressFunc = (progress: DownloadProgress, chunk: Uint8Array) => void

interface DownloadFuncParams extends BaseFileDownloadOptions, ResServerFuncParams {
  autostart?: boolean
  waitForCompletion?: boolean
}

export interface DownloadConfiguration {
  concurrency?: number
  rootDir?: string
  autostartQueue?: boolean
  cleanTempFile?: boolean
  chunkSizeInBytes?: number
  autoScaleDownloads?: boolean
}

interface DownloadItem extends FileDownloadOptions {
  url: string
  order?: number
  id?: string
}

interface DownloadItems {
  [id: string]: FileDownload
}

interface DownloadOptionsItems {
  [id: string]: DownloadItem
}

const eventBus = event.runSync()

export const DownloadName = 'download'
export const DownloadProgressEventName = DownloadName + ':progress'
export const DownloadStatusEventName   = DownloadName + ':status'
export const DownloadErrorEventName   = DownloadName + ':error'

/**
 * Server-side download management utility that handles a file download queue and notifies progress via SSE events.
 * Requires persistent storage of the download queue.
 */
export class DownloadFunc extends ResServerTools {
  queue: DownloadItems = {};
  finished: DownloadItems = {};
  rootDir: string|undefined
  nextOrder = 0
  concurrency = defaultConcurrency
  /**
   * Indicates whether the download queue should automatically start processing the next task upon completion of the current one.
   *
   * When set to `true`, the system will automatically initiate the download of the next item in the queue as soon as the current
   * download task finishes successfully. If set to `false`, manual intervention will be required to begin subsequent downloads.
   */
  autostartQueue: boolean|undefined
  /**
   * Determines whether to clean up temporary files when a downloading or paused task is removed.
   * If set to `true`, temporary files will be deleted when a downloading or paused task is removed.
   * If set to `false`, temporary files will not be deleted.
   * @type {boolean}
   */
  cleanTempFile = true
  chunkSizeInBytes = defaultChunkSizeInBytes
  /**
   * Determines whether to automatically scale downloads when the concurrency limit is reached.
   * If set to `true`, the system will automatically stop existing download tasks to start new ones when the concurrency limit is reached.
   * If set to `false`, an error message "Concurrency limit reached" will be reported instead.
   */
  autoScaleDownloads: boolean|undefined

  depends = {[EventName]: eventServer}

  // static onDownloadProgress = function(this: FileDownload, progress: DownloadProgress) {
  //   const id = this.id
  //   const eventType = id ? DownloadProgressEventName + ':' + id : DownloadProgressEventName
  //   eventBus?.emit(eventType, 'Download', progress)
  //   if (progress.percent === 1 && id !== undefined) {
  //     eventBus?.emit(DownloadStatusEventName + ':' + id, 'Download', 'completed')
  //     delete this.manager.queue[id]
  //     this.manager.finished[id] = this
  //   }
  // }

  importQueue(queue: DownloadOptionsItems) {
    for (const id in queue) {
      const options = queue[id]
      if (options) {
        this.newDownload(options, id)
      }
    }
  }

  exportQueue() {
    const queue: DownloadOptionsItems = {}
    for (const id in this.queue) {
      const download = this.queue[id]
      if (download) {
        queue[id] = download.toJSON()
      }
    }
    return queue
  }

  getId(options: DownloadFuncParams|string): string|undefined {
    if (typeof options === 'string') {
      return options
    } else if (options) {
      options = (options.id || xxhashAsStr(options.url!)) as string
      return options
    }
  }

  onCompleted(id: string) {
    const queue = this.queue
    const dn = queue[id]
    if (dn) {
      delete queue[id]
      this.finished[id] = dn
      if (this.autostartQueue) this.startAll()
    }
  }

  getDownloadsInQueue(status?: FileDownloadStatus, isNot?: boolean) {
    const result = Object.values(this.queue)
    if (!status) { return result }
    if (!isNot) {
      return result.filter(dn => dn.status === status)
    } else {
      return result.filter(dn => dn.status !== status)
    }
  }

  startAll() {
    let left = this.concurrency - this.getDownloadsInQueue('downloading').length
    if (left > 0) {
      const ordered = this.getDownloadsInQueue('pending').sort((a, b) => a.order! - b.order!)
      left = Math.min(left, ordered.length)
      if (ordered.length) {
        for (let i=0; i<left; i++) {
          const dn = ordered[i];
          setImmediate(async () => {
            // console.log('🚀 ~ DownloadFunc ~ setImmediate ~ dn:', dn?.id, dn?.options.url)
            try {
              await dn.start()
            } catch(err) {
              eventBus.emit(DownloadErrorEventName + ':' + dn.id, 'Download', err)
            }
          })
        }
      }
    }
  }

  async stopAll() {
    const queue = this.queue
    for (const id in queue) {
      const download = queue[id]
      if (download.status === 'downloading') {
        await download.stop()
      }
    }
  }

  newDownload(options: BaseFileDownloadOptions, id: string) {
    // , onDownloadProgress: DownloadFunc.onDownloadProgress
    const download = new FileDownload({...options,
      destinationFolder: this.rootDir || '.',
      chunkSizeInBytes: this.chunkSizeInBytes,
      cleanTempFile: this.cleanTempFile,
    })
    download.id = id
    download.order = options?.order !== undefined ? options?.order : this.nextOrder++
    download.manager = this
    download.on('status', (status: FileDownloadStatus, idInfo: {url: string, id?: string, filepath?: string}) => {
      const id = idInfo.id
      const eventType = id ? DownloadStatusEventName + ':' + id : DownloadStatusEventName
      if (status === 'completed' && id !== undefined) {
        this.onCompleted(id)
      }
      eventBus.emit(eventType, 'Download', status, idInfo)
    })
    download.on('progress', (progress: {percent:number, totalBytes:number, transferredBytes:number}, chunk: Uint8Array, idInfo: {url: string, id?: string, filepath?: string}) => {
      const id = idInfo.id
      const eventType = id ? DownloadProgressEventName + ':' + id : DownloadProgressEventName
      eventBus.emit(eventType, 'Download', progress, idInfo)
      // if (progress.percent === 1 && id !== undefined) {
      //   eventBus.emit(DownloadStatusEventName + ':' + id, 'Download', 'completed')
      //   const dn = this.queue[id]
      //   console.log('🚀 ~ DownloadFunc ~ download.on ~ dn:', dn)
      //   delete this.queue[id]
      //   this.finished[id] = dn
      // }
    })

    this.queue[id] = download
    return download
  }

  add(options: BaseFileDownloadOptions) {
    let filepath = options.filepath!
    if (filepath)  {
      if (path.isAbsolute(filepath) && this.rootDir && path.relative(this.rootDir, filepath)[0] === '.') {throwError('filepath must be relative path:' + filepath, 'add', ErrorCode.InvalidArgument)}
      if (!isValidFilepath(filepath)) {throwError('filepath must be valid path:' + filepath, 'add', ErrorCode.InvalidArgument)}
    } else if (!this.rootDir) {
      throwError('filepath must be provided', 'add', ErrorCode.InvalidArgument)
    }
    const url = options.url!
    if (!url) {throwError('url must be provided', 'add')}
    const hashId = xxhashAsStr(url)
    let download = this.queue[hashId]
    if (download) {throw new AlreadyExistsError(url, 'add')}
    if (this.rootDir && filepath) filepath = path.join(this.rootDir, filepath)
    // , onDownloadProgress: DownloadFunc.onDownloadProgress
    download = this.newDownload(options, hashId)
    return hashId
  }

  async _start(options: DownloadFuncParams|string) {
    const id = this.getId(options)
    if (id) {
      const download = this.queue[id]
      if (download) {
        if (download.status !== 'downloading') {
          try {
            await download.start()
          } catch (error) {
            eventBus.emit(DownloadErrorEventName + ':' + id, 'Download', error)
          }
        }
      }
    }
  }

  async start(options: DownloadFuncParams|string) {
    const id = this.getId(options)
    if (id) {
      const download = this.queue[id]
      if (download) {
        if (download.status !== 'downloading') {
          const ordered = this.getDownloadsInQueue('downloading').sort((a, b) => a.order! - b.order!)
          if (this.concurrency - ordered.length <= 0) {
            if (this.autoScaleDownloads) {
              const dn = ordered[0]
              await dn.stop()
            } else {
              download.status = 'pending'
              throwError('Concurrency limit reached', 'start', ErrorCode.NotAcceptable)
            }
          }
          if (options && typeof options !== 'string' && options.waitForCompletion) {
            await this._start(id)
          } else {
            setImmediate(async () => await this._start(id))
          }
        }
      }
    }
  }

  getItem(options: DownloadFuncParams|string) {
    let id = this.getId(options)
    if (id) {
      const download = this.queue[id]
      return download
    }
  }

  async $start(options: DownloadFuncParams) {
    const id = this.getId(options)
    if (id) {
      if (this.queue[id]) {
        await this.start(id)
      } else {
        throw new NotFoundError(id, 'start')
      }
      return {id}
    } else {
      if (options?.autostartQueue) { this.autostartQueue = true }
      this.startAll()
    }
  }

  async $stop(options: DownloadFuncParams|string) {
    const id = this.getId(options)
    const cleanTempFile = (options as any)?.cleanTempFile
    if (id) {
      const download = this.queue[id]
      if (download) {
        if (download.status === 'downloading') {
          await download.stop()
          if (cleanTempFile) { download.cleanTemp() }
        }
        return {id, status: download.status, url: download.options.url}
      } else {
        throw new NotFoundError(id, 'stop')
      }
    } else {
      await this.stopAll()
      return {status: 'paused'}
    }
  }

  async $clean(options: {completed?: boolean, paused?: boolean, downloading?: boolean}) {
    const result: any[] = []
    if (options?.completed !== false) {
      for (const [id, download] of Object.entries(this.finished)) {
        result.push({id, url: download.options.url, filepath: download.options.filepath})
      }
      this.finished = {}
    }
    if (options?.paused) {
      for (const [id, download] of Object.entries(this.queue)) {
        if (download.status !== 'downloading') {
          if (this.cleanTempFile) { download.cleanTemp() }
          result.push({id, url: download.options.url, filepath: download.options.filepath})
          delete this.queue[id]
        }
      }
    }
    if (options?.downloading) {
      for (const [id, download] of Object.entries(this.queue)) {
        if (download.status === 'downloading') {
          await this.$stop(id)
          if (this.cleanTempFile) { download.cleanTemp() }
          result.push({id, url: download.options.url, filepath: download.options.filepath})
          delete this.queue[id]
        }
      }
    }
    return result
  }

  $config(options?: DownloadConfiguration) {
    if (options) {
      if (options.concurrency !== undefined) {
        this.concurrency = options.concurrency
      }
      if (options.rootDir !== undefined) {
        this.rootDir = options.rootDir
      }
      if (options.autostartQueue !== undefined) {
        this.autostartQueue = options.autostartQueue
      }
      if (options.cleanTempFile !== undefined) {
        this.cleanTempFile = options.cleanTempFile
      }
      if (options.chunkSizeInBytes! > 0) {
        this.chunkSizeInBytes = options.chunkSizeInBytes!
      }
      if (options.autoScaleDownloads !== undefined) {
        this.autoScaleDownloads = options.autoScaleDownloads
      }
    }
    return {
      concurrency: this.concurrency,
      rootDir: this.rootDir,
      autostartQueue: this.autostartQueue || false,
      cleanTempFile: this.cleanTempFile,
      chunkSizeInBytes: this.chunkSizeInBytes,
      autoScaleDownloads: this.autoScaleDownloads || false,
    }
  }

  async post(options: DownloadFuncParams) {
    const id = this.getId(options)
    if (id) {
      const download = this.queue[id] || this.finished[id]
      if (download) {
        const url = download.options.url
        throw new AlreadyExistsError(url, 'post')
      }
      const hashId = this.add(options)
      if (options.start) {
        await this.start({...options, id})
      }
      return {id: hashId}
    }
  }

  put(options: DownloadFuncParams) {
    const id = this.getId(options)
    if (id) {
      const download = this.queue[id]
      if (download) {
        if (options.start) {
          this.$start(options)
        } else if (options.start === false) {
          this.$stop(options)
        } else {
          throwError('start option required', 'put')
        }
        return {id}
      }
      throw new NotFoundError(options.url || id, 'put')
    } else {
      throwError('id required', 'put', ErrorCode.InvalidArgument)
    }
  }

  get(options: DownloadFuncParams) {
    const id = this.getId(options)
    if (id) {
      const download = this.queue[id] || this.finished[id]
      if (!download) {
        throw new NotFoundError(options.url || id, 'get')
      }
      const result: any = {url: download.options.url, filepath: download.options.filepath, id: options.id, status: download.status}
      if (download.status === 'downloading') {
        result.chunks = download.chunks
        result.transferredBytes = download.transferredBytes
      }
      return result
    } else {
      throwError('id required', 'get', ErrorCode.InvalidArgument)
    }
  }

  list(options: DownloadFuncParams) {
    if (options?.finishedOnly) {
      return Object.keys(this.finished)
    }
    if (options?.downloadingOnly) {
      return Object.keys(this.queue).filter(id => this.queue[id].status === 'downloading')
    }

    if (options?.pausedOnly) {
      return Object.keys(this.queue).filter(id => this.queue[id].status !== 'downloading')
    }

    const ids = Object.keys(this.queue)
    if (options?.finished) {
      return ids.concat(Object.keys(this.finished))
    }
    return ids
  }

  async delete(options: DownloadFuncParams) {
    let download: FileDownload|undefined
    const id = this.getId(options)
    if (id) {
      download = this.queue[id]
      if (download) {
        delete this.queue[id]
        await download.stop()
        if (this.cleanTempFile) { download.cleanTemp() }
        return {id, url: download.options.url, filepath: download.options.filepath, status: download.status}
      } else {
        download = this.finished[id]
        if (download) {
          delete this.finished[id]
          return {id, url: download.options.url, filepath: download.options.filepath, status: download.status}
        }
      }
      throw new NotFoundError(options.url || id, 'delete')
    } else {
      throwError('id required', 'delete', ErrorCode.InvalidArgument)
    }
  }
}

export const download = new DownloadFunc(DownloadName)
