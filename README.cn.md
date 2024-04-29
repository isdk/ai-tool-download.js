# ai-tool-download

The Large File Downloader for `ServerTools`

此仓库提供了一个用于Node.js的服务器端文件下载工具，支持分块并发下载和断点续传。当前实现的主要功能包括：

1. **ChunkDownload** 类：实现一个能够根据HTTP服务器range request特性进行指定范围内容的chunk下载并保存到文件的类。
2. **BaseFileDownload** 抽象类：用于处理单文件的多块并发下载，要求HTTP服务器支持range request。
3. **FileDownload** 类：基于`BaseFileDownload`实现一个异步多块并发下载工具，依赖ChunkDownload和p-limit库。
4. **DownloadFunc（AI ResServerTool Func）**：提供文件下载管理RESTful API接口，支持配置服务器下载参数并获取下载状态。

注意：仅当服务器支持range request，才支持分块并发下载和断点续传。
当前只完成了ChunkDownload(单块下载), BaseFileDownload(抽象多块并发下载), FileDownload(异步多块并发下载).
未实现ThreadFileDownload(多线程多块并发下载),用tinypool.

## ChunkDownload

ChunkDownload 类, 实现一个供nodejs使用的文件下载器类, 它在http服务器支持range request的前提下, 实现指定范围内容的chunk下载保存到文件，通过signal中断下载.
如果不支持range request，则直接从头下载完整的文件内容.当 startByte = 0|undefined 并且 endByte = undefined 或文件大小 时，也是从头下载整个文件内容.
依赖: ky. 接口定义如下

用户输入:

* url: 文件下载的url
* filepath: 文件下载后保存的文件位置
* options?: 可选的参数对象
  * startByte?: 从指定位置开始下载, 默认为0,从文件开头下载
  * endByte?:   下载到指定位置结束下载, 默认为下载到文件末尾
  * overwrite?: 是否覆盖已存在的文件,默认为false, 表示继续接着下载.
  * aborter?: The abort controller to abort the download. create one internally if not exists.

例:

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

## BaseFileDownload

抽象单文件多块并发下载类,实现一个供nodejs使用的文件下载类,要求http服务器必须支持range request.
如果http服务器不支持range request，则直接从头下载文件内容

实现:

1. 根据 filepath,在相同目录下创建名为 `[filepath].temp` 的临时目录存放每块文件的数据
2. 创建`chunks`:
   1. 如果支持range request,则根据文件大小和分片大小(`options.chunkSizeInBytes`)计算出分片个数(`Math.ceil(totalSize / chunkSizeInBytes)`), 并创建相应数量的Chunk(`createChunk`)
   2. 如果不支持range request,则只创建一个没有range信息的Chunk,下载全部文件内容
3. 当完成时,将所有Chunk的文件内容合并到`filepath`文件中,如果`cleanTempFile`(默认为真),则删除临时文件目录.

后代需要实现如下的方法:

1. `createChunk`: 创建Chunk
2. `_start`: 内部执行开始下载
3. `_stop`: 内部执行停止下载

## FileDownload

用最简单的异步方式实现多块并发下载,继承自抽象类`BaseFileDownload`,依赖: ChunkDownload, p-limit.

实现:

1. 创建Chunk(`createChunk(options)`): 创建ChunkDownload实例并返回
2. 内部启动方法(`_start`): 使用p-limit控制并发数, 过滤出所有没完成的chunks, 调用ChunkDownload的`start`方法
3. 内部停止方法(`_stop`): 清理p-limit队列

用户输入:

* url: 文件下载的url
* filepath?: 文件下载后保存的文件位置,如果不输入，则必须指定options中的`destinationFolder`
* options?: 可选的参数对象
  * concurrency?: 并发下载的chunk数，默认3
  * chunkSizeInBytes?: 分片大小，默认 `1024*1024*64` 64M字节
  * destinationFolder?: 保存的目标目录
  * cleanTempFile?: 下载完成后是否清除下载的临时文件,默认为true
  * overwrite?: 是否覆盖已存在的文件,默认为false, 当存在size > 0的同名文件则raise AlreadyExistsError终止下载.
  * aborter?: The abort controller to abort the download. create one internally if not exists.

例:

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

## DownloadFunc(AI ResServerTool Func)

暴露给客户端的文件下载管理RESTFulAPI函数, 依赖: FileDownload

至少需要配置 `rootDir`

对多个文件下载进行管理,允许配置同时下载的文件数, 管理下载的文件列表.

* list({finishedOnly: boolean, downloadingOnly: boolean, pausedOnly: boolean, finished: boolean}): 列出当前正在下载的任务id列表
* delete({id: string}): 删除指定id/url的任务
* get({id: string}): 获取指定id/url任务的状态 包括: {id, url, filepath, status}
* put({id: string, start: boolean}): 暂停/启动指定id/url的任务
* post({url: string, filepath?: string}): 添加新的任务,如果不指定filepath,则由`url`推断文件名
* start({id: string}): 启动指定id/url的任务
* stop({id: string}): 停止指定id/url的任务
* config({concurrency = 3, rootDir: string, autostartQueue: boolean, cleanTempFile = true, autoScaleDownloads: boolean}): 配置服务器下载参数或获取下载参数
  * autostartQueue: 是否在下载任务完成后自动开始队列中的下一个pending任务, 默认false
  * cleanTempFile: 是否在移除任务后清理下载的临时文件, 默认为true
  * autoScaleDownloads: 当当并发限制达到后,启动新加下载任务是自动停止一个最老的任务,还是报告错误, 默认为false,报告错误.
* clean({completed?: boolean, paused?: boolean, downloading?: boolean}): 默认只清除已经下载完成的任务
  * completed: 清除已经下载完成的任务, 默认为 true
  * paused: 清除已经暂停的任务, 默认为 false
  * downloading: 清除正在下载的任务, 默认为 false
