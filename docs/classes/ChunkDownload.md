[@isdk/ai-tool-downloader](../README.md) / [Exports](../modules.md) / ChunkDownload

# Class: ChunkDownload

## Hierarchy

- `EventEmitter`

  ↳ **`ChunkDownload`**

## Table of contents

### Constructors

- [constructor](ChunkDownload.md#constructor)

### Properties

- [\_status](ChunkDownload.md#_status)
- [lastError](ChunkDownload.md#lasterror)
- [options](ChunkDownload.md#options)
- [defaultMaxListeners](ChunkDownload.md#defaultmaxlisteners)
- [nextId](ChunkDownload.md#nextid)

### Accessors

- [status](ChunkDownload.md#status)

### Methods

- [emit](ChunkDownload.md#emit)
- [emitAsync](ChunkDownload.md#emitasync)
- [listenerCount](ChunkDownload.md#listenercount)
- [listeners](ChunkDownload.md#listeners)
- [off](ChunkDownload.md#off)
- [on](ChunkDownload.md#on)
- [once](ChunkDownload.md#once)
- [removeAllListeners](ChunkDownload.md#removealllisteners)
- [setMaxListeners](ChunkDownload.md#setmaxlisteners)
- [start](ChunkDownload.md#start)
- [stop](ChunkDownload.md#stop)
- [toJSON](ChunkDownload.md#tojson)
- [listenerCount](ChunkDownload.md#listenercount-1)

## Constructors

### constructor

• **new ChunkDownload**(`options`): [`ChunkDownload`](ChunkDownload.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChunkOptions`](../interfaces/ChunkOptions.md) |

#### Returns

[`ChunkDownload`](ChunkDownload.md)

#### Overrides

EventEmitter.constructor

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:57](https://github.com/isdk/ai-tool-download.js/blob/a65a43cc44a40439d9de41e4ef262965562635f3/src/chunk-download.ts#L57)

## Properties

### \_status

• **\_status**: [`FileDownloadStatus`](../modules.md#filedownloadstatus) = `'pending'`

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:45](https://github.com/isdk/ai-tool-download.js/blob/a65a43cc44a40439d9de41e4ef262965562635f3/src/chunk-download.ts#L45)

___

### lastError

• `Optional` **lastError**: `Error`

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:44](https://github.com/isdk/ai-tool-download.js/blob/a65a43cc44a40439d9de41e4ef262965562635f3/src/chunk-download.ts#L44)

___

### options

• **options**: [`ChunkOptions`](../interfaces/ChunkOptions.md)

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:43](https://github.com/isdk/ai-tool-download.js/blob/a65a43cc44a40439d9de41e4ef262965562635f3/src/chunk-download.ts#L43)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:7

___

### nextId

▪ `Static` **nextId**: `number` = `0`

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:41](https://github.com/isdk/ai-tool-download.js/blob/a65a43cc44a40439d9de41e4ef262965562635f3/src/chunk-download.ts#L41)

## Accessors

### status

• `get` **status**(): [`FileDownloadStatus`](../modules.md#filedownloadstatus)

#### Returns

[`FileDownloadStatus`](../modules.md#filedownloadstatus)

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:47](https://github.com/isdk/ai-tool-download.js/blob/a65a43cc44a40439d9de41e4ef262965562635f3/src/chunk-download.ts#L47)

• `set` **status**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`FileDownloadStatus`](../modules.md#filedownloadstatus) |

#### Returns

`void`

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:50](https://github.com/isdk/ai-tool-download.js/blob/a65a43cc44a40439d9de41e4ef262965562635f3/src/chunk-download.ts#L50)

## Methods

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

EventEmitter.emit

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

EventEmitter.emitAsync

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:44

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

EventEmitter.listenerCount

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

EventEmitter.listeners

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:59

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

EventEmitter.off

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

EventEmitter.on

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

EventEmitter.once

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

EventEmitter.removeAllListeners

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:51

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

EventEmitter.setMaxListeners

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:52

___

### start

▸ **start**(`options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ChunkOptions`](../interfaces/ChunkOptions.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:71](https://github.com/isdk/ai-tool-download.js/blob/a65a43cc44a40439d9de41e4ef262965562635f3/src/chunk-download.ts#L71)

___

### stop

▸ **stop**(`options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ChunkOptions`](../interfaces/ChunkOptions.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:199](https://github.com/isdk/ai-tool-download.js/blob/a65a43cc44a40439d9de41e4ef262965562635f3/src/chunk-download.ts#L199)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:212](https://github.com/isdk/ai-tool-download.js/blob/a65a43cc44a40439d9de41e4ef262965562635f3/src/chunk-download.ts#L212)

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

EventEmitter.listenerCount

#### Defined in

node_modules/.pnpm/events-ex@2.0.0-alpha.15/node_modules/events-ex/lib/event-emitter.d.ts:74
