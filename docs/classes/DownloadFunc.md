[**@isdk/ai-tool-downloader**](../README.md)

***

[@isdk/ai-tool-downloader](../globals.md) / DownloadFunc

# Class: DownloadFunc

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:65](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L65)

Server-side download management utility that handles a file download queue and notifies progress via SSE events.
Requires persistent storage of the download queue.

## Extends

- `ResServerTools`

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### Constructor

> **new DownloadFunc**(`name`, `options?`): `DownloadFunc`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1757

#### Parameters

##### name

`string` | `Function` | `FuncItem`

##### options?

`any`

#### Returns

`DownloadFunc`

#### Inherited from

`ResServerTools.constructor`

## Properties

### $attributes

> **$attributes**: `Properties`

Defined in: property-manager.js/lib/advance.d.ts:5

#### Inherited from

`ResServerTools.$attributes`

***

### action

> **action**: `"get"` \| `"post"` \| `"put"` \| `"patch"` \| `"delete"` \| `"list"` \| `"res"`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1755

The action to be used for the remote call. This typically represents an RPC method name.
Only for RESTful HTTP transports, it might be mapped to a standard HTTP method (e.g., GET, POST)

#### Inherited from

`ResServerTools.action`

***

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:124

Optional aliases for the function name.

#### Inherited from

`ResServerTools.alias`

***

### allowExportFunc?

> `optional` **allowExportFunc**: `boolean`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1297

If set to true, the body of the function (`func`) will be serialized and sent
to the client when tools are loaded. This allows the client to execute the
function locally instead of making a remote call. Defaults to false.

#### Inherited from

`ResServerTools.allowExportFunc`

***

### ~~apiRoot?~~

> `optional` **apiRoot**: `string`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:675

The root endpoint for the remote service.

#### Deprecated

Use `transport` instead.

#### Inherited from

`ResServerTools.apiRoot`

***

### asyncFeatures?

> `optional` **asyncFeatures**: `number`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:138

A bitmask representing asynchronous features supported by the function, built from `AsyncFeatureBits`.
This allows the system to understand if a function supports capabilities like cancellation or multi-tasking.

#### See

AsyncFeatureBits from `@src/utils/cancelable-ability.ts`

#### Example

```ts
import { AsyncFeatures } from './utils';
const func = new ToolFunc({
  name: 'cancellableTask',
  asyncFeatures: AsyncFeatures.Cancelable | AsyncFeatures.MultiTask,
  // ...
});
```

#### Inherited from

`ResServerTools.asyncFeatures`

***

### autoScaleDownloads

> **autoScaleDownloads**: `undefined` \| `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:91](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L91)

Determines whether to automatically scale downloads when the concurrency limit is reached.
If set to `true`, the system will automatically stop existing download tasks to start new ones when the concurrency limit is reached.
If set to `false`, an error message "Concurrency limit reached" will be reported instead.

***

### autostartQueue

> **autostartQueue**: `undefined` \| `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:77](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L77)

Indicates whether the download queue should automatically start processing the next task upon completion of the current one.

When set to `true`, the system will automatically initiate the download of the next item in the queue as soon as the current
download task finishes successfully. If set to `false`, manual intervention will be required to begin subsequent downloads.

***

### chunkSizeInBytes

> **chunkSizeInBytes**: `number` = `defaultChunkSizeInBytes`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:85](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L85)

***

### cleanTempFile

> **cleanTempFile**: `boolean` = `true`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:84](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L84)

Determines whether to clean up temporary files when a downloading or paused task is removed.
If set to `true`, temporary files will be deleted when a downloading or paused task is removed.
If set to `false`, temporary files will not be deleted.

***

### concurrency

> **concurrency**: `number` = `defaultConcurrency`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:70](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L70)

***

### constructor

> **constructor**: `Function`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`ResServerTools.constructor`

***

### defaultOptions

> **defaultOptions**: `object`

Defined in: property-manager.js/lib/abstract.d.ts:74

The default options for export and assign

#### assign?

> `optional` **assign**: `IMergeOptions`

#### export?

> `optional` **export**: `IMergeOptions`

#### Inherited from

`ResServerTools.defaultOptions`

***

### depends

> **depends**: `object`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:93](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L93)

A map of dependencies this function has on other tool functions.
Declaring dependencies ensures that they are automatically registered when this function is registered.
This is crucial for building modular functions that rely on each other without needing to manage registration order manually.

#### event

> **event**: `EventServer` = `eventServer`

#### Example

```ts
const helperFunc = new ToolFunc({ name: 'helper', func: () => 'world' });
const mainFunc = new ToolFunc({
  name: 'main',
  depends: {
    helper: helperFunc,
  },
  func() {
    // We can now safely run the dependency
    const result = this.runSync('helper');
    return `Hello, ${result}`;
  }
});
// When mainFunc is registered, helperFunc will be registered automatically.
mainFunc.register();
```

#### Overrides

`ResServerTools.depends`

***

### description?

> `optional` **description**: `string`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:168

A detailed description of what the function does.

#### Inherited from

`ResServerTools.description`

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:686

Addtional options to be passed to the underlying `fetch` call in a transport.

#### Inherited from

`ResServerTools.fetchOptions`

***

### finished

> **finished**: `DownloadItems` = `{}`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:67](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L67)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:113

If true, indicates that this function should be treated as a server-side API.

#### Inherited from

`ResServerTools.isApi`

***

### methods

> **methods**: `string`[]

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1723

#### Inherited from

`ResServerTools.methods`

***

### name?

> `optional` **name**: `string`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:70

The unique name of the function.

#### Inherited from

`ResServerTools.name`

***

### nextOrder

> **nextOrder**: `number` = `0`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:69](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L69)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: property-manager.js/lib/abstract.d.ts:78

the property with the default prefix '$' will not be exported.

#### Inherited from

`ResServerTools.nonExported1stChar`

***

### params

> **params**: `FuncParams`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1756

#### Inherited from

`ResServerTools.params`

***

### queue

> **queue**: `DownloadItems` = `{}`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:66](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L66)

***

### result?

> `optional` **result**: `string` \| `Record`\<`string`, `any`\>

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:80

The expected return type of the function, described as a string or a JSON schema object.

#### Inherited from

`ResServerTools.result`

***

### rootDir

> **rootDir**: `undefined` \| `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:68](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L68)

***

### scope?

> `optional` **scope**: `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:85

The execution scope or context (`this`) for the function.

#### Inherited from

`ResServerTools.scope`

***

### setup()?

> `optional` **setup**: (`this`, `options?`) => `void`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:108

A lifecycle hook called once during the `ToolFunc` instance's initialization.
It allows for initial setup, state configuration, or property modification on the instance
before it is used or registered. The `this` context is the `ToolFunc` instance itself.

#### Parameters

##### this

`ToolFunc`

##### options?

`FuncItem`

The configuration options for the function.

#### Returns

`void`

#### Example

```ts
const myFunc = new ToolFunc({
  name: 'myFunc',
  customState: 'initial',
  setup() {
    // `this` is the myFunc instance
    this.customState = 'configured';
  }
});
console.log(myFunc.customState); // Outputs: 'configured'
```

#### Inherited from

`ResServerTools.setup`

***

### stream?

> `optional` **stream**: `boolean`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:119

If true, indicates that the function has the *capability* to stream its output.
Whether a specific call is streamed is determined by a `stream` property in the runtime parameters.

#### Inherited from

`ResServerTools.stream`

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:90

Tags for grouping or filtering functions.

#### Inherited from

`ResServerTools.tags`

***

### title?

> `optional` **title**: `string`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:173

A concise, human-readable title for the function, often used in UI or by AI.

#### Inherited from

`ResServerTools.title`

***

### aliases

> `static` **aliases**: `object`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:295

A static map of aliases to their corresponding function names.

#### Index Signature

\[`name`: `string`\]: `string`

#### Inherited from

`ResServerTools.aliases`

***

### dataPath

> `static` **dataPath**: `string`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:304

A conventional property to designate a file path for saving the registered `ToolFunc` data.
Note: The `ToolFunc` class itself does not implement persistence logic. It is up to the
developer to use this path to save and load the `ToolFunc.items` registry if needed.

#### Inherited from

`ResServerTools.dataPath`

***

### items

> `static` **items**: `Funcs`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:290

A static registry of all `ToolFunc` instances, indexed by name.

#### Inherited from

`ResServerTools.items`

***

### SpecialRpcMethodNames

> `static` **SpecialRpcMethodNames**: `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1754

#### Inherited from

`ResServerTools.SpecialRpcMethodNames`

## Accessors

### SpecialRpcMethodNames

#### Get Signature

> **get** **SpecialRpcMethodNames**(): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1728

##### Returns

`any`

#### Inherited from

`ResServerTools.SpecialRpcMethodNames`

***

### apiRoot

#### Get Signature

> **get** `static` **apiRoot**(): `undefined` \| `string`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1317

The conventional root path for the API endpoint.

##### Returns

`undefined` \| `string`

#### Inherited from

`ResServerTools.apiRoot`

## Methods

### \_start()

> **\_start**(`options`): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:240](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L240)

#### Parameters

##### options

`string` | `DownloadFuncParams`

#### Returns

`Promise`\<`void`\>

***

### $clean()

> **$clean**(`options`): `Promise`\<`any`[]\>

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:330](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L330)

#### Parameters

##### options

###### completed?

`boolean`

###### downloading?

`boolean`

###### paused?

`boolean`

#### Returns

`Promise`\<`any`[]\>

***

### $config()

> **$config**(`options?`): `object`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:360](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L360)

#### Parameters

##### options?

[`DownloadConfiguration`](../interfaces/DownloadConfiguration.md)

#### Returns

`object`

##### autoScaleDownloads

> **autoScaleDownloads**: `boolean`

##### autostartQueue

> **autostartQueue**: `boolean`

##### chunkSizeInBytes

> **chunkSizeInBytes**: `number`

##### cleanTempFile

> **cleanTempFile**: `boolean`

##### concurrency

> **concurrency**: `number`

##### rootDir

> **rootDir**: `undefined` \| `string`

***

### $start()

> **$start**(`options`): `Promise`\<`undefined` \| \{ `id`: `string`; \}\>

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:295](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L295)

#### Parameters

##### options

`DownloadFuncParams`

#### Returns

`Promise`\<`undefined` \| \{ `id`: `string`; \}\>

***

### $stop()

> **$stop**(`options`): `Promise`\<\{ `id`: `string`; `status`: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md); `url`: `string`; \} \| \{ `id?`: `undefined`; `status`: `string`; `url?`: `undefined`; \}\>

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:310](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L310)

#### Parameters

##### options

`string` | `DownloadFuncParams`

#### Returns

`Promise`\<\{ `id`: `string`; `status`: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md); `url`: `string`; \} \| \{ `id?`: `undefined`; `status`: `string`; `url?`: `undefined`; \}\>

***

### add()

> **add**(`options`): `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:221](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L221)

#### Parameters

##### options

`BaseFileDownloadOptions`

#### Returns

`string`

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:431

Converts an array of positional arguments into a named parameters object.
This is used internally to support functions defined with named parameters.

#### Parameters

##### params

`any`[]

An array of positional arguments.

#### Returns

`any`[]

An array containing a single parameters object.

#### Inherited from

`ResServerTools.arr2ObjParams`

***

### assign()

> **assign**(`src`, `options?`): `this`

Defined in: property-manager.js/lib/abstract.d.ts:106

Assign the values from the src object.

#### Parameters

##### src

`any`

the source object

##### options?

`IMergeOptions`

#### Returns

`this`

this object

#### Inherited from

`ResServerTools.assign`

***

### assignProperty()

> **assignProperty**(`src`, `name`, `value`, `attrs?`, `options?`): `void`

Defined in: property-manager.js/lib/abstract.d.ts:117

Assign a property of src to this object.

#### Parameters

##### src

`any`

the src object

##### name

`string`

the property name to assign

##### value

`any`

the property value to assign

##### attrs?

`any`

the attributes object

##### options?

`IMergeOptions`

#### Returns

`void`

#### Inherited from

`ResServerTools.assignProperty`

***

### assignPropertyTo()

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs?`, `options?`): `void`

Defined in: property-manager.js/lib/abstract.d.ts:131

Assign the property value from the src to destination object.

#### Parameters

##### dest

`any`

The destination object

##### src

`any`

The src object

##### name

`string`

The property name

##### value

`any`

The property value

##### attrs?

`any`

The attributes object of the property

##### options?

`IMergeOptions`

#### Returns

`void`

#### Inherited from

`ResServerTools.assignPropertyTo`

***

### assignTo()

> **assignTo**(`dest?`, `options?`): `any`

Defined in: property-manager.js/lib/abstract.d.ts:191

Assign this attributes to the dest object

#### Parameters

##### dest?

`any`

the destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the dest object

#### Inherited from

`ResServerTools.assignTo`

***

### cast()

> **cast**(`key`, `value`): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1731

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

#### Inherited from

`ResServerTools.cast`

***

### castParams()

> **castParams**(`params`): `RpcMethodsServerFuncParams`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1759

#### Parameters

##### params

`RpcMethodsServerFuncParams`

#### Returns

`RpcMethodsServerFuncParams`

#### Inherited from

`ResServerTools.castParams`

***

### clone()

> **clone**(`options?`): `any`

Defined in: property-manager.js/lib/abstract.d.ts:155

Create a new object with the same values of attributes.

#### Parameters

##### options?

`IMergeOptions`

#### Returns

`any`

the new object

#### Inherited from

`ResServerTools.clone`

***

### cloneTo()

> **cloneTo**(`dest`, `options?`): `any`

Defined in: property-manager.js/lib/abstract.d.ts:148

Create and assign the values to the destination object.

#### Parameters

##### dest

`any`

the destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the new dest object

#### Inherited from

`ResServerTools.cloneTo`

***

### defineProperties()

> `abstract` **defineProperties**(`aProperties`): `any`

Defined in: property-manager.js/lib/abstract.d.ts:89

Define the attributes of this object.

#### Parameters

##### aProperties

`SimplePropDescriptors`

the defined attributes of the object

#### Returns

`any`

#### Inherited from

`ResServerTools.defineProperties`

***

### delete()

> **delete**(`options`): `Promise`\<\{ `filepath`: `undefined` \| `string`; `id`: `string`; `status`: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md); `url`: `string`; \}\>

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:464](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L464)

#### Parameters

##### options

`DownloadFuncParams`

#### Returns

`Promise`\<\{ `filepath`: `undefined` \| `string`; `id`: `string`; `status`: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md); `url`: `string`; \}\>

#### Overrides

`ResServerTools.delete`

***

### exportQueue()

> **exportQueue**(): `DownloadOptionsItems`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:115](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L115)

#### Returns

`DownloadOptionsItems`

***

### exportTo()

> **exportTo**(`dest`, `options?`): `any`

Defined in: property-manager.js/lib/abstract.d.ts:173

Export attributes to the dest json object.

#### Parameters

##### dest

`any`

the destination object

##### options?

`IExportOptions`

#### Returns

`any`

the dest object.

#### Inherited from

`ResServerTools.exportTo`

***

### func()

> **func**(`params`): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1734

Placeholder for the actual server-side function implementation.
This method is intended to be defined when a `ServerTools` instance is created.

#### Parameters

##### params

`RpcMethodsServerFuncParams`

The parameters for the function.

#### Returns

`any`

The result of the function.

#### Inherited from

`ResServerTools.func`

***

### get()

> **get**(`options`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:427](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L427)

#### Parameters

##### options

`DownloadFuncParams`

#### Returns

`any`

#### Overrides

`ResServerTools.get`

***

### getDownloadsInQueue()

> **getDownloadsInQueue**(`status?`, `isNot?`): [`FileDownload`](FileDownload.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:145](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L145)

#### Parameters

##### status?

[`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

##### isNot?

`boolean`

#### Returns

[`FileDownload`](FileDownload.md)[]

***

### getFunc()

> **getFunc**(`name?`): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:475

Gets a bound function reference for execution with named parameters.
If a name is provided, it retrieves a different function from the registry.
Otherwise, it returns a bound version of this instance's `runSync`.

#### Parameters

##### name?

`string`

Optional name of the function to retrieve.

#### Returns

`any`

A function reference or `undefined` if not found.

#### Inherited from

`ResServerTools.getFunc`

***

### getFuncWithPos()

> **getFuncWithPos**(`name?`): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:513

Gets a bound function reference suitable for positional argument execution.
If a name is provided, it retrieves a different function from the registry.
Otherwise, it returns a bound version of this instance's `runWithPosSync`.

#### Parameters

##### name?

`string`

Optional name of the function to retrieve.

#### Returns

`any`

A function reference or `undefined` if not found.

#### Inherited from

`ResServerTools.getFuncWithPos`

***

### getId()

> **getId**(`options`): `undefined` \| `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:126](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L126)

#### Parameters

##### options

`string` | `DownloadFuncParams`

#### Returns

`undefined` \| `string`

***

### getItem()

> **getItem**(`options`): `undefined` \| [`FileDownload`](FileDownload.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:287](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L287)

#### Parameters

##### options

`string` | `DownloadFuncParams`

#### Returns

`undefined` \| [`FileDownload`](FileDownload.md)

***

### getMethodFromParams()

> **getMethodFromParams**(`params`): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1758

#### Parameters

##### params

`ResServerFuncParams`

#### Returns

`any`

#### Inherited from

`ResServerTools.getMethodFromParams`

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: property-manager.js/lib/abstract.d.ts:98

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Inherited from

`ResServerTools.getProperties`

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:519

Checks if the current function instance supports a specific async feature.

#### Parameters

##### feature

`AsyncFeatureBits`

The async feature bit to check for.

#### Returns

`boolean`

`true` if the feature is supported, otherwise `false`.

#### Inherited from

`ResServerTools.hasAsyncFeature`

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:140

Determines whether an object has a property with the specified name.

#### Parameters

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

#### Inherited from

`ResServerTools.hasOwnProperty`

***

### importQueue()

> **importQueue**(`queue`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:106](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L106)

#### Parameters

##### queue

`DownloadOptionsItems`

#### Returns

`void`

***

### initialize()

> **initialize**(`src?`): `this`

Defined in: property-manager.js/lib/abstract.d.ts:139

Initialize object and assign attribute values from src if src exists.

#### Parameters

##### src?

`any`

#### Returns

`this`

this object.

#### Inherited from

`ResServerTools.initialize`

***

### initRpcMethods()

> **initRpcMethods**(`methods?`): `void`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1729

#### Parameters

##### methods?

`string`[]

#### Returns

`void`

#### Inherited from

`ResServerTools.initRpcMethods`

***

### isPrototypeOf()

> **isPrototypeOf**(`v`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:146

Determines whether an object exists in another object's prototype chain.

#### Parameters

##### v

`Object`

Another object whose prototype chain is to be checked.

#### Returns

`boolean`

#### Inherited from

`ResServerTools.isPrototypeOf`

***

### isSame()

> **isSame**(`src`, `options?`): `boolean`

Defined in: property-manager.js/lib/abstract.d.ts:200

Check the src object whether “equals” this object.

#### Parameters

##### src

`any`

The source object

##### options?

`IMergeOptions`

#### Returns

`boolean`

#### Inherited from

`ResServerTools.isSame`

***

### isStream()

> **isStream**(`params`): `undefined` \| `boolean`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:532

Determines if a function call should produce a stream.

The logic is as follows:
1. It first checks if the function is generally capable of streaming (`this.stream`).
2. If it is, it then checks if a `stream` parameter is formally declared in the function's `params` definition.
3. If both are true, the method returns the value of the `stream` property from the runtime `params` object.
Otherwise, it returns the function's static `stream` capability.

#### Parameters

##### params

`any`

The runtime parameters passed to the function call.

#### Returns

`undefined` \| `boolean`

`true` if the call should be streamed, `false` or `undefined` otherwise.

#### Inherited from

`ResServerTools.isStream`

***

### list()

> **list**(`options`): `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:445](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L445)

#### Parameters

##### options

`DownloadFuncParams`

#### Returns

`string`[]

#### Overrides

`ResServerTools.list`

***

### mergeTo()

> **mergeTo**(`dest`, `options?`): `any`

Defined in: property-manager.js/lib/abstract.d.ts:164

Merge this attributes to dest object.

#### Parameters

##### dest

`any`

The destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the dest object.

#### Inherited from

`ResServerTools.mergeTo`

***

### newDownload()

> **newDownload**(`options`, `id`): [`FileDownload`](FileDownload.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:186](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L186)

#### Parameters

##### options

`BaseFileDownloadOptions`

##### id

`string`

#### Returns

[`FileDownload`](FileDownload.md)

***

### obj2ArrParams()

> **obj2ArrParams**(`params?`): `any`[]

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:438

Converts a named parameters object into an array of positional arguments.
This is used for functions defined with positional parameters.

#### Parameters

##### params?

`any`

A named parameters object.

#### Returns

`any`[]

An array of positional arguments.

#### Inherited from

`ResServerTools.obj2ArrParams`

***

### onCompleted()

> **onCompleted**(`id`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:135](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L135)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### post()

> **post**(`options`): `Promise`\<`undefined` \| \{ `id`: `string`; \}\>

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:391](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L391)

#### Parameters

##### options

`DownloadFuncParams`

#### Returns

`Promise`\<`undefined` \| \{ `id`: `string`; \}\>

#### Overrides

`ResServerTools.post`

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`v`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:152

Determines whether a specified property is enumerable.

#### Parameters

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

#### Inherited from

`ResServerTools.propertyIsEnumerable`

***

### put()

> **put**(`options`): `object`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:407](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L407)

#### Parameters

##### options

`DownloadFuncParams`

#### Returns

`object`

##### id

> **id**: `string`

#### Overrides

`ResServerTools.put`

***

### register()

> **register**(): `boolean` \| `ToolFunc`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:419

Registers the current `ToolFunc` instance into the static registry.
Also registers any declared dependencies.

#### Returns

`boolean` \| `ToolFunc`

The instance itself upon successful registration, or `false` if it already exists.

#### Inherited from

`ResServerTools.register`

***

### run()

> **run**(`params`, `context?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1340

Overrides the base `run` method to inject transport-specific context.
If a `context` object containing `req` and `reply` is provided, these are
added to the parameters as `_req` and `_res` before execution.

#### Parameters

##### params

`ServerFuncParams`

The parameters for the function.

##### context?

The transport-level context.

###### reply

`any`

###### req

`any`

#### Returns

`Promise`\<`any`\>

The result of the function execution.

#### Inherited from

`ResServerTools.run`

***

### runAs()

> **runAs**(`name`, `params?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:459

Asynchronously executes another registered function by name.
This method delegates to `runAsSync()` internally.

#### Parameters

##### name

`string`

The name of the target function to run.

##### params?

`any`

Optional parameters to pass to the function.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the result of the function execution.

#### Inherited from

`ResServerTools.runAs`

***

### runAsSync()

> **runAsSync**(`name`, `params?`): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:467

Synchronously executes another registered function by name.
This is a convenience method that forwards the call to the static `runSync()` method.

#### Parameters

##### name

`string`

The name of the target function to run.

##### params?

`any`

Optional parameters to pass to the function.

#### Returns

`any`

The result of the function execution.

#### Inherited from

`ResServerTools.runAsSync`

***

### runSync()

> **runSync**(`params?`): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:445

Executes the function synchronously with a named parameters object.

#### Parameters

##### params?

`any`

The parameters object for the function.

#### Returns

`any`

The result of the function execution.

#### Throws

Will throw an error if an array of parameters is passed to a function that expects an object.

#### Inherited from

`ResServerTools.runSync`

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:497

Executes the function asynchronously using positional arguments.
Delegates to `runWithPosSync()` internally.

#### Parameters

##### params

...`any`[]

Positional arguments passed to the function.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the result of the function execution.

#### Inherited from

`ResServerTools.runWithPos`

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:505

Asynchronously executes another function by name using positional arguments.
Delegates to `runWithPosAsSync()` internally.

#### Parameters

##### name

`string`

The name of the target function to run.

##### params

...`any`[]

Positional arguments to pass to the function.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the result of the function execution.

#### Inherited from

`ResServerTools.runWithPosAs`

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:490

Synchronously executes another function by name using positional arguments.
This is a convenience wrapper around the static `runWithPosSync()` method.

#### Parameters

##### name

`string`

The name of the target function to run.

##### params

...`any`[]

Positional arguments to pass to the function.

#### Returns

`any`

The result of the function execution.

#### Inherited from

`ResServerTools.runWithPosAsSync`

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:482

Executes the function synchronously using positional arguments.
If the function expects named parameters, it converts the arguments automatically.

#### Parameters

##### params

...`any`[]

Positional arguments passed to the function.

#### Returns

`any`

The result of the function execution.

#### Inherited from

`ResServerTools.runWithPosSync`

***

### start()

> **start**(`options`): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:256](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L256)

#### Parameters

##### options

`string` | `DownloadFuncParams`

#### Returns

`Promise`\<`void`\>

***

### startAll()

> **startAll**(): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:155](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L155)

#### Returns

`void`

***

### stopAll()

> **stopAll**(): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/ai-tool-download.ts:176](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/ai-tool-download.ts#L176)

#### Returns

`Promise`\<`void`\>

***

### toJSON()

> **toJSON**(): `any`

Defined in: property-manager.js/lib/abstract.d.ts:182

#### Returns

`any`

#### Inherited from

`ResServerTools.toJSON`

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

`ResServerTools.toLocaleString`

***

### toObject()

> **toObject**(`options?`): `any`

Defined in: property-manager.js/lib/abstract.d.ts:181

Convert the attributes to the json object

#### Parameters

##### options?

`any`

#### Returns

`any`

the json object.

#### Inherited from

`ResServerTools.toObject`

***

### toString()

> **toString**(): `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

`ResServerTools.toString`

***

### unregister()

> **unregister**(): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:424

Removes the current `ToolFunc` instance from the static registry.

#### Returns

`any`

The instance that was unregistered.

#### Inherited from

`ResServerTools.unregister`

***

### valueOf()

> **valueOf**(): `Object`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

`ResServerTools.valueOf`

***

### assign()

#### Call Signature

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U`

##### Parameters

###### target

`T`

The target object to copy to.

###### source

`U`

The source object from which to copy properties.

##### Returns

`T` & `U`

##### Inherited from

`ResServerTools.assign`

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U`

###### V

`V`

##### Parameters

###### target

`T`

The target object to copy to.

###### source1

`U`

The first source object from which to copy properties.

###### source2

`V`

The second source object from which to copy properties.

##### Returns

`T` & `U` & `V`

##### Inherited from

`ResServerTools.assign`

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U`

###### V

`V`

###### W

`W`

##### Parameters

###### target

`T`

The target object to copy to.

###### source1

`U`

The first source object from which to copy properties.

###### source2

`V`

The second source object from which to copy properties.

###### source3

`W`

The third source object from which to copy properties.

##### Returns

`T` & `U` & `V` & `W`

##### Inherited from

`ResServerTools.assign`

#### Call Signature

> `static` **assign**(`target`, ...`sources`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:313

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Parameters

###### target

`object`

The target object to copy to.

###### sources

...`any`[]

One or more source objects from which to copy properties

##### Returns

`any`

##### Inherited from

`ResServerTools.assign`

***

### create()

#### Call Signature

> `static` **create**(`o`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:188

Creates an object that has the specified prototype or that has null prototype.

##### Parameters

###### o

Object to use as a prototype. May be null.

`null` | `object`

##### Returns

`any`

##### Inherited from

`ResServerTools.create`

#### Call Signature

> `static` **create**(`o`, `properties`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:195

Creates an object that has the specified prototype, and that optionally contains specified properties.

##### Parameters

###### o

Object to use as a prototype. May be null

`null` | `object`

###### properties

`PropertyDescriptorMap` & `ThisType`\<`any`\>

JavaScript object that contains one or more property descriptors.

##### Returns

`any`

##### Inherited from

`ResServerTools.create`

***

### defineProperties()

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate?`): `any`

Defined in: property-manager.js/lib/advance.d.ts:11

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Parameters

##### aTarget

`any`

##### aProperties

`PropDescriptors`

##### recreate?

`boolean`

#### Returns

`any`

#### Inherited from

`ResServerTools.defineProperties`

***

### defineProperty()

> `static` **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:203

Adds a property to an object, or modifies attributes of an existing property.

#### Type Parameters

##### T

`T`

#### Parameters

##### o

`T`

Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.

##### p

`PropertyKey`

The property name.

##### attributes

`PropertyDescriptor` & `ThisType`\<`any`\>

Descriptor for the property. It can be for a data property or an accessor property.

#### Returns

`T`

#### Inherited from

`ResServerTools.defineProperty`

***

### entries()

#### Call Signature

> `static` **entries**\<`T`\>(`o`): \[`string`, `T`\][]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

Returns an array of key/values of the enumerable own properties of an object

##### Type Parameters

###### T

`T`

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\[`s`: `string`\]: `T`; \} | `ArrayLike`\<`T`\>

##### Returns

\[`string`, `T`\][]

##### Inherited from

`ResServerTools.entries`

#### Call Signature

> `static` **entries**(`o`): \[`string`, `any`\][]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

\[`string`, `any`\][]

##### Inherited from

`ResServerTools.entries`

***

### freeze()

#### Call Signature

> `static` **freeze**\<`T`\>(`f`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:222

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

###### T

`T` *extends* `Function`

##### Parameters

###### f

`T`

Object on which to lock the attributes.

##### Returns

`T`

##### Inherited from

`ResServerTools.freeze`

#### Call Signature

> `static` **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:228

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U` *extends* `string` \| `number` \| `bigint` \| `boolean` \| `symbol`

##### Parameters

###### o

`T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Inherited from

`ResServerTools.freeze`

#### Call Signature

> `static` **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:234

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

###### T

`T`

##### Parameters

###### o

`T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Inherited from

`ResServerTools.freeze`

***

### fromEntries()

#### Call Signature

> `static` **fromEntries**\<`T`\>(`entries`): `object`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

Returns an object created by key-value entries for properties and methods

##### Type Parameters

###### T

`T` = `any`

##### Parameters

###### entries

`Iterable`\<readonly \[`PropertyKey`, `T`\]\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`object`

##### Inherited from

`ResServerTools.fromEntries`

#### Call Signature

> `static` **fromEntries**(`entries`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

Returns an object created by key-value entries for properties and methods

##### Parameters

###### entries

`Iterable`\<readonly `any`[]\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`any`

##### Inherited from

`ResServerTools.fromEntries`

***

### get()

> `static` **get**(`name`): `ToolFunc`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:310

Retrieves a registered function by its name or alias.

#### Parameters

##### name

`string`

The name or alias of the function to retrieve.

#### Returns

`ToolFunc`

The `ToolFunc` instance if found, otherwise `undefined`.

#### Inherited from

`ResServerTools.get`

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): `ToolFunc`[]

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:327

Retrieves all registered functions that have a specific tag.

#### Parameters

##### tagName

`string`

The tag to search for.

#### Returns

`ToolFunc`[]

An array of matching `ToolFunc` instances.

#### Inherited from

`ResServerTools.getAllByTag`

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| `ToolFunc`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:321

Finds the first registered function that has a specific tag.

#### Parameters

##### tagName

`string`

The tag to search for.

#### Returns

`undefined` \| `ToolFunc`

The first matching `ToolFunc` instance, or `undefined` if none is found.

#### Inherited from

`ResServerTools.getByTag`

***

### getFunc()

> `static` **getFunc**(`name`): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:356

Retrieves a bound, runnable function reference for a registered function.
This reference is suitable for execution with an object of named parameters.

#### Parameters

##### name

`string`

The name of the function.

#### Returns

`any`

A bound function reference, or `undefined` if not found.

#### Inherited from

`ResServerTools.getFunc`

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:379

Retrieves a bound, runnable function reference for a registered function.
This reference is suitable for execution with positional arguments.

#### Parameters

##### name

`string`

The name of the function.

#### Returns

`any`

A bound function reference, or `undefined` if not found.

#### Inherited from

`ResServerTools.getFuncWithPos`

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:175

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

##### o

`any`

Object that contains the property.

##### p

`PropertyKey`

Name of the property.

#### Returns

`undefined` \| `PropertyDescriptor`

#### Inherited from

`ResServerTools.getOwnPropertyDescriptor`

***

### getOwnPropertyDescriptors()

> `static` **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

Returns an object containing all own property descriptors of an object

#### Type Parameters

##### T

`T`

#### Parameters

##### o

`T`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

#### Returns

\{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

#### Inherited from

`ResServerTools.getOwnPropertyDescriptors`

***

### getOwnPropertyNames()

> `static` **getOwnPropertyNames**(`o`): `string`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:182

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

##### o

`any`

Object that contains the own properties.

#### Returns

`string`[]

#### Inherited from

`ResServerTools.getOwnPropertyNames`

***

### getOwnPropertySymbols()

> `static` **getOwnPropertySymbols**(`o`): `symbol`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

Returns an array of all symbol properties found directly on object o.

#### Parameters

##### o

`any`

Object to retrieve the symbols from.

#### Returns

`symbol`[]

#### Inherited from

`ResServerTools.getOwnPropertySymbols`

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

Defined in: property-manager.js/lib/advance.d.ts:10

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

`ResServerTools.getProperties`

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:167

Returns the prototype of an object.

#### Parameters

##### o

`any`

The object that references the prototype.

#### Returns

`any`

#### Inherited from

`ResServerTools.getPrototypeOf`

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:333

Checks if any registered function has a specific asynchronous feature.

#### Parameters

##### feature

`AsyncFeatureBits`

The async feature bit to check for.

#### Returns

`boolean`

`true` if the feature is present in any function, otherwise `false`.

#### Inherited from

`ResServerTools.hasAsyncFeature`

***

### is()

> `static` **is**(`value1`, `value2`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:332

Returns true if the values are the same value, false otherwise.

#### Parameters

##### value1

`any`

The first value.

##### value2

`any`

The second value.

#### Returns

`boolean`

#### Inherited from

`ResServerTools.is`

***

### isExtensible()

> `static` **isExtensible**(`o`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:258

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

#### Inherited from

`ResServerTools.isExtensible`

***

### isFrozen()

> `static` **isFrozen**(`o`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:252

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

#### Inherited from

`ResServerTools.isFrozen`

***

### isSealed()

> `static` **isSealed**(`o`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:246

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

#### Inherited from

`ResServerTools.isSealed`

***

### keys()

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:264

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

`object`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Inherited from

`ResServerTools.keys`

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Inherited from

`ResServerTools.keys`

***

### list()

> `static` **list**(): `Funcs`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:315

Returns the complete map of all registered functions.

#### Returns

`Funcs`

The map of `ToolFunc` instances.

#### Inherited from

`ResServerTools.list`

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:240

Prevents the addition of new properties to an object.

#### Type Parameters

##### T

`T`

#### Parameters

##### o

`T`

Object to make non-extensible.

#### Returns

`T`

#### Inherited from

`ResServerTools.preventExtensions`

***

### register()

#### Call Signature

> `static` **register**(`name`, `options`): `boolean` \| `ToolFunc`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:398

Registers a new tool function.

##### Parameters

###### name

`string`

The name of the function.

###### options

`FuncItem`

The function's configuration.

##### Returns

`boolean` \| `ToolFunc`

The new `ToolFunc` instance, or `false` if a function with that name already exists.

##### Inherited from

`ResServerTools.register`

#### Call Signature

> `static` **register**(`func`, `options`): `boolean` \| `ToolFunc`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:399

Registers a new tool function.

##### Parameters

###### func

`Function`

The function implementation.

###### options

`FuncItem`

The function's configuration.

##### Returns

`boolean` \| `ToolFunc`

The new `ToolFunc` instance, or `false` if a function with that name already exists.

##### Inherited from

`ResServerTools.register`

#### Call Signature

> `static` **register**(`name`, `options?`): `boolean` \| `ToolFunc`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:400

Registers a new tool function.

##### Parameters

###### name

The name of the function.

`string` | `Function` | `ToolFunc` | `FuncItem`

###### options?

`FuncItem`

The function's configuration.

##### Returns

`boolean` \| `ToolFunc`

The new `ToolFunc` instance, or `false` if a function with that name already exists.

##### Inherited from

`ResServerTools.register`

***

### run()

> `static` **run**(`name`, `params?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:341

Asynchronously executes a registered function by name with named parameters.

#### Parameters

##### name

`string`

The name of the function to run.

##### params?

`any`

The parameters object for the function.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the function's result.

#### Throws

If the function with the given name is not found.

#### Inherited from

`ResServerTools.run`

***

### runSync()

> `static` **runSync**(`name`, `params?`): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:349

Synchronously executes a registered function by name with named parameters.

#### Parameters

##### name

`string`

The name of the function to run.

##### params?

`any`

The parameters object for the function.

#### Returns

`any`

The result of the function's execution.

#### Throws

If the function with the given name is not found.

#### Inherited from

`ResServerTools.runSync`

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:364

Asynchronously executes a function using positional arguments.

#### Parameters

##### name

`string`

The name of the function to run.

##### params

...`any`[]

Positional arguments to pass to the function.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the function's result.

#### Throws

If the function with the given name is not found.

#### Inherited from

`ResServerTools.runWithPos`

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:372

Synchronously executes a function using positional arguments.

#### Parameters

##### name

`string`

The name of the function to run.

##### params

...`any`[]

Positional arguments to pass to the function.

#### Returns

`any`

The result of the function's execution.

#### Throws

If the function with the given name is not found.

#### Inherited from

`ResServerTools.runWithPosSync`

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:216

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type Parameters

##### T

`T`

#### Parameters

##### o

`T`

Object on which to lock the attributes.

#### Returns

`T`

#### Inherited from

`ResServerTools.seal`

***

### setApiRoot()

> `static` **setApiRoot**(`v`): `void`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1318

#### Parameters

##### v

`string`

#### Returns

`void`

#### Inherited from

`ResServerTools.setApiRoot`

***

### setPrototypeOf()

> `static` **setPrototypeOf**(`o`, `proto`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

##### o

`any`

The object to change its prototype.

##### proto

The value of the new prototype or null.

`null` | `object`

#### Returns

`any`

#### Inherited from

`ResServerTools.setPrototypeOf`

***

### toJSON()

> `static` **toJSON**(): `object`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:1328

Serializes all registered `ServerTools` instances into a JSON object.
This method is typically called by a transport's discovery endpoint.

It filters for tools that are instances of `ServerTools` or marked as `isApi`.
It omits the `func` body from the output unless `allowExportFunc` is true.

#### Returns

`object`

A map of serializable tool definitions.

#### Inherited from

`ResServerTools.toJSON`

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| `ToolFunc`

Defined in: @isdk/ai-tools/packages/ai-tool/dist/index-BLW3R7VS.d.ts:406

Unregisters a function by its name, also removing any associated aliases.

#### Parameters

##### name

`string`

The name of the function to unregister.

#### Returns

`undefined` \| `ToolFunc`

The unregistered `ToolFunc` instance, or `undefined` if it was not found.

#### Inherited from

`ResServerTools.unregister`

***

### values()

#### Call Signature

> `static` **values**\<`T`\>(`o`): `T`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

Returns an array of values of the enumerable own properties of an object

##### Type Parameters

###### T

`T`

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\[`s`: `string`\]: `T`; \} | `ArrayLike`\<`T`\>

##### Returns

`T`[]

##### Inherited from

`ResServerTools.values`

#### Call Signature

> `static` **values**(`o`): `any`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:30

Returns an array of values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]

##### Inherited from

`ResServerTools.values`
