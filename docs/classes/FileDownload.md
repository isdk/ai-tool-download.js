[**@isdk/ai-tool-downloader**](../README.md) • **Docs**

***

[@isdk/ai-tool-downloader](../globals.md) / FileDownload

# Class: FileDownload

## Extends

- `BaseFileDownload`

## Constructors

### new FileDownload()

> **new FileDownload**(`url`, `options`?): [`FileDownload`](FileDownload.md)

#### Parameters

• **url**: `string` \| `BaseFileDownloadOptions`

• **options?**: `BaseFileDownloadOptions`

#### Returns

[`FileDownload`](FileDownload.md)

#### Inherited from

`BaseFileDownload.constructor`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:59](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L59)

## Properties

### \_status

> **\_status**: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md) = `'pending'`

#### Inherited from

`BaseFileDownload._status`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:55](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L55)

***

### chunks

> **chunks**: [`ChunkDownload`](ChunkDownload.md)[] = `[]`

#### Inherited from

`BaseFileDownload.chunks`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:54](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L54)

***

### id?

> `optional` **id**: `string`

#### Inherited from

`BaseFileDownload.id`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:50](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L50)

***

### manager?

> `optional` **manager**: `any`

#### Inherited from

`BaseFileDownload.manager`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:52](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L52)

***

### options

> **options**: `BaseFileDownloadOptions`

#### Inherited from

`BaseFileDownload.options`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:53](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L53)

***

### order?

> `optional` **order**: `number`

#### Inherited from

`BaseFileDownload.order`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:51](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L51)

***

### transferredBytes

> **transferredBytes**: `number` = `0`

#### Inherited from

`BaseFileDownload.transferredBytes`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:56](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L56)

***

### urlMetaInfo?

> `protected` `optional` **urlMetaInfo**: [`UrlMetaInfo`](../interfaces/UrlMetaInfo.md)

#### Inherited from

`BaseFileDownload.urlMetaInfo`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:57](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L57)

***

### defaultChunkSizeInBytes

> `static` **defaultChunkSizeInBytes**: `number`

#### Inherited from

`BaseFileDownload.defaultChunkSizeInBytes`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:47](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L47)

***

### defaultConcurrency

> `static` **defaultConcurrency**: `number`

#### Inherited from

`BaseFileDownload.defaultConcurrency`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:48](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L48)

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

#### Inherited from

`BaseFileDownload.defaultMaxListeners`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:7

***

### minSplitSizeInBytes

> `static` **minSplitSizeInBytes**: `number`

#### Inherited from

`BaseFileDownload.minSplitSizeInBytes`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:46](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L46)

## Accessors

### minSplitSizeInBytes

> `get` **minSplitSizeInBytes**(): `any`

#### Returns

`any`

#### Inherited from

`BaseFileDownload.minSplitSizeInBytes`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:81](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L81)

***

### status

> `get` **status**(): [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

> `set` **status**(`value`): `void`

#### Parameters

• **value**: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

#### Returns

[`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

#### Inherited from

`BaseFileDownload.status`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:85](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L85)

## Methods

### \_start()

> **\_start**(`options`): `Promise`\<`void`[]\>

#### Parameters

• **options**: [`FileDownloadOptions`](../interfaces/FileDownloadOptions.md)

#### Returns

`Promise`\<`void`[]\>

#### Overrides

`BaseFileDownload._start`

#### Defined in

[packages/ai-tool-downloader/src/file-download.ts:23](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/file-download.ts#L23)

***

### \_stop()

> **\_stop**(`options`): `Promise`\<`void`\>

#### Parameters

• **options**: [`FileDownloadOptions`](../interfaces/FileDownloadOptions.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseFileDownload._stop`

#### Defined in

[packages/ai-tool-downloader/src/file-download.ts:30](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/file-download.ts#L30)

***

### cleanTemp()

> **cleanTemp**(`options`?): `void`

#### Parameters

• **options?**: `CustomBaseFileDownloadOptions`

#### Returns

`void`

#### Inherited from

`BaseFileDownload.cleanTemp`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:273](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L273)

***

### createChunk()

> **createChunk**(`options`): [`ChunkDownload`](ChunkDownload.md)

#### Parameters

• **options**: [`ChunkOptions`](../interfaces/ChunkOptions.md)

#### Returns

[`ChunkDownload`](ChunkDownload.md)

#### Overrides

`BaseFileDownload.createChunk`

#### Defined in

[packages/ai-tool-downloader/src/file-download.ts:11](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/file-download.ts#L11)

***

### emit()

> **emit**(`eventName`, ...`args`): `any`

Emits the specified event type with the given arguments.

#### Parameters

• **eventName**: `string`

• ...**args**: `any`[]

The event type followed by any number of arguments to be passed to the listener functions.

#### Returns

`any`

The result of the event.

#### Inherited from

`BaseFileDownload.emit`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:38

***

### emitAsync()

> **emitAsync**(`eventName`, ...`args`): `Promise`\<`any`\>

Asynchronously emits the specified event type with the given arguments.

#### Parameters

• **eventName**: `string`

• ...**args**: `any`[]

The event type followed by any number of arguments to be passed to the listener functions.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the result of the event.

#### Inherited from

`BaseFileDownload.emitAsync`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:44

***

### getAbsPath()

> **getAbsPath**(`options`): `string`

#### Parameters

• **options**: `CustomBaseFileDownloadOptions`

#### Returns

`string`

#### Inherited from

`BaseFileDownload.getAbsPath`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:103](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L103)

***

### getIdInfo()

> **getIdInfo**(): `object`

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

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:96](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L96)

***

### listenerCount()

> **listenerCount**(`eventName`): `number`

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

• **eventName**: `string` \| `RegExp`

The name of the event to get the listeners for.

#### Returns

`number`

- the listeners count

#### Inherited from

`BaseFileDownload.listenerCount`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:66

***

### listeners()

> **listeners**(`eventName`): `Function`[]

Returns an array of functions that are registered to listen for the specified event.

#### Parameters

• **eventName**: `string` \| `RegExp`

The name of the event to get the listeners for.

#### Returns

`Function`[]

- An array of functions that are registered to listen for the specified event.

#### Inherited from

`BaseFileDownload.listeners`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:59

***

### mergeChunks()

> **mergeChunks**(`options`): `Promise`\<`void`\>

#### Parameters

• **options**: `CustomBaseFileDownloadOptions`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseFileDownload.mergeChunks`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:129](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L129)

***

### off()

> **off**(`eventName`, `listener`): `EventEmitter`

Removes a listener function from the specified event type.

#### Parameters

• **eventName**: `string` \| `RegExp`

• **listener**: `Function`

The listener function to be removed.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

#### Inherited from

`BaseFileDownload.off`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:32

***

### on()

> **on**(`eventName`, `listener`): `EventEmitter`

Adds a listener function to the specified event type.

#### Parameters

• **eventName**: `string` \| `RegExp`

• **listener**: `Function`

The listener function to be called when the event is emitted.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

#### Inherited from

`BaseFileDownload.on`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:16

***

### once()

> **once**(`eventName`, `listener`): `EventEmitter`

Adds a one-time listener function to the specified event type.

#### Parameters

• **eventName**: `string` \| `RegExp`

• **listener**: `Function`

The listener function to be called once when the event is emitted.

#### Returns

`EventEmitter`

The EventEmitter instance to allow chaining.

#### Throws

If the listener is not a function.

#### Inherited from

`BaseFileDownload.once`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:24

***

### removeAllListeners()

> **removeAllListeners**(`eventName`?): `EventEmitter`

Removes all listeners for a specific event or all events from an event emitter.

#### Parameters

• **eventName?**: `string` \| `RegExp`

The event to remove listeners for. If not provided, all listeners for all events will be removed.

#### Returns

`EventEmitter`

- The event emitter with all listeners removed.

#### Inherited from

`BaseFileDownload.removeAllListeners`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:51

***

### resolveOptions()

> **resolveOptions**(`options`?): [`FileDownloadOptions`](../interfaces/FileDownloadOptions.md)

#### Parameters

• **options?**: [`FileDownloadOptions`](../interfaces/FileDownloadOptions.md)

#### Returns

[`FileDownloadOptions`](../interfaces/FileDownloadOptions.md)

#### Overrides

`BaseFileDownload.resolveOptions`

#### Defined in

[packages/ai-tool-downloader/src/file-download.ts:15](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/file-download.ts#L15)

***

### setMaxListeners()

> **setMaxListeners**(`n`): `EventEmitter`

#### Parameters

• **n**: `number`

#### Returns

`EventEmitter`

#### Inherited from

`BaseFileDownload.setMaxListeners`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:52

***

### splitChunks()

> **splitChunks**(`options`): `Promise`\<`void`\>

#### Parameters

• **options**: `CustomBaseFileDownloadOptions`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseFileDownload.splitChunks`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:143](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L143)

***

### start()

> **start**(`options`?): `Promise`\<`void`\>

#### Parameters

• **options?**: `CustomBaseFileDownloadOptions`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseFileDownload.start`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:223](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L223)

***

### stop()

> **stop**(`options`?): `Promise`\<`void`\>

#### Parameters

• **options?**: `CustomBaseFileDownloadOptions`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`BaseFileDownload.stop`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:256](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L256)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

`BaseFileDownload.toJSON`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:280](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/base-file-download.ts#L280)

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

• **emitter**: `EventEmitter`

• **eventName**: `string` \| `RegExp`

#### Returns

`number`

#### Deprecated

use emitter.listenerCount instead

#### Inherited from

`BaseFileDownload.listenerCount`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:74
