[@isdk/ai-tool-downloader](../README.md) / [Exports](../modules.md) / FileDownload

# Class: FileDownload

## Hierarchy

- `BaseFileDownload`

  ↳ **`FileDownload`**

## Table of contents

### Constructors

- [constructor](FileDownload.md#constructor)

### Properties

- [\_status](FileDownload.md#_status)
- [chunks](FileDownload.md#chunks)
- [id](FileDownload.md#id)
- [manager](FileDownload.md#manager)
- [options](FileDownload.md#options)
- [order](FileDownload.md#order)
- [transferredBytes](FileDownload.md#transferredbytes)
- [urlMetaInfo](FileDownload.md#urlmetainfo)
- [defaultChunkSizeInBytes](FileDownload.md#defaultchunksizeinbytes)
- [defaultConcurrency](FileDownload.md#defaultconcurrency)
- [defaultMaxListeners](FileDownload.md#defaultmaxlisteners)
- [minSplitSizeInBytes](FileDownload.md#minsplitsizeinbytes)

### Accessors

- [minSplitSizeInBytes](FileDownload.md#minsplitsizeinbytes-1)
- [status](FileDownload.md#status)

### Methods

- [\_start](FileDownload.md#_start)
- [\_stop](FileDownload.md#_stop)
- [cleanTemp](FileDownload.md#cleantemp)
- [createChunk](FileDownload.md#createchunk)
- [emit](FileDownload.md#emit)
- [emitAsync](FileDownload.md#emitasync)
- [getAbsPath](FileDownload.md#getabspath)
- [getIdInfo](FileDownload.md#getidinfo)
- [listenerCount](FileDownload.md#listenercount)
- [listeners](FileDownload.md#listeners)
- [mergeChunks](FileDownload.md#mergechunks)
- [off](FileDownload.md#off)
- [on](FileDownload.md#on)
- [once](FileDownload.md#once)
- [removeAllListeners](FileDownload.md#removealllisteners)
- [resolveOptions](FileDownload.md#resolveoptions)
- [setMaxListeners](FileDownload.md#setmaxlisteners)
- [splitChunks](FileDownload.md#splitchunks)
- [start](FileDownload.md#start)
- [stop](FileDownload.md#stop)
- [toJSON](FileDownload.md#tojson)
- [listenerCount](FileDownload.md#listenercount-1)

## Constructors

### constructor

• **new FileDownload**(`url`, `options?`): [`FileDownload`](FileDownload.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `BaseFileDownloadOptions` |
| `options?` | `BaseFileDownloadOptions` |

#### Returns

[`FileDownload`](FileDownload.md)

#### Inherited from

BaseFileDownload.constructor

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:58](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L58)

## Properties

### \_status

• **\_status**: [`FileDownloadStatus`](../modules.md#filedownloadstatus) = `'pending'`

#### Inherited from

BaseFileDownload.\_status

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:54](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L54)

___

### chunks

• **chunks**: [`ChunkDownload`](ChunkDownload.md)[] = `[]`

#### Inherited from

BaseFileDownload.chunks

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:53](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L53)

___

### id

• `Optional` **id**: `string`

#### Inherited from

BaseFileDownload.id

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:49](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L49)

___

### manager

• `Optional` **manager**: `any`

#### Inherited from

BaseFileDownload.manager

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:51](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L51)

___

### options

• **options**: `BaseFileDownloadOptions`

#### Inherited from

BaseFileDownload.options

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:52](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L52)

___

### order

• `Optional` **order**: `number`

#### Inherited from

BaseFileDownload.order

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:50](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L50)

___

### transferredBytes

• **transferredBytes**: `number` = `0`

#### Inherited from

BaseFileDownload.transferredBytes

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:55](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L55)

___

### urlMetaInfo

• `Protected` `Optional` **urlMetaInfo**: [`UrlMetaInfo`](../interfaces/UrlMetaInfo.md)

#### Inherited from

BaseFileDownload.urlMetaInfo

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:56](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L56)

___

### defaultChunkSizeInBytes

▪ `Static` **defaultChunkSizeInBytes**: `number` = `defaultChunkSizeInBytes`

#### Inherited from

BaseFileDownload.defaultChunkSizeInBytes

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:46](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L46)

___

### defaultConcurrency

▪ `Static` **defaultConcurrency**: `number` = `defaultConcurrency`

#### Inherited from

BaseFileDownload.defaultConcurrency

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:47](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L47)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

BaseFileDownload.defaultMaxListeners

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:7

___

### minSplitSizeInBytes

▪ `Static` **minSplitSizeInBytes**: `number` = `minSplitSizeInBytes`

#### Inherited from

BaseFileDownload.minSplitSizeInBytes

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:45](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L45)

## Accessors

### minSplitSizeInBytes

• `get` **minSplitSizeInBytes**(): `any`

#### Returns

`any`

#### Inherited from

BaseFileDownload.minSplitSizeInBytes

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:80](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L80)

___

### status

• `get` **status**(): [`FileDownloadStatus`](../modules.md#filedownloadstatus)

#### Returns

[`FileDownloadStatus`](../modules.md#filedownloadstatus)

#### Inherited from

BaseFileDownload.status

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:84](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L84)

• `set` **status**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`FileDownloadStatus`](../modules.md#filedownloadstatus) |

#### Returns

`void`

#### Inherited from

BaseFileDownload.status

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:87](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L87)

## Methods

### \_start

▸ **_start**(`options`): `Promise`\<`void`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FileDownloadOptions`](../interfaces/FileDownloadOptions.md) |

#### Returns

`Promise`\<`void`[]\>

#### Overrides

BaseFileDownload.\_start

#### Defined in

[packages/ai-tool-downloader/src/file-download.ts:23](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/file-download.ts#L23)

___

### \_stop

▸ **_stop**(`options`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`FileDownloadOptions`](../interfaces/FileDownloadOptions.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

BaseFileDownload.\_stop

#### Defined in

[packages/ai-tool-downloader/src/file-download.ts:30](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/file-download.ts#L30)

___

### cleanTemp

▸ **cleanTemp**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `CustomBaseFileDownloadOptions` |

#### Returns

`void`

#### Inherited from

BaseFileDownload.cleanTemp

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:270](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L270)

___

### createChunk

▸ **createChunk**(`options`): [`ChunkDownload`](ChunkDownload.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChunkOptions`](../interfaces/ChunkOptions.md) |

#### Returns

[`ChunkDownload`](ChunkDownload.md)

#### Overrides

BaseFileDownload.createChunk

#### Defined in

[packages/ai-tool-downloader/src/file-download.ts:11](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/file-download.ts#L11)

___

### emit

▸ **emit**(`eventName`, `...args`): `any`

Emits the specified event type with the given arguments.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | - |
| `...args` | `any`[] | The event type followed by any number of arguments to be passed to the listener functions. |

#### Returns

`any`

The result of the event.

#### Inherited from

BaseFileDownload.emit

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:38

___

### emitAsync

▸ **emitAsync**(`eventName`, `...args`): `Promise`\<`any`\>

Asynchronously emits the specified event type with the given arguments.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | - |
| `...args` | `any`[] | The event type followed by any number of arguments to be passed to the listener functions. |

#### Returns

`Promise`\<`any`\>

A promise that resolves with the result of the event.

#### Inherited from

BaseFileDownload.emitAsync

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:44

___

### getAbsPath

▸ **getAbsPath**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `CustomBaseFileDownloadOptions` |

#### Returns

`string`

#### Inherited from

BaseFileDownload.getAbsPath

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:102](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L102)

___

### getIdInfo

▸ **getIdInfo**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `filepath?` | `string` |
| `id?` | `string` |
| `url` | `string` |

#### Inherited from

BaseFileDownload.getIdInfo

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:95](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L95)

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `RegExp` | The name of the event to get the listeners for. |

#### Returns

`number`

- the listeners count

#### Inherited from

BaseFileDownload.listenerCount

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:66

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns an array of functions that are registered to listen for the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `RegExp` | The name of the event to get the listeners for. |

#### Returns

`Function`[]

- An array of functions that are registered to listen for the specified event.

#### Inherited from

BaseFileDownload.listeners

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:59

___

### mergeChunks

▸ **mergeChunks**(`options`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `CustomBaseFileDownloadOptions` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

BaseFileDownload.mergeChunks

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:128](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L128)

___

### off

▸ **off**(`eventName`, `listener`): `EventEmitter`

Removes a listener function from the specified event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `RegExp` | - |
| `listener` | `Function` | The listener function to be removed. |

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

**`Throws`**

If the listener is not a function.

#### Inherited from

BaseFileDownload.off

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:32

___

### on

▸ **on**(`eventName`, `listener`): `EventEmitter`

Adds a listener function to the specified event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `RegExp` | - |
| `listener` | `Function` | The listener function to be called when the event is emitted. |

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

**`Throws`**

If the listener is not a function.

#### Inherited from

BaseFileDownload.on

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:16

___

### once

▸ **once**(`eventName`, `listener`): `EventEmitter`

Adds a one-time listener function to the specified event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `RegExp` | - |
| `listener` | `Function` | The listener function to be called once when the event is emitted. |

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

**`Throws`**

If the listener is not a function.

#### Inherited from

BaseFileDownload.once

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:24

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): `EventEmitter`

Removes all listeners for a specific event or all events from an event emitter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `string` \| `RegExp` | The event to remove listeners for. If not provided, all listeners for all events will be removed. |

#### Returns

`EventEmitter`

- The event emitter with all listeners removed.

#### Inherited from

BaseFileDownload.removeAllListeners

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:51

___

### resolveOptions

▸ **resolveOptions**(`options?`): [`FileDownloadOptions`](../interfaces/FileDownloadOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`FileDownloadOptions`](../interfaces/FileDownloadOptions.md) |

#### Returns

[`FileDownloadOptions`](../interfaces/FileDownloadOptions.md)

#### Overrides

BaseFileDownload.resolveOptions

#### Defined in

[packages/ai-tool-downloader/src/file-download.ts:15](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/file-download.ts#L15)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): `EventEmitter`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`EventEmitter`

#### Inherited from

BaseFileDownload.setMaxListeners

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:52

___

### splitChunks

▸ **splitChunks**(`options`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `CustomBaseFileDownloadOptions` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

BaseFileDownload.splitChunks

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:142](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L142)

___

### start

▸ **start**(`options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `CustomBaseFileDownloadOptions` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

BaseFileDownload.start

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:220](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L220)

___

### stop

▸ **stop**(`options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `CustomBaseFileDownloadOptions` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

BaseFileDownload.stop

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:253](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L253)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

BaseFileDownload.toJSON

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:277](https://github.com/isdk/ai-tool-download.js/blob/1d5cf8b2431fb35307ce59ae96c4208d0843bfd8/src/base-file-download.ts#L277)

___

### listenerCount

▸ **listenerCount**(`emitter`, `eventName`): `number`

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `eventName` | `string` \| `RegExp` |

#### Returns

`number`

**`Deprecated`**

use emitter.listenerCount instead

#### Inherited from

BaseFileDownload.listenerCount

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:74
