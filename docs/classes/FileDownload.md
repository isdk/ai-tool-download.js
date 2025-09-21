[**@isdk/ai-tool-downloader**](../README.md)

***

[@isdk/ai-tool-downloader](../globals.md) / FileDownload

# Class: FileDownload

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/file-download.ts:9](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/file-download.ts#L9)

## Extends

- `BaseFileDownload`

## Constructors

### Constructor

> **new FileDownload**(`url`, `options?`): `FileDownload`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:59](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L59)

#### Parameters

##### url

`string` | `BaseFileDownloadOptions`

##### options?

`BaseFileDownloadOptions`

#### Returns

`FileDownload`

#### Inherited from

`BaseFileDownload.constructor`

## Properties

### \_status

> **\_status**: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md) = `'pending'`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:55](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L55)

#### Inherited from

`BaseFileDownload._status`

***

### chunks

> **chunks**: [`ChunkDownload`](ChunkDownload.md)[] = `[]`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:54](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L54)

#### Inherited from

`BaseFileDownload.chunks`

***

### id?

> `optional` **id**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:50](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L50)

#### Inherited from

`BaseFileDownload.id`

***

### manager?

> `optional` **manager**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:52](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L52)

#### Inherited from

`BaseFileDownload.manager`

***

### options

> **options**: `BaseFileDownloadOptions`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:53](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L53)

#### Inherited from

`BaseFileDownload.options`

***

### order?

> `optional` **order**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:51](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L51)

#### Inherited from

`BaseFileDownload.order`

***

### transferredBytes

> **transferredBytes**: `number` = `0`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:56](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L56)

#### Inherited from

`BaseFileDownload.transferredBytes`

***

### urlMetaInfo?

> `protected` `optional` **urlMetaInfo**: [`UrlMetaInfo`](../interfaces/UrlMetaInfo.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:57](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L57)

#### Inherited from

`BaseFileDownload.urlMetaInfo`

***

### defaultChunkSizeInBytes

> `static` **defaultChunkSizeInBytes**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:47](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L47)

#### Inherited from

`BaseFileDownload.defaultChunkSizeInBytes`

***

### defaultConcurrency

> `static` **defaultConcurrency**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:48](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L48)

#### Inherited from

`BaseFileDownload.defaultConcurrency`

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:7

#### Inherited from

`BaseFileDownload.defaultMaxListeners`

***

### minSplitSizeInBytes

> `static` **minSplitSizeInBytes**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:46](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L46)

#### Inherited from

`BaseFileDownload.minSplitSizeInBytes`

## Accessors

### minSplitSizeInBytes

#### Get Signature

> **get** **minSplitSizeInBytes**(): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:81](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L81)

##### Returns

`any`

#### Inherited from

`BaseFileDownload.minSplitSizeInBytes`

***

### status

#### Get Signature

> **get** **status**(): [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:85](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L85)

##### Returns

[`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

#### Set Signature

> **set** **status**(`value`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:88](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L88)

##### Parameters

###### value

[`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

##### Returns

`void`

#### Inherited from

`BaseFileDownload.status`

## Methods

### \_start()

> **\_start**(`options`): `Promise`\<`void`[]\>

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/file-download.ts:23](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/file-download.ts#L23)

#### Parameters

##### options

[`FileDownloadOptions`](../interfaces/FileDownloadOptions.md)

#### Returns

`Promise`\<`void`[]\>

#### Overrides

`BaseFileDownload._start`

***

### \_stop()

> **\_stop**(`options`): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/file-download.ts:30](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/file-download.ts#L30)

#### Parameters

##### options

[`FileDownloadOptions`](../interfaces/FileDownloadOptions.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseFileDownload._stop`

***

### cleanTemp()

> **cleanTemp**(`options?`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:276](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L276)

#### Parameters

##### options?

`CustomBaseFileDownloadOptions`

#### Returns

`void`

#### Inherited from

`BaseFileDownload.cleanTemp`

***

### createChunk()

> **createChunk**(`options`): [`ChunkDownload`](ChunkDownload.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/file-download.ts:11](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/file-download.ts#L11)

#### Parameters

##### options

[`ChunkOptions`](../interfaces/ChunkOptions.md)

#### Returns

[`ChunkDownload`](ChunkDownload.md)

#### Overrides

`BaseFileDownload.createChunk`

***

### emit()

> **emit**(`eventName`, ...`args`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:38

Emits the specified event type with the given arguments.

#### Parameters

##### eventName

`string`

##### args

...`any`[]

The event type followed by any number of arguments to be passed to the listener functions.

#### Returns

`any`

The result of the event.

#### Inherited from

`BaseFileDownload.emit`

***

### emitAsync()

> **emitAsync**(`eventName`, ...`args`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:44

Asynchronously emits the specified event type with the given arguments.

#### Parameters

##### eventName

`string`

##### args

...`any`[]

The event type followed by any number of arguments to be passed to the listener functions.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the result of the event.

#### Inherited from

`BaseFileDownload.emitAsync`

***

### getAbsPath()

> **getAbsPath**(`options`): `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:103](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L103)

#### Parameters

##### options

`CustomBaseFileDownloadOptions`

#### Returns

`string`

#### Inherited from

`BaseFileDownload.getAbsPath`

***

### getIdInfo()

> **getIdInfo**(): `object`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:96](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L96)

#### Returns

`object`

##### filepath?

> `optional` **filepath**: `string`

##### id?

> `optional` **id**: `string`

##### url

> **url**: `string`

#### Inherited from

`BaseFileDownload.getIdInfo`

***

### listenerCount()

> **listenerCount**(`eventName`): `number`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:66

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

##### eventName

The name of the event to get the listeners for.

`string` | `RegExp`

#### Returns

`number`

- the listeners count

#### Inherited from

`BaseFileDownload.listenerCount`

***

### listeners()

> **listeners**(`eventName`): `Function`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:59

Returns an array of functions that are registered to listen for the specified event.

#### Parameters

##### eventName

The name of the event to get the listeners for.

`string` | `RegExp`

#### Returns

`Function`[]

- An array of functions that are registered to listen for the specified event.

#### Inherited from

`BaseFileDownload.listeners`

***

### mergeChunks()

> **mergeChunks**(`options`): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:129](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L129)

#### Parameters

##### options

`CustomBaseFileDownloadOptions`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseFileDownload.mergeChunks`

***

### off()

> **off**(`eventName`, `listener`): `EventEmitter`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:32

Removes a listener function from the specified event type.

#### Parameters

##### eventName

`string` | `RegExp`

##### listener

`Function`

The listener function to be removed.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

#### Inherited from

`BaseFileDownload.off`

***

### on()

> **on**(`eventName`, `listener`): `EventEmitter`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:16

Adds a listener function to the specified event type.

#### Parameters

##### eventName

`string` | `RegExp`

##### listener

`Function`

The listener function to be called when the event is emitted.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

#### Inherited from

`BaseFileDownload.on`

***

### once()

> **once**(`eventName`, `listener`): `EventEmitter`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:24

Adds a one-time listener function to the specified event type.

#### Parameters

##### eventName

`string` | `RegExp`

##### listener

`Function`

The listener function to be called once when the event is emitted.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

#### Inherited from

`BaseFileDownload.once`

***

### removeAllListeners()

> **removeAllListeners**(`eventName?`): `EventEmitter`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:51

Removes all listeners for a specific event or all events from an event emitter.

#### Parameters

##### eventName?

The event to remove listeners for. If not provided, all listeners for all events will be removed.

`string` | `RegExp`

#### Returns

`EventEmitter`

- The event emitter with all listeners removed.

#### Inherited from

`BaseFileDownload.removeAllListeners`

***

### resolveOptions()

> **resolveOptions**(`options?`): [`FileDownloadOptions`](../interfaces/FileDownloadOptions.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/file-download.ts:15](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/file-download.ts#L15)

#### Parameters

##### options?

[`FileDownloadOptions`](../interfaces/FileDownloadOptions.md)

#### Returns

[`FileDownloadOptions`](../interfaces/FileDownloadOptions.md)

#### Overrides

`BaseFileDownload.resolveOptions`

***

### setMaxListeners()

> **setMaxListeners**(`n`): `EventEmitter`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:52

#### Parameters

##### n

`number`

#### Returns

`EventEmitter`

#### Inherited from

`BaseFileDownload.setMaxListeners`

***

### splitChunks()

> **splitChunks**(`options`): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:143](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L143)

#### Parameters

##### options

`CustomBaseFileDownloadOptions`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseFileDownload.splitChunks`

***

### start()

> **start**(`options?`): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:223](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L223)

#### Parameters

##### options?

`CustomBaseFileDownloadOptions`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseFileDownload.start`

***

### stop()

> **stop**(`options?`): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:259](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L259)

#### Parameters

##### options?

`CustomBaseFileDownloadOptions`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseFileDownload.stop`

***

### toJSON()

> **toJSON**(): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/base-file-download.ts:283](https://github.com/isdk/ai-tool-download.js/blob/bb7b97dd280c83d13cc627a69cac9a861e3cf016/src/base-file-download.ts#L283)

#### Returns

`any`

#### Inherited from

`BaseFileDownload.toJSON`

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/events-ex@2.1.0/node\_modules/events-ex/lib/event-emitter.d.ts:74

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

##### emitter

`EventEmitter`

##### eventName

`string` | `RegExp`

#### Returns

`number`

#### Deprecated

use emitter.listenerCount instead

#### Inherited from

`BaseFileDownload.listenerCount`
