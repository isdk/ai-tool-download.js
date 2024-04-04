import fs from 'fs'
import path from 'path'
import { AlreadyExistsError, EventName, event, eventServer, isValidFilepath, throwError, xxhashAsStr, ResServerTools, ResServerFuncParams, NotFoundError, ErrorCode } from "@isdk/ai-tool";
import type { DownloadProgress } from 'ky';

import { FileDownload, FileDownloadOptions } from "./file-download";
import { BaseFileDownloadOptions } from "./base-file-download";
import { FileDownloadStatus, defaultConcurrency } from './utils';

//type DownloadProgressFunc = (progress: DownloadProgress, chunk: Uint8Array) => void

interface DownloadFuncParams extends BaseFileDownloadOptions, ResServerFuncParams {

}

interface DownloadItem extends FileDownloadOptions {
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

const DownloadProgressEventName = 'progress'
const DownloadStatusEventName = 'status'

/**
 * 服务器端下载管理工具,管理文件下载队列,通过SSE事件通知进度.
 * 需要持久化保存下载队列
 */
export class DownloadFunc extends ResServerTools {
  queue: DownloadItems = {};
  finished: DownloadItems = {};
  rootDir: string|undefined
  nextOrder = 0
  concurrency = defaultConcurrency
  autostart: boolean|undefined

  depends = {[EventName]: eventServer}

  static onDownloadProgress = function(this: FileDownload, progress: DownloadProgress) {
    const id = this.id
    const eventType = id ? DownloadProgressEventName + ':' + id : DownloadProgressEventName
    eventBus.emit(eventType, 'Download', progress)
    if (progress.percent === 1 && id !== undefined) {
      eventBus.emit(DownloadStatusEventName + ':' + id, 'Download', 'completed')
      delete this.manager.queue[id]
      this.manager.finished[id] = this
    }
  }

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

  getId(options: DownloadFuncParams|string) {
    if (typeof options === 'string') {
      return options
    } else if (options) {
      options = options.id || xxhashAsStr(options.url!)
      return options
    }
  }

  onCompleted(id: string) {
    const queue = this.queue
    const dn = queue[id]
    if (dn) {
      delete queue[id]
      this.finished[id] = dn
      if (this.autostart) this.startAll()
    }
  }

  startAll() {
    const queue = this.queue
    let left = this.concurrency - Object.keys(queue).filter(k => queue[k].status === 'downloading').length
    if (left > 0) {
      const ordered = Object.values(queue).filter(dn => dn.status !== 'downloading').sort((a, b) => a.order! - b.order!)
      left = Math.min(left, ordered.length)
      if (ordered.length) {
        for (let i=0; i<left; i++) {
          const dn = ordered[i];
          setImmediate(async () => {
            // console.log('🚀 ~ DownloadFunc ~ setImmediate ~ dn:', dn?.id, dn?.options.url)
            try {
              await dn.start()
            } catch(err) {
              eventBus.emit('error:' + dn.id, 'Download', err)
            }
          })
        }
      }
    }
  }

  newDownload(options: BaseFileDownloadOptions, id: string) {
    // , onDownloadProgress: DownloadFunc.onDownloadProgress
    const download = new FileDownload({...options, destinationFolder: this.rootDir})
    download.id = id
    download.order = this.nextOrder++
    download.manager = this
    download.on('status', (status: FileDownloadStatus, idInfo: {url: string, id?: string, filepath?: string}) => {
      const id = idInfo.id
      const eventType = id ? DownloadStatusEventName + ':' + id : DownloadStatusEventName
      if (status === 'completed' && id !== undefined) {
        this.onCompleted(id)
      }
      eventBus.emit(eventType, 'Download', status)
    })
    download.on('progress', (progress: {percent:number, totalBytes:number, transferredBytes:number}, chunk: Uint8Array, idInfo: {url: string, id?: string, filepath?: string}) => {
      const id = idInfo.id
      const eventType = id ? DownloadProgressEventName + ':' + id : DownloadProgressEventName
      eventBus.emit(eventType, 'Download', progress)
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
      if (path.isAbsolute(filepath)) {throwError('filepath must be relative path:' + filepath, 'add', ErrorCode.InvalidArgument)}
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
            eventBus.emit('error:' + id, 'Download', error)
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

  $start(options: DownloadFuncParams) {
    const id = this.getId(options)
    if (id) {
      if (this.queue[id]) {
        setImmediate(async () => await this._start(id))
      } else {
        throw new NotFoundError(id, 'start')
      }
      return {id}
    }
  }

  async $stop(options: DownloadFuncParams|string) {
    const id = this.getId(options)
    if (id) {
      const download = this.queue[id]
      if (download) {
        if (download.status === 'downloading') {
          await download.stop()
        }
        return {id, status: download.status, url: download.options.url}
      } else {
        throw new NotFoundError(id, 'stop')
      }
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
          result.push({id, url: download.options.url, filepath: download.options.filepath})
          delete this.queue[id]
        }
      }
    }
    if (options?.downloading) {
      for (const [id, download] of Object.entries(this.queue)) {
        if (download.status === 'downloading') {
          await this.$stop(id)
          result.push({id, url: download.options.url, filepath: download.options.filepath})
          delete this.queue[id]
        }
      }
    }
    return result
  }

  $config(options?: {concurrency?: number, rootDir?: string, autostart?: boolean}) {
    if (options) {
      if (options.concurrency !== undefined) {
        this.concurrency = options.concurrency
      }
      // if (options.rootDir !== undefined) {
      //   this.rootDir = options.rootDir
      // }
      if (options.autostart !== undefined) {
        this.autostart = options.autostart
      }
    }
    return {concurrency: this.concurrency, rootDir: this.rootDir, autostart: this.autostart}
  }

  post(options: DownloadFuncParams) {
    const id = this.getId(options)
    if (id) {
      const download = this.queue[id] || this.finished[id]
      if (download) {
        const url = download.options.url
        throw new AlreadyExistsError(url, 'post')
      }
      const hashId = this.add(options)
      if (options.start) {
        setImmediate(async () => await this._start(hashId))
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
          this.start(options)
        } else if (options.start === false) {
          this.stop(options)
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
      return {url: download.options.url, filepath: download.options.filepath, id: options.id, status: download.status}
    } else {
      throwError('id required', 'get', ErrorCode.InvalidArgument)
    }
  }

  list(options: DownloadFuncParams) {
    if (options?.finishedOnly) {
      return Object.keys(this.finished)
    }

    const ids = Object.keys(this.queue)
    if (options?.finished) {
      return ids.concat(Object.keys(this.finished))
    }
    return ids
  }

  delete(options: DownloadFuncParams) {
    let download: FileDownload|undefined
    const id = this.getId(options)
    if (id) {
      download = this.queue[id]
      if (download) {
        delete this.queue[id]
        download.stop()
        return {id, url: download.options.url, filepath: download.options.filepath}
      }
      throw new NotFoundError(options.url || id, 'delete')
    } else {
      throwError('id required', 'delete', ErrorCode.InvalidArgument)
    }
  }
}

