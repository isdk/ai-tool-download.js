import { ChunkDownload } from "./chunk-download"

export async function downloadFile(url, filepath, options) {
  const port = options && options.port
  if (port) {delete options.signal}

  const downloader = new ChunkDownload(url, filepath, options)

  if (port) {
    // get message from main process
    port.on('message', (message) => {
      if (message.type === 'abort') {
         downloader.abortController?.abort()
      }
    })
  }

  return downloader.start(options)
}

export default downloadFile