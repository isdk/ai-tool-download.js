import fs from 'fs'
import path from 'path'
import { inject } from 'vitest'

import { AbortError, AbortErrorCode } from '@isdk/ai-tool'
import { ChunkDownload } from '../src/chunk-download'
import { rmFile } from './util/rm-file'
import { FileDownloadStatus } from '../src/utils'

const Video200M = 'https://link.testfile.org/iK7sKT'
const Video35M = 'https://link.testfile.org/DNnCeI'
const Video11M = 'https://link.testfile.org/bNYZFw'
const text = 'https://www.gutenberg.org/ebooks/1513.txt.utf-8'
const xyj  = 'xyj.txt'

const tmpFilePath = '/tmp/files-5GB.test'

declare module 'vitest' {
  export interface ProvidedContext {
    'server-url': string
  }
}

describe('ChunkDownload class', () => {
  const url: string = inject('server-url')
  beforeEach(()=>{
    rmFile(tmpFilePath)
  })

  it('should download file', async () => {
    const aborter = new AbortController()
    let last = 0
    let reqAbort = true

    // totalBytes: the file size
    const onDownloadProgress = function({percent, totalBytes, transferredBytes}, chunk: Uint8Array) {
      percent = Math.round(percent * 100)
      if (percent > last + 40) {
        // console.log('🚀 ~ onDownloadProgress ~ percent: %', last, percent, totalBytes, transferredBytes)
        last = percent
        if (reqAbort) {
          // aborter.abort({code: AbortErrorCode, message: 'paused'})
          this.stop()
        }
      }
    }

    const chunk = new ChunkDownload({url: url+xyj, filepath: tmpFilePath, overwrite: false, index: 0, aborter, timeout:false, onDownloadProgress})
    try {
      await chunk.start()
    } catch (error) {
      if (error.code === AbortErrorCode) {
        reqAbort = false
      } else {
        throw error
      }
    }
    expect(reqAbort).toBeFalsy()
    expect(chunk.status).toBe('paused')
    expect(fs.existsSync(tmpFilePath)).toBeTruthy()
    const src = fs.readFileSync(path.join(__dirname, 'res', xyj))
    let content = fs.readFileSync(tmpFilePath)
    expect(compareStr(src, content)).toBeTruthy()

    // resume download
    await chunk.start()
    content = fs.readFileSync(tmpFilePath)
    expect(content.length).toEqual(src.length)
    expect(compareStr(src, content)).toBeTruthy()
    expect(chunk.status).toBe('completed')

    // await sleep(3500)
    // const err = new AbortError('pause')
    // console.log('🚀 ~ it ~ err:', err, err.code)
    // abortController.abort({code: AbortErrorCode, message: 'pause'})
  }, 10000);

  it('should download file with event', async () => {
    const aborter = new AbortController()
    let last = 0
    let reqAbort = true
    let st = ''

    // totalBytes: the file size
    const onDownloadProgress = function({percent, totalBytes, transferredBytes}, chunk: Uint8Array) {
      percent = Math.round(percent * 100)
      if (percent > last + 40) {
        // console.log('🚀 ~ onDownloadProgress ~ percent: %', last, percent, totalBytes, transferredBytes)
        last = percent
        if (reqAbort) {
          // aborter.abort({code: AbortErrorCode, message: 'paused'})
          this.target.stop()
        }
      }
    }

    const onStatus = function(status: FileDownloadStatus) {
      st = status
    }

    const chunk = new ChunkDownload({url: url+xyj, filepath: tmpFilePath, overwrite: false, index: 0, aborter, timeout:false})
    try {
      chunk.on('progress', onDownloadProgress)
      chunk.on('status', onStatus)
      await chunk.start()
    } catch (error) {
      if (error.code === AbortErrorCode) {
        reqAbort = false
      } else {
        throw error
      }
    }
    expect(reqAbort).toBeFalsy()
    expect(chunk.status).toBe('paused')
    expect(st).toBe('paused')
    expect(fs.existsSync(tmpFilePath)).toBeTruthy()
    const src = fs.readFileSync(path.join(__dirname, 'res', xyj))
    let content = fs.readFileSync(tmpFilePath)
    expect(compareStr(src, content)).toBeTruthy()

    // resume download
    await chunk.start()
    content = fs.readFileSync(tmpFilePath)
    expect(content.length).toEqual(src.length)
    expect(compareStr(src, content)).toBeTruthy()
    expect(chunk.status).toBe('completed')

  }, 10000);
});

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function compareStr(src: Buffer, dest: Buffer) {
  expect(src.length).toBeGreaterThanOrEqual(dest.length)

  for (let i = 0; i < dest.length; i++) {
    if (src[i] !== dest[i]) {
      console.log('🚀 ~ compareStr ~ src[i]:', i, src[i], dest[i], dest.length)
      return false
    }
  }
  return true
}