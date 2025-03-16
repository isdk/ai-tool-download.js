[**@isdk/ai-tool-downloader**](../README.md)

***

[@isdk/ai-tool-downloader](../globals.md) / DownloadFunc

# Class: DownloadFunc

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:64](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L64)

Server-side download management utility that handles a file download queue and notifies progress via SSE events.
Requires persistent storage of the download queue.

## Extends

- `ResServerTools`

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### new DownloadFunc()

> **new DownloadFunc**(`name`, `options`?): [`DownloadFunc`](DownloadFunc.md)

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:844

#### Parameters

##### name

`string` | `Function` | `FuncItem`

##### options?

`any`

#### Returns

[`DownloadFunc`](DownloadFunc.md)

#### Inherited from

`ResServerTools.constructor`

## Properties

### $attributes

> **$attributes**: `Properties`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

#### Inherited from

`ResServerTools.$attributes`

***

### action

> **action**: `"get"` \| `"post"` \| `"put"` \| `"patch"` \| `"delete"` \| `"list"` \| `"res"`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:842

#### Inherited from

`ResServerTools.action`

***

### allowExportFunc?

> `optional` **allowExportFunc**: `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:686

#### Inherited from

`ResServerTools.allowExportFunc`

***

### apiRoot?

> `optional` **apiRoot**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:149

#### Inherited from

`ResServerTools.apiRoot`

***

### autoScaleDownloads

> **autoScaleDownloads**: `undefined` \| `boolean`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:90](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L90)

Determines whether to automatically scale downloads when the concurrency limit is reached.
If set to `true`, the system will automatically stop existing download tasks to start new ones when the concurrency limit is reached.
If set to `false`, an error message "Concurrency limit reached" will be reported instead.

***

### autostartQueue

> **autostartQueue**: `undefined` \| `boolean`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:76](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L76)

Indicates whether the download queue should automatically start processing the next task upon completion of the current one.

When set to `true`, the system will automatically initiate the download of the next item in the queue as soon as the current
download task finishes successfully. If set to `false`, manual intervention will be required to begin subsequent downloads.

***

### chunkSizeInBytes

> **chunkSizeInBytes**: `number` = `defaultChunkSizeInBytes`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:84](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L84)

***

### cleanTempFile

> **cleanTempFile**: `boolean` = `true`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:83](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L83)

Determines whether to clean up temporary files when a downloading or paused task is removed.
If set to `true`, temporary files will be deleted when a downloading or paused task is removed.
If set to `false`, temporary files will not be deleted.

***

### concurrency

> **concurrency**: `number` = `defaultConcurrency`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:69](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L69)

***

### constructor

> **constructor**: `Function`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`ResServerTools.constructor`

***

### defaultOptions

> **defaultOptions**: `object`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

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

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:92](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L92)

#### event

> **event**: `EventServer` = `eventServer`

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:151

#### Inherited from

`ResServerTools.fetchOptions`

***

### finished

> **finished**: `DownloadItems` = `{}`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:66](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L66)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:31

#### Inherited from

`ResServerTools.isApi`

***

### methods

> **methods**: `string`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:815

#### Inherited from

`ResServerTools.methods`

***

### name?

> `optional` **name**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:25

#### Inherited from

`ResServerTools.name`

***

### nextOrder

> **nextOrder**: `number` = `0`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:68](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L68)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

the property with the default prefix '$' will not be exported.

#### Inherited from

`ResServerTools.nonExported1stChar`

***

### params

> **params**: `FuncParams`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:843

#### Inherited from

`ResServerTools.params`

***

### queue

> **queue**: `DownloadItems` = `{}`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:65](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L65)

***

### result?

> `optional` **result**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:27

#### Inherited from

`ResServerTools.result`

***

### rootDir

> **rootDir**: `undefined` \| `string`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:67](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L67)

***

### scope?

> `optional` **scope**: `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:28

#### Inherited from

`ResServerTools.scope`

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:30

#### Parameters

##### this

`ToolFunc`

##### options?

`FuncItem`

#### Returns

`void`

#### Inherited from

`ResServerTools.setup`

***

### stream?

> `optional` **stream**: `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:32

#### Inherited from

`ResServerTools.stream`

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:29

#### Inherited from

`ResServerTools.tags`

***

### dataPath

> `static` **dataPath**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:53

#### Inherited from

`ResServerTools.dataPath`

***

### items

> `static` **items**: `Funcs`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:52

#### Inherited from

`ResServerTools.items`

***

### SpecialRpcMethodNames

> `static` **SpecialRpcMethodNames**: `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:841

#### Inherited from

`ResServerTools.SpecialRpcMethodNames`

## Accessors

### SpecialRpcMethodNames

#### Get Signature

> **get** **SpecialRpcMethodNames**(): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:820

##### Returns

`any`

#### Inherited from

`ResServerTools.SpecialRpcMethodNames`

***

### apiRoot

#### Get Signature

> **get** `static` **apiRoot**(): `undefined` \| `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:693

##### Returns

`undefined` \| `string`

#### Inherited from

`ResServerTools.apiRoot`

## Methods

### \_start()

> **\_start**(`options`): `Promise`\<`void`\>

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:239](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L239)

#### Parameters

##### options

`string` | `DownloadFuncParams`

#### Returns

`Promise`\<`void`\>

***

### $clean()

> **$clean**(`options`): `Promise`\<`any`[]\>

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:324](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L324)

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

> **$config**(`options`?): `object`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:354](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L354)

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

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:289](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L289)

#### Parameters

##### options

`DownloadFuncParams`

#### Returns

`Promise`\<`undefined` \| \{ `id`: `string`; \}\>

***

### $stop()

> **$stop**(`options`): `Promise`\<\{ `id`: `string`; `status`: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md); `url`: `string`; \} \| \{ `id`: `undefined`; `status`: `string`; `url`: `undefined`; \}\>

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:304](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L304)

#### Parameters

##### options

`string` | `DownloadFuncParams`

#### Returns

`Promise`\<\{ `id`: `string`; `status`: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md); `url`: `string`; \} \| \{ `id`: `undefined`; `status`: `string`; `url`: `undefined`; \}\>

***

### add()

> **add**(`options`): `string`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:220](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L220)

#### Parameters

##### options

`BaseFileDownloadOptions`

#### Returns

`string`

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:72

#### Parameters

##### params

`any`[]

#### Returns

`any`[]

#### Inherited from

`ResServerTools.arr2ObjParams`

***

### assign()

> **assign**(`src`, `options`?): `this`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:106

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

> **assignProperty**(`src`, `name`, `value`, `attrs`?, `options`?): `void`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:117

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

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`?, `options`?): `void`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:131

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

> **assignTo**(`dest`?, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:191

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

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:823

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

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:846

#### Parameters

##### params

`RpcMethodsServerFuncParams`

#### Returns

`RpcMethodsServerFuncParams`

#### Inherited from

`ResServerTools.castParams`

***

### clone()

> **clone**(`options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:155

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

> **cloneTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:148

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

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:89

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

> **delete**(`options`): `Promise`\<`undefined` \| \{ `filepath`: `undefined` \| `string`; `id`: `string`; `status`: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md); `url`: `string`; \}\>

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:458](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L458)

#### Parameters

##### options

`DownloadFuncParams`

#### Returns

`Promise`\<`undefined` \| \{ `filepath`: `undefined` \| `string`; `id`: `string`; `status`: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md); `url`: `string`; \}\>

#### Overrides

`ResServerTools.delete`

***

### exportQueue()

> **exportQueue**(): `DownloadOptionsItems`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:114](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L114)

#### Returns

`DownloadOptionsItems`

***

### exportTo()

> **exportTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:173

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

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:826

#### Parameters

##### params

`RpcMethodsServerFuncParams`

#### Returns

`any`

#### Inherited from

`ResServerTools.func`

***

### get()

> **get**(`options`): `any`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:421](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L421)

#### Parameters

##### options

`DownloadFuncParams`

#### Returns

`any`

#### Overrides

`ResServerTools.get`

***

### getDownloadsInQueue()

> **getDownloadsInQueue**(`status`?, `isNot`?): [`FileDownload`](FileDownload.md)[]

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:144](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L144)

#### Parameters

##### status?

[`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

##### isNot?

`boolean`

#### Returns

[`FileDownload`](FileDownload.md)[]

***

### getFunc()

> **getFunc**(`name`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:78

#### Parameters

##### name?

`string`

#### Returns

`any`

#### Inherited from

`ResServerTools.getFunc`

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:83

#### Parameters

##### name?

`string`

#### Returns

`any`

#### Inherited from

`ResServerTools.getFuncWithPos`

***

### getId()

> **getId**(`options`): `undefined` \| `string`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:125](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L125)

#### Parameters

##### options

`string` | `DownloadFuncParams`

#### Returns

`undefined` \| `string`

***

### getItem()

> **getItem**(`options`): `undefined` \| [`FileDownload`](FileDownload.md)

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:281](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L281)

#### Parameters

##### options

`string` | `DownloadFuncParams`

#### Returns

`undefined` \| [`FileDownload`](FileDownload.md)

***

### getMethodFromParams()

> **getMethodFromParams**(`params`): `undefined` \| `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:845

#### Parameters

##### params

`ResServerFuncParams`

#### Returns

`undefined` \| `string`

#### Inherited from

`ResServerTools.getMethodFromParams`

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Inherited from

`ResServerTools.getProperties`

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:84

#### Parameters

##### feature

`AsyncFeatureBits`

#### Returns

`boolean`

#### Inherited from

`ResServerTools.hasAsyncFeature`

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:140

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

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:105](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L105)

#### Parameters

##### queue

`DownloadOptionsItems`

#### Returns

`void`

***

### initialize()

> **initialize**(`src`?): `this`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:139

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

> **initRpcMethods**(`methods`?): `void`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:821

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:146

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

> **isSame**(`src`, `options`?): `boolean`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:200

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

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:85

#### Parameters

##### params

`any`

#### Returns

`undefined` \| `boolean`

#### Inherited from

`ResServerTools.isStream`

***

### list()

> **list**(`options`): `string`[]

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:439](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L439)

#### Parameters

##### options

`DownloadFuncParams`

#### Returns

`string`[]

#### Overrides

`ResServerTools.list`

***

### mergeTo()

> **mergeTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:164

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

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:185](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L185)

#### Parameters

##### options

`BaseFileDownloadOptions`

##### id

`string`

#### Returns

[`FileDownload`](FileDownload.md)

***

### obj2ArrParams()

> **obj2ArrParams**(`params`?): `any`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:73

#### Parameters

##### params?

`any`

#### Returns

`any`[]

#### Inherited from

`ResServerTools.obj2ArrParams`

***

### onCompleted()

> **onCompleted**(`id`): `void`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:134](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L134)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### post()

> **post**(`options`): `Promise`\<`undefined` \| \{ `id`: `string`; \}\>

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:385](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L385)

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:152

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

> **put**(`options`): `undefined` \| \{ `id`: `string`; \}

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:401](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L401)

#### Parameters

##### options

`DownloadFuncParams`

#### Returns

`undefined` \| \{ `id`: `string`; \}

#### Overrides

`ResServerTools.put`

***

### register()

> **register**(): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:70

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

`ResServerTools.register`

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:75

#### Parameters

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`ResServerTools.run`

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:76

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`ResServerTools.runAs`

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:77

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

#### Inherited from

`ResServerTools.runAsSync`

***

### runSync()

> **runSync**(`params`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:74

#### Parameters

##### params?

`any`

#### Returns

`any`

#### Inherited from

`ResServerTools.runSync`

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:81

#### Parameters

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

`ResServerTools.runWithPos`

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:82

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

`ResServerTools.runWithPosAs`

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:80

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

`ResServerTools.runWithPosAsSync`

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:79

#### Parameters

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

`ResServerTools.runWithPosSync`

***

### start()

> **start**(`options`): `Promise`\<`void`\>

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:255](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L255)

#### Parameters

##### options

`string` | `DownloadFuncParams`

#### Returns

`Promise`\<`void`\>

***

### startAll()

> **startAll**(): `void`

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:154](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L154)

#### Returns

`void`

***

### stopAll()

> **stopAll**(): `Promise`\<`void`\>

Defined in: [packages/ai-tool-downloader/src/ai-tool-download.ts:175](https://github.com/isdk/ai-tool-download.js/blob/5c633badb58d2b1edcb590d9347934219b941226/src/ai-tool-download.ts#L175)

#### Returns

`Promise`\<`void`\>

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

#### Returns

`any`

#### Inherited from

`ResServerTools.toJSON`

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

`ResServerTools.toLocaleString`

***

### toObject()

> **toObject**(`options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:181

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

`ResServerTools.toString`

***

### unregister()

> **unregister**(): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:71

#### Returns

`any`

#### Inherited from

`ResServerTools.unregister`

***

### valueOf()

> **valueOf**(): `Object`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

`ResServerTools.valueOf`

***

### assign()

#### Call Signature

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

• **W**

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:313

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:188

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:195

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

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:11

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:203

Adds a property to an object, or modifies attributes of an existing property.

#### Type Parameters

• **T**

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

Returns an array of key/values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\} | `ArrayLike`\<`T`\>

##### Returns

\[`string`, `T`\][]

##### Inherited from

`ResServerTools.entries`

#### Call Signature

> `static` **entries**(`o`): \[`string`, `any`\][]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:222

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `Function`

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:228

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `object`

• **U** *extends* `string` \| `number` \| `bigint` \| `boolean` \| `symbol`

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:234

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T**

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

Returns an object created by key-value entries for properties and methods

##### Type Parameters

• **T** = `any`

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

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

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:54

#### Parameters

##### name

`string`

#### Returns

`ToolFunc`

#### Inherited from

`ResServerTools.get`

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): `ToolFunc`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:57

#### Parameters

##### tagName

`string`

#### Returns

`ToolFunc`[]

#### Inherited from

`ResServerTools.getAllByTag`

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:56

#### Parameters

##### tagName

`string`

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

`ResServerTools.getByTag`

***

### getFunc()

> `static` **getFunc**(`name`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:61

#### Parameters

##### name

`string`

#### Returns

`any`

#### Inherited from

`ResServerTools.getFunc`

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:64

#### Parameters

##### name

`string`

#### Returns

`any`

#### Inherited from

`ResServerTools.getFuncWithPos`

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:175

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

Returns an object containing all own property descriptors of an object

#### Type Parameters

• **T**

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:182

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

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

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:10

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

`ResServerTools.getProperties`

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:167

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

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:58

#### Parameters

##### feature

`AsyncFeatureBits`

#### Returns

`boolean`

#### Inherited from

`ResServerTools.hasAsyncFeature`

***

### is()

> `static` **is**(`value1`, `value2`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:332

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:258

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:252

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:246

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:264

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

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

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:55

#### Returns

`Funcs`

#### Inherited from

`ResServerTools.list`

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:240

Prevents the addition of new properties to an object.

#### Type Parameters

• **T**

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

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:65

##### Parameters

###### name

`string`

###### options

`FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Inherited from

`ResServerTools.register`

#### Call Signature

> `static` **register**(`func`, `options`): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:66

##### Parameters

###### func

`Function`

###### options

`FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Inherited from

`ResServerTools.register`

#### Call Signature

> `static` **register**(`name`, `options`?): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:67

##### Parameters

###### name

`string` | `Function` | `ToolFunc` | `FuncItem`

###### options?

`FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Inherited from

`ResServerTools.register`

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:59

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`ResServerTools.run`

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:60

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

#### Inherited from

`ResServerTools.runSync`

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:62

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

`ResServerTools.runWithPos`

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:63

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

`ResServerTools.runWithPosSync`

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:216

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type Parameters

• **T**

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

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:694

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

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

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:695

#### Returns

`object`

#### Inherited from

`ResServerTools.toJSON`

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:68

#### Parameters

##### name

`string`

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

`ResServerTools.unregister`

***

### values()

#### Call Signature

> `static` **values**\<`T`\>(`o`): `T`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

Returns an array of values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\} | `ArrayLike`\<`T`\>

##### Returns

`T`[]

##### Inherited from

`ResServerTools.values`

#### Call Signature

> `static` **values**(`o`): `any`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:30

Returns an array of values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]

##### Inherited from

`ResServerTools.values`
