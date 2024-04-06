// import { MessageChannel } from 'worker_threads'
import TinyPool from 'tinypool'
import { BaseFileDownload, type BaseFileDownloadOptions, type CustomBaseFileDownloadOptions } from "./base-file-download";
import { type ChunkOptions } from './chunk-download';

export const threadPool = new TinyPool({
  // The filename must be a file:// URL
  filename: new URL('./chunk-download-worker.mjs', import.meta.url).href,
})

export type ThreadFileDownloadOptions = BaseFileDownloadOptions & {
}

export class ThreadFileDownload extends BaseFileDownload {
  static threadPool: TinyPool

  // create chunk worker
  createChunk(options: ChunkOptions) {
  }

  resolveOptions(options?: CustomBaseFileDownloadOptions) {
    options = super.resolveOptions(options)
    return options
  }

  async _start(options: ThreadFileDownloadOptions) {
  }

  async _stop(options: ThreadFileDownloadOptions) {
  }

}