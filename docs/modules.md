[@isdk/ai-tool-download](README.md) / Exports

# @isdk/ai-tool-download

## Table of contents

### Classes

- [ChunkDownload](classes/ChunkDownload.md)
- [DownloadFunc](classes/DownloadFunc.md)
- [FileDownload](classes/FileDownload.md)

### Interfaces

- [ChunkOptions](interfaces/ChunkOptions.md)
- [DownloadConfiguration](interfaces/DownloadConfiguration.md)
- [FileDownloadOptions](interfaces/FileDownloadOptions.md)
- [UrlMetaInfo](interfaces/UrlMetaInfo.md)

### Type Aliases

- [FileDownloadStatus](modules.md#filedownloadstatus)

### Variables

- [AlreadyDownloadErrCode](modules.md#alreadydownloaderrcode)
- [DownloadErrorEventName](modules.md#downloaderroreventname)
- [DownloadName](modules.md#downloadname)
- [DownloadProgressEventName](modules.md#downloadprogresseventname)
- [DownloadStatusEventName](modules.md#downloadstatuseventname)
- [RangeRequestErrCode](modules.md#rangerequesterrcode)
- [defaultChunkSizeInBytes](modules.md#defaultchunksizeinbytes)
- [defaultConcurrency](modules.md#defaultconcurrency)
- [download](modules.md#download)
- [minSplitSizeInBytes](modules.md#minsplitsizeinbytes)

### Functions

- [concatStreamTo](modules.md#concatstreamto)
- [createWritableStream](modules.md#createwritablestream)
- [getFilenameFromResponse](modules.md#getfilenamefromresponse)
- [getFilenameFromUrl](modules.md#getfilenamefromurl)
- [getUrlMetaInfo](modules.md#geturlmetainfo)

## Type Aliases

### FileDownloadStatus

Ƭ **FileDownloadStatus**: ``"pending"`` \| ``"downloading"`` \| ``"pausing"`` \| ``"paused"`` \| ``"completed"`` \| ``"failed"``

#### Defined in

[packages/ai-tool-downloader/src/utils.ts:10](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/utils.ts#L10)

## Variables

### AlreadyDownloadErrCode

• `Const` **AlreadyDownloadErrCode**: ``409``

#### Defined in

[packages/ai-tool-downloader/src/utils.ts:22](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/utils.ts#L22)

___

### DownloadErrorEventName

• `Const` **DownloadErrorEventName**: `string`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:57](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/ai-tool-download.ts#L57)

___

### DownloadName

• `Const` **DownloadName**: ``"download"``

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:54](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/ai-tool-download.ts#L54)

___

### DownloadProgressEventName

• `Const` **DownloadProgressEventName**: `string`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:55](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/ai-tool-download.ts#L55)

___

### DownloadStatusEventName

• `Const` **DownloadStatusEventName**: `string`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:56](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/ai-tool-download.ts#L56)

___

### RangeRequestErrCode

• `Const` **RangeRequestErrCode**: ``416``

#### Defined in

[packages/ai-tool-downloader/src/utils.ts:21](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/utils.ts#L21)

___

### defaultChunkSizeInBytes

• `Const` **defaultChunkSizeInBytes**: `number`

#### Defined in

[packages/ai-tool-downloader/src/utils.ts:11](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/utils.ts#L11)

___

### defaultConcurrency

• `Const` **defaultConcurrency**: ``3``

#### Defined in

[packages/ai-tool-downloader/src/utils.ts:12](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/utils.ts#L12)

___

### download

• `Const` **download**: [`DownloadFunc`](classes/DownloadFunc.md)

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:477](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/ai-tool-download.ts#L477)

___

### minSplitSizeInBytes

• `Const` **minSplitSizeInBytes**: `number`

#### Defined in

[packages/ai-tool-downloader/src/utils.ts:13](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/utils.ts#L13)

## Functions

### concatStreamTo

▸ **concatStreamTo**(`sources`, `destination`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | `Stream`[] |
| `destination` | `WriteStream` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool-downloader/src/utils.ts:24](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/utils.ts#L24)

___

### createWritableStream

▸ **createWritableStream**(`filepath`, `flags?`): `WritableStream`\<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filepath` | `string` | `undefined` |
| `flags` | `string` | `'a'` |

#### Returns

`WritableStream`\<`any`\>

#### Defined in

[packages/ai-tool-downloader/src/utils.ts:98](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/utils.ts#L98)

___

### getFilenameFromResponse

▸ **getFilenameFromResponse**(`response`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `KyResponse` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/ai-tool-downloader/src/utils.ts:72](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/utils.ts#L72)

___

### getFilenameFromUrl

▸ **getFilenameFromUrl**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[packages/ai-tool-downloader/src/utils.ts:53](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/utils.ts#L53)

___

### getUrlMetaInfo

▸ **getUrlMetaInfo**(`url`, `options?`, `headers?`): `Promise`\<[`UrlMetaInfo`](interfaces/UrlMetaInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | `Options` |
| `headers?` | `Headers` |

#### Returns

`Promise`\<[`UrlMetaInfo`](interfaces/UrlMetaInfo.md)\>

#### Defined in

[packages/ai-tool-downloader/src/utils.ts:35](https://github.com/isdk/ai-tool-download.js/blob/fd42dcbc922160f5c34af8916368ec6c48b47e5a/src/utils.ts#L35)
