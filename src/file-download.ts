import pLimit, { type LimitFunction } from 'p-limit';
import { ChunkDownload, type ChunkOptions } from "./chunk-download";
import { BaseFileDownload, BaseFileDownloadOptions } from "./base-file-download";

export interface FileDownloadOptions extends BaseFileDownloadOptions {
  limit?: LimitFunction
}

export class FileDownload extends BaseFileDownload {

  createChunk(options: ChunkOptions) {
    return new ChunkDownload(options)
  }

  resolveOptions(options?: FileDownloadOptions) {
    options = super.resolveOptions(options)
    if (!options.limit) {
      options.limit = pLimit(options.concurrency ?? FileDownload.defaultConcurrency);
    }
    return options
  }

  async _start(options: FileDownloadOptions) {
    const limit = options.limit!

    const chunks = this.chunks.filter(chunk => chunk.status !== 'completed')
    return Promise.all(chunks.map(chunk => limit(chunk.start.bind(chunk))))
  }

  async _stop(options: FileDownloadOptions) {
    const limit = options.limit!
    limit.clearQueue()
  }
}
