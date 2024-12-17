[**@isdk/ai-tool-downloader**](../README.md) • **Docs**

***

[@isdk/ai-tool-downloader](../globals.md) / ChunkDownload

# Class: ChunkDownload

## Extends

- `EventEmitter`

## Constructors

### new ChunkDownload()

> **new ChunkDownload**(`options`): [`ChunkDownload`](ChunkDownload.md)

#### Parameters

• **options**: [`ChunkOptions`](../interfaces/ChunkOptions.md)

#### Returns

[`ChunkDownload`](ChunkDownload.md)

#### Overrides

`EventEmitter.constructor`

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:57](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/chunk-download.ts#L57)

## Properties

### \_status

> **\_status**: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md) = `'pending'`

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:45](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/chunk-download.ts#L45)

***

### lastError?

> `optional` **lastError**: `Error`

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:44](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/chunk-download.ts#L44)

***

### options

> **options**: [`ChunkOptions`](../interfaces/ChunkOptions.md)

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:43](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/chunk-download.ts#L43)

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

#### Inherited from

`EventEmitter.defaultMaxListeners`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:7

***

### nextId

> `static` **nextId**: `number` = `0`

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:41](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/chunk-download.ts#L41)

## Accessors

### status

> `get` **status**(): [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

> `set` **status**(`value`): `void`

#### Parameters

• **value**: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

#### Returns

[`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:47](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/chunk-download.ts#L47)

## Methods

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

`EventEmitter.emit`

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

`EventEmitter.emitAsync`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:44

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

`EventEmitter.listenerCount`

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

`EventEmitter.listeners`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:59

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

`EventEmitter.off`

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

`EventEmitter.on`

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

`EventEmitter.once`

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

`EventEmitter.removeAllListeners`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:51

***

### setMaxListeners()

> **setMaxListeners**(`n`): `EventEmitter`

#### Parameters

• **n**: `number`

#### Returns

`EventEmitter`

#### Inherited from

`EventEmitter.setMaxListeners`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:52

***

### start()

> **start**(`options`?): `Promise`\<`void`\>

#### Parameters

• **options?**: [`ChunkOptions`](../interfaces/ChunkOptions.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:71](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/chunk-download.ts#L71)

***

### stop()

> **stop**(`options`?): `Promise`\<`void`\>

#### Parameters

• **options?**: [`ChunkOptions`](../interfaces/ChunkOptions.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:199](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/chunk-download.ts#L199)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:212](https://github.com/isdk/ai-tool-download.js/blob/80d9e6be3e3b64743a58ca4b0eb84d7461594811/src/chunk-download.ts#L212)

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

`EventEmitter.listenerCount`

#### Defined in

node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:74
