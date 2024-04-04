import { inject } from 'vitest'
import fs from 'fs'
import path from 'path'
import { AbortErrorCode, wait } from '@isdk/ai-tool';

import { FileDownload } from '../src/file-download';

const chunkSizeInBytes = 1024 * 512; // 512KB
FileDownload.minSplitSizeInBytes = chunkSizeInBytes

const xyj  = 'xyj.txt'
const tmpFilePath = '/tmp/123' + xyj
const tmpDir = tmpFilePath + '.temp'
const src = fs.readFileSync(path.join(__dirname, 'res', xyj))
const totalBytes = src.length

declare module 'vitest' {
  export interface ProvidedContext {
    'server-url': string
  }
}

describe('FileDownload', () => {
  const url: string = inject('server-url')

  it('should download a file', async () => {
    if (fs.existsSync(tmpFilePath)) fs.rmSync(tmpFilePath, { recursive: true })
    if (fs.existsSync(tmpFilePath+'.temp')) fs.rmSync(tmpFilePath+'.temp', { recursive: true })
    // let last: any = {}
    let last: any = 0
    let reqAbort = true

    // totalBytes: the file size
    const onDownloadProgress: any = async function({percent: p, totalBytes, transferredBytes, id}, chunk: Uint8Array) {
      const percent = Math.round(p * 100)
      // if (last[id] === undefined) {
      //   last[id] = 0
      // }
      // if (percent > last[id] + 30) {
      //   console.log(id, '🚀 ~ onDownloadProgress ~ percent: %', percent, transferredBytes, totalBytes)
      //   last[id] = percent
      //   if (reqAbort) {
      //     await this.stop()
      //   }
      // }
      if (percent > last + 30) {
        console.log(id, `🚀 ~ onDownloadProgress ~ percent: %${(p * 100)}, transferredBytes: ${transferredBytes}, totalBytes: ${totalBytes}`)
        last = percent
        if (reqAbort) {
          await this.stop()
        }
      } else if (percent === 100) {
        console.log(id, `🚀 ~ onDownloadProgress ~ percent: %${(p * 100).toFixed(2)}, transferredBytes: ${transferredBytes}, totalBytes: ${totalBytes}`)
      }
    }

    const dn = new FileDownload({url: url+xyj, filepath: tmpFilePath, cleanTempFile: false, chunkSizeInBytes, onDownloadProgress})
    try {
      await dn.start()
    } catch (error) {
      if (error.code === AbortErrorCode) {
        reqAbort = false
      } else {
        throw error
      }
    }
    await wait(50)
    expect(reqAbort).toBe(false)
    const chunkCount = Math.ceil(totalBytes / chunkSizeInBytes)
    expect(dn.chunks.length).toBe(chunkCount)
    const chunksStatus = dn.chunks.map(c => c.status)
    // console.log('🚀 ~ it ~ chunksStatus:', chunksStatus)
    expect(chunksStatus.every(s => s === 'paused' || s === 'pending' || s === 'completed')).toBe(true)
    expect(dn.status).toBe('paused')
    console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀')

    await dn.start()

    const content = fs.readFileSync(tmpFilePath)
    expect(content.length).toEqual(src.length)
    expect(compareStr(src, content)).toBeTruthy()
    expect(dn.status).toBe('completed')
    expect(fs.existsSync(tmpDir)).toBe(!(dn.options.cleanTempFile !== false))
  });

});

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