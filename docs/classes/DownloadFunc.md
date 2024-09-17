[**@isdk/ai-tool-downloader**](../README.md) • **Docs**

***

[@isdk/ai-tool-downloader](../globals.md) / DownloadFunc

# Class: DownloadFunc

Server-side download management utility that handles a file download queue and notifies progress via SSE events.
Requires persistent storage of the download queue.

## Extends

- `ResServerTools`

## Constructors

### new DownloadFunc()

> **new DownloadFunc**(`name`, `options`?): [`DownloadFunc`](DownloadFunc.md)

#### Parameters

• **name**: `string` \| `Function` \| `FuncItem`

• **options?**: `any`

#### Returns

[`DownloadFunc`](DownloadFunc.md)

#### Inherited from

`ResServerTools.constructor`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:433

## Properties

### $attributes

> **$attributes**: `Properties`

#### Inherited from

`ResServerTools.$attributes`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

***

### action

> **action**: `"get"` \| `"post"` \| `"put"` \| `"patch"` \| `"delete"` \| `"list"` \| `"res"`

#### Inherited from

`ResServerTools.action`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:431

***

### allowExportFunc?

> `optional` **allowExportFunc**: `boolean`

#### Inherited from

`ResServerTools.allowExportFunc`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:276

***

### apiRoot?

> `optional` **apiRoot**: `string`

#### Inherited from

`ResServerTools.apiRoot`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:160

***

### autoScaleDownloads

> **autoScaleDownloads**: `undefined` \| `boolean`

Determines whether to automatically scale downloads when the concurrency limit is reached.
If set to `true`, the system will automatically stop existing download tasks to start new ones when the concurrency limit is reached.
If set to `false`, an error message "Concurrency limit reached" will be reported instead.

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:90](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L90)

***

### autostartQueue

> **autostartQueue**: `undefined` \| `boolean`

Indicates whether the download queue should automatically start processing the next task upon completion of the current one.

When set to `true`, the system will automatically initiate the download of the next item in the queue as soon as the current
download task finishes successfully. If set to `false`, manual intervention will be required to begin subsequent downloads.

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:76](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L76)

***

### chunkSizeInBytes

> **chunkSizeInBytes**: `number` = `defaultChunkSizeInBytes`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:84](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L84)

***

### cleanTempFile

> **cleanTempFile**: `boolean` = `true`

Determines whether to clean up temporary files when a downloading or paused task is removed.
If set to `true`, temporary files will be deleted when a downloading or paused task is removed.
If set to `false`, temporary files will not be deleted.

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:83](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L83)

***

### concurrency

> **concurrency**: `number` = `defaultConcurrency`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:69](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L69)

***

### constructor

> **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`ResServerTools.constructor`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:125

***

### defaultOptions

> **defaultOptions**: `object`

The default options for export and assign

#### assign?

> `optional` **assign**: `IMergeOptions`

#### export?

> `optional` **export**: `IMergeOptions`

#### Inherited from

`ResServerTools.defaultOptions`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

***

### depends

> **depends**: `object`

#### event

> **event**: `EventServer` = `eventServer`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:92](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L92)

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

#### Inherited from

`ResServerTools.fetchOptions`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:162

***

### finished

> **finished**: `DownloadItems` = `{}`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:66](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L66)

***

### isApi?

> `optional` **isApi**: `boolean`

#### Inherited from

`ResServerTools.isApi`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:42

***

### methods

> **methods**: `string`[]

#### Inherited from

`ResServerTools.methods`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:404

***

### name?

> `optional` **name**: `string`

#### Inherited from

`ResServerTools.name`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:36

***

### nextOrder

> **nextOrder**: `number` = `0`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:68](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L68)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

`ResServerTools.nonExported1stChar`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

***

### params

> **params**: `FuncParams`

#### Inherited from

`ResServerTools.params`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:432

***

### queue

> **queue**: `DownloadItems` = `{}`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:65](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L65)

***

### result?

> `optional` **result**: `string`

#### Inherited from

`ResServerTools.result`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:38

***

### rootDir

> **rootDir**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:67](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L67)

***

### scope?

> `optional` **scope**: `any`

#### Inherited from

`ResServerTools.scope`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:39

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

#### Parameters

• **this**: `ToolFunc`

• **options?**: `FuncItem`

#### Returns

`void`

#### Inherited from

`ResServerTools.setup`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:41

***

### stream?

> `optional` **stream**: `boolean`

#### Inherited from

`ResServerTools.stream`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:43

***

### tags?

> `optional` **tags**: `string` \| `string`[]

#### Inherited from

`ResServerTools.tags`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:40

***

### dataPath

> `static` **dataPath**: `string`

#### Inherited from

`ResServerTools.dataPath`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:64

***

### items

> `static` **items**: `Funcs`

#### Inherited from

`ResServerTools.items`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:63

***

### SpecialRpcMethodNames

> `static` **SpecialRpcMethodNames**: `any`

#### Inherited from

`ResServerTools.SpecialRpcMethodNames`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:430

## Accessors

### SpecialRpcMethodNames

> `get` **SpecialRpcMethodNames**(): `any`

#### Returns

`any`

#### Inherited from

`ResServerTools.SpecialRpcMethodNames`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:409

***

### apiRoot

> `get` `static` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

`ResServerTools.apiRoot`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:283

## Methods

### \_start()

> **\_start**(`options`): `Promise`\<`void`\>

#### Parameters

• **options**: `string` \| `DownloadFuncParams`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:239](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L239)

***

### $clean()

> **$clean**(`options`): `Promise`\<`any`[]\>

#### Parameters

• **options**

• **options.completed?**: `boolean`

• **options.downloading?**: `boolean`

• **options.paused?**: `boolean`

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:324](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L324)

***

### $config()

> **$config**(`options`?): `object`

#### Parameters

• **options?**: [`DownloadConfiguration`](../interfaces/DownloadConfiguration.md)

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

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:354](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L354)

***

### $start()

> **$start**(`options`): `Promise`\<`undefined` \| `object`\>

#### Parameters

• **options**: `DownloadFuncParams`

#### Returns

`Promise`\<`undefined` \| `object`\>

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:289](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L289)

***

### $stop()

> **$stop**(`options`): `Promise`\<`object` \| `object`\>

#### Parameters

• **options**: `string` \| `DownloadFuncParams`

#### Returns

`Promise`\<`object` \| `object`\>

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:304](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L304)

***

### add()

> **add**(`options`): `string`

#### Parameters

• **options**: `BaseFileDownloadOptions`

#### Returns

`string`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:220](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L220)

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

#### Parameters

• **params**: `any`[]

#### Returns

`any`[]

#### Inherited from

`ResServerTools.arr2ObjParams`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:83

***

### assign()

> **assign**(`src`, `options`?): `this`

Assign the values from the src object.

#### Parameters

• **src**: `any`

the source object

• **options?**: `IMergeOptions`

#### Returns

`this`

this object

#### Inherited from

`ResServerTools.assign`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:106

***

### assignProperty()

> **assignProperty**(`src`, `name`, `value`, `attrs`?, `options`?): `void`

Assign a property of src to this object.

#### Parameters

• **src**: `any`

the src object

• **name**: `string`

the property name to assign

• **value**: `any`

the property value to assign

• **attrs?**: `any`

the attributes object

• **options?**: `IMergeOptions`

#### Returns

`void`

#### Inherited from

`ResServerTools.assignProperty`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:117

***

### assignPropertyTo()

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`?, `options`?): `void`

Assign the property value from the src to destination object.

#### Parameters

• **dest**: `any`

The destination object

• **src**: `any`

The src object

• **name**: `string`

The property name

• **value**: `any`

The property value

• **attrs?**: `any`

The attributes object of the property

• **options?**: `IMergeOptions`

#### Returns

`void`

#### Inherited from

`ResServerTools.assignPropertyTo`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:131

***

### assignTo()

> **assignTo**(`dest`?, `options`?): `any`

Assign this attributes to the dest object

#### Parameters

• **dest?**: `any`

the destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the dest object

#### Inherited from

`ResServerTools.assignTo`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:191

***

### cast()

> **cast**(`key`, `value`): `any`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Inherited from

`ResServerTools.cast`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:412

***

### castParams()

> **castParams**(`params`): `RpcMethodsServerFuncParams`

#### Parameters

• **params**: `RpcMethodsServerFuncParams`

#### Returns

`RpcMethodsServerFuncParams`

#### Inherited from

`ResServerTools.castParams`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:435

***

### clone()

> **clone**(`options`?): `any`

Create a new object with the same values of attributes.

#### Parameters

• **options?**: `IMergeOptions`

#### Returns

`any`

the new object

#### Inherited from

`ResServerTools.clone`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:155

***

### cloneTo()

> **cloneTo**(`dest`, `options`?): `any`

Create and assign the values to the destination object.

#### Parameters

• **dest**: `any`

the destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the new dest object

#### Inherited from

`ResServerTools.cloneTo`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:148

***

### defineProperties()

> `abstract` **defineProperties**(`aProperties`): `any`

Define the attributes of this object.

#### Parameters

• **aProperties**: `SimplePropDescriptors`

the defined attributes of the object

#### Returns

`any`

#### Inherited from

`ResServerTools.defineProperties`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:89

***

### delete()

> **delete**(`options`): `Promise`\<`undefined` \| `object`\>

#### Parameters

• **options**: `DownloadFuncParams`

#### Returns

`Promise`\<`undefined` \| `object`\>

#### Overrides

`ResServerTools.delete`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:458](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L458)

***

### exportQueue()

> **exportQueue**(): `DownloadOptionsItems`

#### Returns

`DownloadOptionsItems`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:114](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L114)

***

### exportTo()

> **exportTo**(`dest`, `options`?): `any`

Export attributes to the dest json object.

#### Parameters

• **dest**: `any`

the destination object

• **options?**: `IExportOptions`

#### Returns

`any`

the dest object.

#### Inherited from

`ResServerTools.exportTo`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:173

***

### func()

> **func**(`params`): `any`

#### Parameters

• **params**: `RpcMethodsServerFuncParams`

#### Returns

`any`

#### Inherited from

`ResServerTools.func`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:415

***

### get()

> **get**(`options`): `any`

#### Parameters

• **options**: `DownloadFuncParams`

#### Returns

`any`

#### Overrides

`ResServerTools.get`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:421](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L421)

***

### getDownloadsInQueue()

> **getDownloadsInQueue**(`status`?, `isNot`?): [`FileDownload`](FileDownload.md)[]

#### Parameters

• **status?**: [`FileDownloadStatus`](../type-aliases/FileDownloadStatus.md)

• **isNot?**: `boolean`

#### Returns

[`FileDownload`](FileDownload.md)[]

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:144](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L144)

***

### getFunc()

> **getFunc**(`name`?): `any`

#### Parameters

• **name?**: `string`

#### Returns

`any`

#### Inherited from

`ResServerTools.getFunc`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:89

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

#### Parameters

• **name?**: `string`

#### Returns

`any`

#### Inherited from

`ResServerTools.getFuncWithPos`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:94

***

### getId()

> **getId**(`options`): `undefined` \| `string`

#### Parameters

• **options**: `string` \| `DownloadFuncParams`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:125](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L125)

***

### getItem()

> **getItem**(`options`): `undefined` \| [`FileDownload`](FileDownload.md)

#### Parameters

• **options**: `string` \| `DownloadFuncParams`

#### Returns

`undefined` \| [`FileDownload`](FileDownload.md)

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:281](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L281)

***

### getMethodFromParams()

> **getMethodFromParams**(`params`): `undefined` \| `string`

#### Parameters

• **params**: `ResServerFuncParams`

#### Returns

`undefined` \| `string`

#### Inherited from

`ResServerTools.getMethodFromParams`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:434

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Inherited from

`ResServerTools.getProperties`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

• **feature**: `AsyncFeatureBits`

#### Returns

`boolean`

#### Inherited from

`ResServerTools.hasAsyncFeature`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:95

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

• **v**: `PropertyKey`

A property name.

#### Returns

`boolean`

#### Inherited from

`ResServerTools.hasOwnProperty`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:140

***

### importQueue()

> **importQueue**(`queue`): `void`

#### Parameters

• **queue**: `DownloadOptionsItems`

#### Returns

`void`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:105](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L105)

***

### initialize()

> **initialize**(`src`?): `this`

Initialize object and assign attribute values from src if src exists.

#### Parameters

• **src?**: `any`

#### Returns

`this`

this object.

#### Inherited from

`ResServerTools.initialize`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:139

***

### initRpcMethods()

> **initRpcMethods**(`methods`?): `void`

#### Parameters

• **methods?**: `string`[]

#### Returns

`void`

#### Inherited from

`ResServerTools.initRpcMethods`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:410

***

### isPrototypeOf()

> **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

• **v**: `Object`

Another object whose prototype chain is to be checked.

#### Returns

`boolean`

#### Inherited from

`ResServerTools.isPrototypeOf`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:146

***

### isSame()

> **isSame**(`src`, `options`?): `boolean`

Check the src object whether “equals” this object.

#### Parameters

• **src**: `any`

The source object

• **options?**: `IMergeOptions`

#### Returns

`boolean`

#### Inherited from

`ResServerTools.isSame`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:200

***

### isStream()

> **isStream**(`params`): `undefined` \| `boolean`

#### Parameters

• **params**: `any`

#### Returns

`undefined` \| `boolean`

#### Inherited from

`ResServerTools.isStream`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:96

***

### list()

> **list**(`options`): `string`[]

#### Parameters

• **options**: `DownloadFuncParams`

#### Returns

`string`[]

#### Overrides

`ResServerTools.list`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:439](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L439)

***

### mergeTo()

> **mergeTo**(`dest`, `options`?): `any`

Merge this attributes to dest object.

#### Parameters

• **dest**: `any`

The destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the dest object.

#### Inherited from

`ResServerTools.mergeTo`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:164

***

### newDownload()

> **newDownload**(`options`, `id`): [`FileDownload`](FileDownload.md)

#### Parameters

• **options**: `BaseFileDownloadOptions`

• **id**: `string`

#### Returns

[`FileDownload`](FileDownload.md)

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:185](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L185)

***

### obj2ArrParams()

> **obj2ArrParams**(`params`?): `any`[]

#### Parameters

• **params?**: `any`

#### Returns

`any`[]

#### Inherited from

`ResServerTools.obj2ArrParams`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:84

***

### onCompleted()

> **onCompleted**(`id`): `void`

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:134](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L134)

***

### post()

> **post**(`options`): `Promise`\<`undefined` \| `object`\>

#### Parameters

• **options**: `DownloadFuncParams`

#### Returns

`Promise`\<`undefined` \| `object`\>

#### Overrides

`ResServerTools.post`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:385](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L385)

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

• **v**: `PropertyKey`

A property name.

#### Returns

`boolean`

#### Inherited from

`ResServerTools.propertyIsEnumerable`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:152

***

### put()

> **put**(`options`): `undefined` \| `object`

#### Parameters

• **options**: `DownloadFuncParams`

#### Returns

`undefined` \| `object`

#### Overrides

`ResServerTools.put`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:401](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L401)

***

### register()

> **register**(): `boolean` \| `ToolFunc`

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

`ResServerTools.register`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:81

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

#### Parameters

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`ResServerTools.run`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:86

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`ResServerTools.runAs`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:87

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`any`

#### Inherited from

`ResServerTools.runAsSync`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:88

***

### runSync()

> **runSync**(`params`?): `any`

#### Parameters

• **params?**: `any`

#### Returns

`any`

#### Inherited from

`ResServerTools.runSync`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:85

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

#### Parameters

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

`ResServerTools.runWithPos`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:92

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

`ResServerTools.runWithPosAs`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:93

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`any`

#### Inherited from

`ResServerTools.runWithPosAsSync`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:91

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

#### Parameters

• ...**params**: `any`[]

#### Returns

`any`

#### Inherited from

`ResServerTools.runWithPosSync`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:90

***

### start()

> **start**(`options`): `Promise`\<`void`\>

#### Parameters

• **options**: `string` \| `DownloadFuncParams`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:255](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L255)

***

### startAll()

> **startAll**(): `void`

#### Returns

`void`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:154](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L154)

***

### stopAll()

> **stopAll**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:175](https://github.com/isdk/ai-tool-download.js/blob/609380d16e83ac2f77ffb9ec6a0d5aa57425a31a/src/ai-tool-download.ts#L175)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

`ResServerTools.toJSON`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

***

### toLocaleString()

> **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

`ResServerTools.toLocaleString`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:131

***

### toObject()

> **toObject**(`options`?): `any`

Convert the attributes to the json object

#### Parameters

• **options?**: `any`

#### Returns

`any`

the json object.

#### Inherited from

`ResServerTools.toObject`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:181

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

`ResServerTools.toString`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:128

***

### unregister()

> **unregister**(): `any`

#### Returns

`any`

#### Inherited from

`ResServerTools.unregister`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:82

***

### valueOf()

> **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

`ResServerTools.valueOf`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:134

***

### assign()

#### assign(target, source)

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source**: `U`

The source object from which to copy properties.

##### Returns

`T` & `U`

##### Inherited from

`ResServerTools.assign`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

#### assign(target, source1, source2)

> `static` **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source1**: `U`

The first source object from which to copy properties.

• **source2**: `V`

The second source object from which to copy properties.

##### Returns

`T` & `U` & `V`

##### Inherited from

`ResServerTools.assign`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

#### assign(target, source1, source2, source3)

> `static` **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

• **W**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source1**: `U`

The first source object from which to copy properties.

• **source2**: `V`

The second source object from which to copy properties.

• **source3**: `W`

The third source object from which to copy properties.

##### Returns

`T` & `U` & `V` & `W`

##### Inherited from

`ResServerTools.assign`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

#### assign(target, sources)

> `static` **assign**(`target`, ...`sources`): `any`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Parameters

• **target**: `object`

The target object to copy to.

• ...**sources**: `any`[]

One or more source objects from which to copy properties

##### Returns

`any`

##### Inherited from

`ResServerTools.assign`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:313

***

### create()

#### create(o)

> `static` **create**(`o`): `any`

Creates an object that has the specified prototype or that has null prototype.

##### Parameters

• **o**: `null` \| `object`

Object to use as a prototype. May be null.

##### Returns

`any`

##### Inherited from

`ResServerTools.create`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:188

#### create(o, properties)

> `static` **create**(`o`, `properties`): `any`

Creates an object that has the specified prototype, and that optionally contains specified properties.

##### Parameters

• **o**: `null` \| `object`

Object to use as a prototype. May be null

• **properties**: `PropertyDescriptorMap` & `ThisType`\<`any`\>

JavaScript object that contains one or more property descriptors.

##### Returns

`any`

##### Inherited from

`ResServerTools.create`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:195

***

### defineProperties()

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate`?): `any`

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Parameters

• **aTarget**: `any`

• **aProperties**: `PropDescriptors`

• **recreate?**: `boolean`

#### Returns

`any`

#### Inherited from

`ResServerTools.defineProperties`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:11

***

### defineProperty()

> `static` **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Adds a property to an object, or modifies attributes of an existing property.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.

• **p**: `PropertyKey`

The property name.

• **attributes**: `PropertyDescriptor` & `ThisType`\<`any`\>

Descriptor for the property. It can be for a data property or an accessor property.

#### Returns

`T`

#### Inherited from

`ResServerTools.defineProperty`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:203

***

### entries()

#### entries(o)

> `static` **entries**\<`T`\>(`o`): [`string`, `T`][]

Returns an array of key/values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

• **o**: `object` \| `ArrayLike`\<`T`\>

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

[`string`, `T`][]

##### Inherited from

`ResServerTools.entries`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

#### entries(o)

> `static` **entries**(`o`): [`string`, `any`][]

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

[`string`, `any`][]

##### Inherited from

`ResServerTools.entries`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

***

### freeze()

#### freeze(f)

> `static` **freeze**\<`T`\>(`f`): `T`

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `Function`

##### Parameters

• **f**: `T`

Object on which to lock the attributes.

##### Returns

`T`

##### Inherited from

`ResServerTools.freeze`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:222

#### freeze(o)

> `static` **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `object`

• **U** *extends* `string` \| `number` \| `bigint` \| `boolean` \| `symbol`

##### Parameters

• **o**: `T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Inherited from

`ResServerTools.freeze`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:228

#### freeze(o)

> `static` **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T**

##### Parameters

• **o**: `T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Inherited from

`ResServerTools.freeze`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:234

***

### fromEntries()

#### fromEntries(entries)

> `static` **fromEntries**\<`T`\>(`entries`): `object`

Returns an object created by key-value entries for properties and methods

##### Type Parameters

• **T** = `any`

##### Parameters

• **entries**: `Iterable`\<readonly [`PropertyKey`, `T`], `any`, `any`\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`object`

##### Inherited from

`ResServerTools.fromEntries`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

#### fromEntries(entries)

> `static` **fromEntries**(`entries`): `any`

Returns an object created by key-value entries for properties and methods

##### Parameters

• **entries**: `Iterable`\<readonly `any`[], `any`, `any`\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`any`

##### Inherited from

`ResServerTools.fromEntries`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

***

### get()

> `static` **get**(`name`): `ToolFunc`

#### Parameters

• **name**: `string`

#### Returns

`ToolFunc`

#### Inherited from

`ResServerTools.get`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:65

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): `ToolFunc`[]

#### Parameters

• **tagName**: `string`

#### Returns

`ToolFunc`[]

#### Inherited from

`ResServerTools.getAllByTag`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:68

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| `ToolFunc`

#### Parameters

• **tagName**: `string`

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

`ResServerTools.getByTag`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:67

***

### getFunc()

> `static` **getFunc**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Inherited from

`ResServerTools.getFunc`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:72

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Inherited from

`ResServerTools.getFuncWithPos`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:75

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

• **o**: `any`

Object that contains the property.

• **p**: `PropertyKey`

Name of the property.

#### Returns

`undefined` \| `PropertyDescriptor`

#### Inherited from

`ResServerTools.getOwnPropertyDescriptor`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:175

***

### getOwnPropertyDescriptors()

> `static` **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

Returns an object containing all own property descriptors of an object

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

#### Returns

\{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

#### Inherited from

`ResServerTools.getOwnPropertyDescriptors`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

***

### getOwnPropertyNames()

> `static` **getOwnPropertyNames**(`o`): `string`[]

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

• **o**: `any`

Object that contains the own properties.

#### Returns

`string`[]

#### Inherited from

`ResServerTools.getOwnPropertyNames`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:182

***

### getOwnPropertySymbols()

> `static` **getOwnPropertySymbols**(`o`): `symbol`[]

Returns an array of all symbol properties found directly on object o.

#### Parameters

• **o**: `any`

Object to retrieve the symbols from.

#### Returns

`symbol`[]

#### Inherited from

`ResServerTools.getOwnPropertySymbols`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

`ResServerTools.getProperties`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:10

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Returns the prototype of an object.

#### Parameters

• **o**: `any`

The object that references the prototype.

#### Returns

`any`

#### Inherited from

`ResServerTools.getPrototypeOf`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:167

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

• **feature**: `AsyncFeatureBits`

#### Returns

`boolean`

#### Inherited from

`ResServerTools.hasAsyncFeature`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:69

***

### is()

> `static` **is**(`value1`, `value2`): `boolean`

Returns true if the values are the same value, false otherwise.

#### Parameters

• **value1**: `any`

The first value.

• **value2**: `any`

The second value.

#### Returns

`boolean`

#### Inherited from

`ResServerTools.is`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:332

***

### isExtensible()

> `static` **isExtensible**(`o`): `boolean`

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Inherited from

`ResServerTools.isExtensible`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:258

***

### isFrozen()

> `static` **isFrozen**(`o`): `boolean`

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Inherited from

`ResServerTools.isFrozen`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:252

***

### isSealed()

> `static` **isSealed**(`o`): `boolean`

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Inherited from

`ResServerTools.isSealed`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:246

***

### keys()

#### keys(o)

> `static` **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

• **o**: `object`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Inherited from

`ResServerTools.keys`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:264

#### keys(o)

> `static` **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Inherited from

`ResServerTools.keys`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

***

### list()

> `static` **list**(): `Funcs`

#### Returns

`Funcs`

#### Inherited from

`ResServerTools.list`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:66

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Prevents the addition of new properties to an object.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object to make non-extensible.

#### Returns

`T`

#### Inherited from

`ResServerTools.preventExtensions`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:240

***

### register()

#### register(name, options)

> `static` **register**(`name`, `options`): `boolean` \| `ToolFunc`

##### Parameters

• **name**: `string`

• **options**: `FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Inherited from

`ResServerTools.register`

##### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:76

#### register(func, options)

> `static` **register**(`func`, `options`): `boolean` \| `ToolFunc`

##### Parameters

• **func**: `Function`

• **options**: `FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Inherited from

`ResServerTools.register`

##### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:77

#### register(name, options)

> `static` **register**(`name`, `options`?): `boolean` \| `ToolFunc`

##### Parameters

• **name**: `string` \| `Function` \| `ToolFunc` \| `FuncItem`

• **options?**: `FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Inherited from

`ResServerTools.register`

##### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:78

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`ResServerTools.run`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:70

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`any`

#### Inherited from

`ResServerTools.runSync`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:71

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

`ResServerTools.runWithPos`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:73

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`any`

#### Inherited from

`ResServerTools.runWithPosSync`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:74

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object on which to lock the attributes.

#### Returns

`T`

#### Inherited from

`ResServerTools.seal`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:216

***

### setApiRoot()

> `static` **setApiRoot**(`v`): `void`

#### Parameters

• **v**: `string`

#### Returns

`void`

#### Inherited from

`ResServerTools.setApiRoot`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:284

***

### setPrototypeOf()

> `static` **setPrototypeOf**(`o`, `proto`): `any`

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

• **o**: `any`

The object to change its prototype.

• **proto**: `null` \| `object`

The value of the new prototype or null.

#### Returns

`any`

#### Inherited from

`ResServerTools.setPrototypeOf`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

***

### toJSON()

> `static` **toJSON**(): `object`

#### Returns

`object`

#### Inherited from

`ResServerTools.toJSON`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:285

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| `ToolFunc`

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

`ResServerTools.unregister`

#### Defined in

packages/ai-tool/dist/index-DUEs7T8M.d.ts:79

***

### values()

#### values(o)

> `static` **values**\<`T`\>(`o`): `T`[]

Returns an array of values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

• **o**: `object` \| `ArrayLike`\<`T`\>

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`T`[]

##### Inherited from

`ResServerTools.values`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

#### values(o)

> `static` **values**(`o`): `any`[]

Returns an array of values of the enumerable own properties of an object

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]

##### Inherited from

`ResServerTools.values`

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:30
