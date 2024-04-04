import { ChunkDownload } from "./chunk-download"

export async function downloadFile(url, filepath, options) {
  if (!options) {
    options = {url, filepath}
  } else {
    options = {
      ...options,
      url,
      filepath,
    }
  }
  const port = options.port
  if (port) {delete options.signal}


  const downloader = new ChunkDownload(options)

  if (port) {
    // get message from main process
    port.on('message', async (message) => {
      if (message.type === 'abort') {
         await downloader.stop()
      }
    })
  }

  return downloader.start(options)
}

export default downloadFile