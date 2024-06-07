@isdk/ai-tool-download / [Exports](modules.md)

# ai-tool-download

The Large File Downloader for `ServerTools`

The current implementation includes the following features:

1. **ChunkDownload**: A class to download a file in chunks, supporting both single and concurrent block downloads with resuming functionality.
2. **BaseFileDownload**: An abstract class for multi-block concurrent download of a single file, assuming that the server supports range requests.
3. **FileDownload**: Utilizes p-limit to implement an asynchronous multi-threaded download process, inheriting from `BaseFileDownload`.
4. **DownloadFunc (AI ResServerTool Func)**: Exposes a RESTful API for managing file downloads, relying on the `FileDownload` class.

**Features:**

1. Supports range requests to enable efficient concurrent chunk downloading and resuming interrupted downloads.
2. Implements basic functionalities such as single-block download, multi-threaded download (using p-limit), and status tracking for each file download task.
3. Provides a configuration interface (`config`) to set server parameters or retrieve current settings:
   - `concurrency`: Maximum number of concurrent downloads allowed
   - `rootDir`: Root directory where downloaded files will be stored
   - `autostartQueue`: Automatically start the next pending task in the queue after a file is completed
   - `cleanTempFile`: Whether to remove temporary files upon successful completion
   - `autoScaleDownloads`: If concurrency limit is reached, automatically stop an older download or report an error

## Installation

```bash
npm install @isdk/ai-tool-download
```
or
```bash
yarn add @isdk/ai-tool-download
```

## Usage

### ChunkDownload Usage

```ts
import { AbortErrorCode } from '@isdk/ai-tool'
import { ChunkDownload } from '@isdk/ai-tool-download'
const aborter = new AbortController()
const chunk = new ChunkDownload({url: 'http://example.com/file.zip', filepath: '/tmp/file.zip', overwrite: false, index: 0, aborter, timeout:false})
chunk.on('progress', ({percent, totalBytes, transferredBytes}, chunk: Uint8Array) => {
  console.log('🚀 ~ onDownloadProgress ~ percent: %', percent, totalBytes, transferredBytes)
})
chunk.on('status', function(status: FileDownloadStatus) {
  console.log(status)
})
try {
  await chunk.start()
} catch (error) {
  if (error.code === AbortErrorCode) {
    // the abort signal sended
  } else {
    throw error
  }
}
```

### FileDownload Usage

```ts
import { AbortErrorCode } from '@isdk/ai-tool'
import { FileDownload } from '@isdk/ai-tool-download'
const aborter = new AbortController()
const download = new FileDownload({url: 'http://example.com/file.zip', filepath: '/tmp/file.zip', overwrite: false, index: 0, aborter, timeout:false})
download.on('progress', ({percent, totalBytes, transferredBytes}, chunk: Uint8Array) => {
  console.log('🚀 ~ onDownloadProgress ~ percent: %', percent, totalBytes, transferredBytes)
})
download.on('status', function(status: FileDownloadStatus) {
  console.log(status)
})
try {
  await download.start()
} catch (error) {
  if (error.code === AbortErrorCode) {
    // the abort signal sended
  } else {
    throw error
  }
}
```

## API

### ChunkDownload

**Overview:**

The `ChunkDownload` class is designed for downloading a file in chunks, supporting both single and concurrent block downloads with resuming functionality.

**Features:**

1. **Range Request Support**: Utilizes HTTP range requests for efficient chunk downloading, allowing for resuming interrupted downloads.
2. **Progress Tracking**: Emits progress events during download with information about transferred bytes and total file size.
3. **Abort Signal Integration**: Supports an abort signal to interrupt the download process at any time.

**Usage:**

```ts
import { AbortErrorCode } from '@isdk/ai-tool'
import { ChunkDownload } from '@isdk/ai-tool-download'
const aborter = new AbortController()
const chunk = new ChunkDownload({url: 'http://example.com/file.zip', filepath: '/tmp/file.zip', overwrite: false, index: 0, aborter})
chunk.on('progress', ({percent, totalBytes, transferredBytes}, chunkData) => {
  console.log(`Download progress: ${percent}% (${transferredBytes}/${totalBytes} bytes)`)
})
try {
  await chunk.start()
} catch (error) {
  if (error.code === AbortErrorCode) {
    // The abort signal was sent
  } else {
    throw error
  }
}
```

**Configuration:**

- `url`: URL of the file to be downloaded
- `filepath`: Destination path where the file will be saved
- `options.startByte` (optional): Start downloading from a specific byte position
- `options.endByte` (optional): Download up to a certain byte position
- `options.overwrite` (default: false): Overwrite an existing file if it already exists
- `options.aborter` (optional): Abort controller for interrupting the download

**Events:**

- `progress`: Emitted when download progress changes, providing information about the current percentage of completion and transferred bytes.
- `status`: Provides detailed status updates during the download process, including file size, total downloaded bytes, etc.

### BaseFileDownload

**Overview:**

The `BaseFileDownload` class is an abstract base for multi-block concurrent download of a single file, assuming that the server supports range requests. It creates and manages chunks to efficiently handle large files.

**Features:**

1. **Range Request Support**: Utilizes HTTP range requests to support efficient chunked downloading.
2. **Concurrent Downloads**: Implements multi-threaded downloads using `p-limit` for managing concurrent tasks.
3. **Temporary Files Management**: Stores each block's data in a temporary directory, ensuring that the final file is constructed correctly after all chunks are downloaded.

**Usage:**

```ts
import { FileDownload } from '@isdk/ai-tool-download'
const download = new BaseFileDownload({url: 'http://example.com/file.zip', filepath: '/tmp/file.zip'})
// ...
```

**Configuration:**

- `url`: URL of the file to be downloaded
- `filepath` (optional): Destination path where the final file will be saved
- `options.concurrency` (default: 3): Maximum number of concurrent downloads allowed
- `options.chunkSizeInBytes` (default: 64MB): Size for each chunk
- `options.destinationFolder` (optional): Custom directory to save the final file
- `options.cleanTempFile` (default: true): Whether to remove temporary files upon successful completion
- `options.overwrite` (default: false): Overwrite an existing file if it already exists

**Methods:**

1. **createChunk(options)**: Creates a new chunk downloader instance with the specified options
2. **_start()**: Internal method to initiate the multi-threaded download process
3. **_stop()**: Internal method to clean up resources and stop any ongoing downloads

### FileDownload

**Overview:**

The `FileDownload` class extends from `BaseFileDownload`, providing an asynchronous multi-threaded download process for a single file, assuming that the server supports range requests. It utilizes `p-limit` to manage concurrent tasks and efficiently handle large files.

**Features:**

1. **Range Request Support**: Utilizes HTTP range requests to support efficient chunked downloading.
2. **Concurrent Downloads**: Implements multi-threaded downloads using `p-limit` for managing concurrent tasks, with an option to limit the number of threads based on server capacity.
3. **Temporary Files Management**: Stores each block's data in a temporary directory, ensuring that the final file is constructed correctly after all chunks are downloaded.

**Usage:**

```ts
import { FileDownload } from '@isdk/ai-tool-download'
const download = new FileDownload({url: 'http://example.com/file.zip', filepath: '/tmp/file.zip'})
// ...
```

**Configuration:**

- `url`: URL of the file to be downloaded
- `filepath` (optional): Destination path where the final file will be saved
- `options.concurrency` (default: 3): Maximum number of concurrent downloads allowed
- `options.chunkSizeInBytes` (default: 64MB): Size for each chunk
- `options.destinationFolder` (optional): Custom directory to save the final file
- `options.cleanTempFile` (default: true): Whether to remove temporary files upon successful completion
- `options.overwrite` (default: false): Overwrite an existing file if it already exists

### DownloadFunc

**Overview:**

The `DownloadFunc` class is an interface that exposes RESTful API functions for managing file downloads using the `FileDownload` class, providing a simple way to start, stop, and manage multiple concurrent download tasks. It allows you to list all currently active downloads, delete specific ones or URLs, check their status, control their execution flow, as well as configure server-side parameters for managing downloads.

**Features:**

1. **Task Management**: Lists, deletes, retrieves details about individual tasks and manages the entire queue of pending tasks.
2. **File Download Configuration**: Allows configuring global settings such as maximum concurrent downloads, default file save location, auto-starting queued tasks, cleaning up temporary files after completion, etc.
3. **Automatic Scaling**: If the concurrency limit is reached and a new task needs to be added, it can either automatically stop an older one or report an error based on server configuration.

**Configuration:**

1. `concurrency` (default: 3): Maximum number of concurrent downloads allowed
2. `rootDir`(required): Root directory where downloaded files will be stored
3. `autostartQueue` (default: true): Automatically start the next pending task in the queue after a file is completed
4. `cleanTempFile` (default: true): Whether to remove temporary files upon successful completion
5. `autoScaleDownloads` (default: false): If concurrency limit is reached, automatically stop an older download or report an error

**Methods:**

1. **list()**: Returns a list of all currently active download tasks
2. **delete(idOrUrl)**: Deletes the specified task by ID or URL
3. **getDetails(idOrUrl)**: Retrieves detailed information about a specific task
4. **startTask(url, options?)**: Starts a new file download task with optional custom settings
5. **stopTask(idOrUrl)**: Stops the execution of a specific task by ID or URL
6. **config(settings)**: Configures server-side parameters for managing downloads
