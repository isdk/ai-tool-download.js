[**@isdk/ai-tool-downloader**](../README.md)

***

[@isdk/ai-tool-downloader](../globals.md) / ChunkDownload

# Class: ChunkDownload

Defined in: [packages/ai-tool-downloader/src/chunk-download.ts:40](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/chunk-download.ts#L40)

## Extends

- `EventEmitter`

## Constructors

### new ChunkDownload()

> **new ChunkDownload**(`options`): [`ChunkDownload`](ChunkDownload.md)

Defined in: [packages/ai-tool-downloader/src/chunk-download.ts:57](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/chunk-download.ts#L57)

#### Parameters

##### options

[`ChunkOptions`](../interfaces/ChunkOptions.md)

#### Returns

[`ChunkDownload`](ChunkDownload.md)

#### Overrides

`EventEmitter.constructor`

## Properties

### \_status

> **\_status**: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md) = `'pending'`

Defined in: [packages/ai-tool-downloader/src/chunk-download.ts:45](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/chunk-download.ts#L45)

***

### lastError?

> `optional` **lastError**: `Error`

Defined in: [packages/ai-tool-downloader/src/chunk-download.ts:44](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/chunk-download.ts#L44)

***

### options

> **options**: [`ChunkOptions`](../interfaces/ChunkOptions.md)

Defined in: [packages/ai-tool-downloader/src/chunk-download.ts:43](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/chunk-download.ts#L43)

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

Defined in: node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:7

#### Inherited from

`EventEmitter.defaultMaxListeners`

***

### nextId

> `static` **nextId**: `number` = `0`

Defined in: [packages/ai-tool-downloader/src/chunk-download.ts:41](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/chunk-download.ts#L41)

## Accessors

### status

#### Get Signature

> **get** **status**(): [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

Defined in: [packages/ai-tool-downloader/src/chunk-download.ts:47](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/chunk-download.ts#L47)

##### Returns

[`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

#### Set Signature

> **set** **status**(`value`): `void`

Defined in: [packages/ai-tool-downloader/src/chunk-download.ts:50](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/chunk-download.ts#L50)

##### Parameters

###### value

[`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

##### Returns

`void`

## Methods

### emit()

> **emit**(`eventName`, ...`args`): `any`

Defined in: node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:38

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

`EventEmitter.emit`

***

### emitAsync()

> **emitAsync**(`eventName`, ...`args`): `Promise`\<`any`\>

Defined in: node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:44

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

`EventEmitter.emitAsync`

***

### listenerCount()

> **listenerCount**(`eventName`): `number`

Defined in: node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:66

Returns the count of listeners that are registered to listen for the specified event.

#### Parameters

##### eventName

The name of the event to get the listeners for.

`string` | `RegExp`

#### Returns

`number`

- the listeners count

#### Inherited from

`EventEmitter.listenerCount`

***

### listeners()

> **listeners**(`eventName`): `Function`[]

Defined in: node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:59

Returns an array of functions that are registered to listen for the specified event.

#### Parameters

##### eventName

The name of the event to get the listeners for.

`string` | `RegExp`

#### Returns

`Function`[]

- An array of functions that are registered to listen for the specified event.

#### Inherited from

`EventEmitter.listeners`

***

### off()

> **off**(`eventName`, `listener`): `EventEmitter`

Defined in: node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:32

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

`EventEmitter.off`

***

### on()

> **on**(`eventName`, `listener`): `EventEmitter`

Defined in: node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:16

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

`EventEmitter.on`

***

### once()

> **once**(`eventName`, `listener`): `EventEmitter`

Defined in: node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:24

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

`EventEmitter.once`

***

### removeAllListeners()

> **removeAllListeners**(`eventName`?): `EventEmitter`

Defined in: node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:51

Removes all listeners for a specific event or all events from an event emitter.

#### Parameters

##### eventName?

The event to remove listeners for. If not provided, all listeners for all events will be removed.

`string` | `RegExp`

#### Returns

`EventEmitter`

- The event emitter with all listeners removed.

#### Inherited from

`EventEmitter.removeAllListeners`

***

### setMaxListeners()

> **setMaxListeners**(`n`): `EventEmitter`

Defined in: node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:52

#### Parameters

##### n

`number`

#### Returns

`EventEmitter`

#### Inherited from

`EventEmitter.setMaxListeners`

***

### start()

> **start**(`options`?): `Promise`\<`void`\>

Defined in: [packages/ai-tool-downloader/src/chunk-download.ts:71](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/chunk-download.ts#L71)

#### Parameters

##### options?

[`ChunkOptions`](../interfaces/ChunkOptions.md)

#### Returns

`Promise`\<`void`\>

***

### stop()

> **stop**(`options`?): `Promise`\<`void`\>

Defined in: [packages/ai-tool-downloader/src/chunk-download.ts:202](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/chunk-download.ts#L202)

#### Parameters

##### options?

[`ChunkOptions`](../interfaces/ChunkOptions.md)

#### Returns

`Promise`\<`void`\>

***

### toJSON()

> **toJSON**(): `any`

Defined in: [packages/ai-tool-downloader/src/chunk-download.ts:215](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/chunk-download.ts#L215)

#### Returns

`any`

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

Defined in: node\_modules/.pnpm/events-ex@2.0.0/node\_modules/events-ex/lib/event-emitter.d.ts:74

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

`EventEmitter.listenerCount`
