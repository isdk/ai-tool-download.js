[@isdk/ai-tool-downloader](../README.md) / [Exports](../modules.md) / DownloadFunc

# Class: DownloadFunc

服务器端下载管理工具,管理文件下载队列,通过SSE事件通知进度.
需要持久化保存下载队列

## Hierarchy

- `ResServerTools`

  ↳ **`DownloadFunc`**

## Table of contents

### Constructors

- [constructor](DownloadFunc.md#constructor)

### Properties

- [$attributes](DownloadFunc.md#$attributes)
- [action](DownloadFunc.md#action)
- [allowExportFunc](DownloadFunc.md#allowexportfunc)
- [apiRoot](DownloadFunc.md#apiroot)
- [autoScaleDownloads](DownloadFunc.md#autoscaledownloads)
- [autostartQueue](DownloadFunc.md#autostartqueue)
- [chunkSizeInBytes](DownloadFunc.md#chunksizeinbytes)
- [cleanTempFile](DownloadFunc.md#cleantempfile)
- [concurrency](DownloadFunc.md#concurrency)
- [constructor](DownloadFunc.md#constructor-1)
- [defaultOptions](DownloadFunc.md#defaultoptions)
- [depends](DownloadFunc.md#depends)
- [fetchOptions](DownloadFunc.md#fetchoptions)
- [finished](DownloadFunc.md#finished)
- [methods](DownloadFunc.md#methods)
- [name](DownloadFunc.md#name)
- [nextOrder](DownloadFunc.md#nextorder)
- [nonExported1stChar](DownloadFunc.md#nonexported1stchar)
- [params](DownloadFunc.md#params)
- [queue](DownloadFunc.md#queue)
- [result](DownloadFunc.md#result)
- [rootDir](DownloadFunc.md#rootdir)
- [scope](DownloadFunc.md#scope)
- [setup](DownloadFunc.md#setup)
- [stream](DownloadFunc.md#stream)
- [tags](DownloadFunc.md#tags)
- [dataPath](DownloadFunc.md#datapath)
- [items](DownloadFunc.md#items)

### Accessors

- [apiRoot](DownloadFunc.md#apiroot-1)

### Methods

- [$clean](DownloadFunc.md#$clean)
- [$config](DownloadFunc.md#$config)
- [$start](DownloadFunc.md#$start)
- [$stop](DownloadFunc.md#$stop)
- [\_start](DownloadFunc.md#_start)
- [add](DownloadFunc.md#add)
- [arr2ObjParams](DownloadFunc.md#arr2objparams)
- [assign](DownloadFunc.md#assign)
- [assignProperty](DownloadFunc.md#assignproperty)
- [assignPropertyTo](DownloadFunc.md#assignpropertyto)
- [assignTo](DownloadFunc.md#assignto)
- [cast](DownloadFunc.md#cast)
- [clone](DownloadFunc.md#clone)
- [cloneTo](DownloadFunc.md#cloneto)
- [defineProperties](DownloadFunc.md#defineproperties)
- [delete](DownloadFunc.md#delete)
- [exportQueue](DownloadFunc.md#exportqueue)
- [exportTo](DownloadFunc.md#exportto)
- [func](DownloadFunc.md#func)
- [get](DownloadFunc.md#get)
- [getDownloadsInQueue](DownloadFunc.md#getdownloadsinqueue)
- [getFunc](DownloadFunc.md#getfunc)
- [getFuncWithPos](DownloadFunc.md#getfuncwithpos)
- [getId](DownloadFunc.md#getid)
- [getItem](DownloadFunc.md#getitem)
- [getMethodFromParams](DownloadFunc.md#getmethodfromparams)
- [getProperties](DownloadFunc.md#getproperties)
- [hasOwnProperty](DownloadFunc.md#hasownproperty)
- [importQueue](DownloadFunc.md#importqueue)
- [initialize](DownloadFunc.md#initialize)
- [isPrototypeOf](DownloadFunc.md#isprototypeof)
- [isSame](DownloadFunc.md#issame)
- [isStream](DownloadFunc.md#isstream)
- [list](DownloadFunc.md#list)
- [mergeTo](DownloadFunc.md#mergeto)
- [newDownload](DownloadFunc.md#newdownload)
- [obj2ArrParams](DownloadFunc.md#obj2arrparams)
- [onCompleted](DownloadFunc.md#oncompleted)
- [post](DownloadFunc.md#post)
- [propertyIsEnumerable](DownloadFunc.md#propertyisenumerable)
- [put](DownloadFunc.md#put)
- [register](DownloadFunc.md#register)
- [run](DownloadFunc.md#run)
- [runAs](DownloadFunc.md#runas)
- [runAsSync](DownloadFunc.md#runassync)
- [runSync](DownloadFunc.md#runsync)
- [runWithPos](DownloadFunc.md#runwithpos)
- [runWithPosAs](DownloadFunc.md#runwithposas)
- [runWithPosAsSync](DownloadFunc.md#runwithposassync)
- [runWithPosSync](DownloadFunc.md#runwithpossync)
- [start](DownloadFunc.md#start)
- [startAll](DownloadFunc.md#startall)
- [stopAll](DownloadFunc.md#stopall)
- [toJSON](DownloadFunc.md#tojson)
- [toLocaleString](DownloadFunc.md#tolocalestring)
- [toObject](DownloadFunc.md#toobject)
- [toString](DownloadFunc.md#tostring)
- [unregister](DownloadFunc.md#unregister)
- [valueOf](DownloadFunc.md#valueof)
- [assign](DownloadFunc.md#assign-1)
- [create](DownloadFunc.md#create)
- [defineProperties](DownloadFunc.md#defineproperties-1)
- [defineProperty](DownloadFunc.md#defineproperty)
- [entries](DownloadFunc.md#entries)
- [freeze](DownloadFunc.md#freeze)
- [fromEntries](DownloadFunc.md#fromentries)
- [get](DownloadFunc.md#get-1)
- [getAllByTag](DownloadFunc.md#getallbytag)
- [getByTag](DownloadFunc.md#getbytag)
- [getFunc](DownloadFunc.md#getfunc-1)
- [getFuncWithPos](DownloadFunc.md#getfuncwithpos-1)
- [getOwnPropertyDescriptor](DownloadFunc.md#getownpropertydescriptor)
- [getOwnPropertyDescriptors](DownloadFunc.md#getownpropertydescriptors)
- [getOwnPropertyNames](DownloadFunc.md#getownpropertynames)
- [getOwnPropertySymbols](DownloadFunc.md#getownpropertysymbols)
- [getProperties](DownloadFunc.md#getproperties-1)
- [getPrototypeOf](DownloadFunc.md#getprototypeof)
- [is](DownloadFunc.md#is)
- [isExtensible](DownloadFunc.md#isextensible)
- [isFrozen](DownloadFunc.md#isfrozen)
- [isSealed](DownloadFunc.md#issealed)
- [keys](DownloadFunc.md#keys)
- [list](DownloadFunc.md#list-1)
- [preventExtensions](DownloadFunc.md#preventextensions)
- [register](DownloadFunc.md#register-1)
- [run](DownloadFunc.md#run-1)
- [runSync](DownloadFunc.md#runsync-1)
- [runWithPos](DownloadFunc.md#runwithpos-1)
- [runWithPosSync](DownloadFunc.md#runwithpossync-1)
- [seal](DownloadFunc.md#seal)
- [setApiRoot](DownloadFunc.md#setapiroot)
- [setPrototypeOf](DownloadFunc.md#setprototypeof)
- [toJSON](DownloadFunc.md#tojson-1)
- [unregister](DownloadFunc.md#unregister-1)
- [values](DownloadFunc.md#values)

## Constructors

### constructor

• **new DownloadFunc**(`name`, `options?`): [`DownloadFunc`](DownloadFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| `FuncItem` |
| `options?` | `any` |

#### Returns

[`DownloadFunc`](DownloadFunc.md)

#### Inherited from

ResServerTools.constructor

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:552

## Properties

### $attributes

• **$attributes**: `Properties`

#### Inherited from

ResServerTools.$attributes

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:5

___

### action

• **action**: ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"patch"`` \| ``"delete"`` \| ``"list"`` \| ``"res"``

#### Inherited from

ResServerTools.action

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:550

___

### allowExportFunc

• `Optional` **allowExportFunc**: `boolean`

#### Inherited from

ResServerTools.allowExportFunc

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:396

___

### apiRoot

• `Optional` **apiRoot**: `string`

#### Inherited from

ResServerTools.apiRoot

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:130

___

### autoScaleDownloads

• **autoScaleDownloads**: `undefined` \| `boolean`

Determines whether to automatically scale downloads when the concurrency limit is reached.
If set to `true`, the system will automatically stop existing download tasks to start new ones when the concurrency limit is reached.
If set to `false`, an error message "Concurrency limit reached" will be reported instead.

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:89](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L89)

___

### autostartQueue

• **autostartQueue**: `undefined` \| `boolean`

Indicates whether the download queue should automatically start processing the next task upon completion of the current one.

When set to `true`, the system will automatically initiate the download of the next item in the queue as soon as the current
download task finishes successfully. If set to `false`, manual intervention will be required to begin subsequent downloads.

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:75](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L75)

___

### chunkSizeInBytes

• **chunkSizeInBytes**: `number` = `defaultChunkSizeInBytes`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:83](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L83)

___

### cleanTempFile

• **cleanTempFile**: `boolean` = `true`

Determines whether to clean up temporary files when a downloading or paused task is removed.
If set to `true`, temporary files will be deleted when a downloading or paused task is removed.
If set to `false`, temporary files will not be deleted.

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:82](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L82)

___

### concurrency

• **concurrency**: `number` = `defaultConcurrency`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:68](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L68)

___

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

ResServerTools.constructor

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:125

___

### defaultOptions

• **defaultOptions**: `Object`

The default options for export and assign

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assign?` | `IMergeOptions` |
| `export?` | `IMergeOptions` |

#### Inherited from

ResServerTools.defaultOptions

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:74

___

### depends

• **depends**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event` | `EventServer` |

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:91](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L91)

___

### fetchOptions

• `Optional` **fetchOptions**: `any`

#### Inherited from

ResServerTools.fetchOptions

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:132

___

### finished

• **finished**: `DownloadItems` = `{}`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:65](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L65)

___

### methods

• **methods**: `string`[]

#### Inherited from

ResServerTools.methods

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:542

___

### name

• `Optional` **name**: `string`

#### Inherited from

ResServerTools.name

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:22

___

### nextOrder

• **nextOrder**: `number` = `0`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:67](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L67)

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

ResServerTools.nonExported1stChar

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:78

___

### params

• **params**: `FuncParams`

#### Inherited from

ResServerTools.params

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:551

___

### queue

• **queue**: `DownloadItems` = `{}`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:64](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L64)

___

### result

• `Optional` **result**: `string`

#### Inherited from

ResServerTools.result

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:24

___

### rootDir

• **rootDir**: `undefined` \| `string`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:66](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L66)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

ResServerTools.scope

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:25

___

### setup

• `Optional` **setup**: (`this`: `ToolFunc`, `options?`: `FuncItem`) => `void`

#### Type declaration

▸ (`this`, `options?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ToolFunc` |
| `options?` | `FuncItem` |

##### Returns

`void`

#### Inherited from

ResServerTools.setup

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:27

___

### stream

• `Optional` **stream**: `boolean`

#### Inherited from

ResServerTools.stream

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:133

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

ResServerTools.tags

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:26

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Inherited from

ResServerTools.dataPath

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:43

___

### items

▪ `Static` **items**: `Funcs`

#### Inherited from

ResServerTools.items

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:42

## Accessors

### apiRoot

• `get` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

ResServerTools.apiRoot

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:403

## Methods

### $clean

▸ **$clean**(`options`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.completed?` | `boolean` |
| `options.downloading?` | `boolean` |
| `options.paused?` | `boolean` |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:319](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L319)

___

### $config

▸ **$config**(`options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DownloadConfiguration`](../interfaces/DownloadConfiguration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `autoScaleDownloads` | `boolean` |
| `autostartQueue` | `boolean` |
| `chunkSizeInBytes` | `number` |
| `cleanTempFile` | `boolean` |
| `concurrency` | `number` |
| `rootDir` | `undefined` \| `string` |

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:349](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L349)

___

### $start

▸ **$start**(`options`): `Promise`\<`undefined` \| \{ `id`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `DownloadFuncParams` |

#### Returns

`Promise`\<`undefined` \| \{ `id`: `string`  }\>

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:284](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L284)

___

### $stop

▸ **$stop**(`options`): `Promise`\<\{ `id`: `string` ; `status`: [`FileDownloadStatus`](../modules.md#filedownloadstatus) = download.status; `url`: `string` = download.options.url } \| \{ `id`: `undefined` ; `status`: `string` = 'paused'; `url?`: `undefined` = download.options.url }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| `DownloadFuncParams` |

#### Returns

`Promise`\<\{ `id`: `string` ; `status`: [`FileDownloadStatus`](../modules.md#filedownloadstatus) = download.status; `url`: `string` = download.options.url } \| \{ `id`: `undefined` ; `status`: `string` = 'paused'; `url?`: `undefined` = download.options.url }\>

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:299](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L299)

___

### \_start

▸ **_start**(`options`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| `DownloadFuncParams` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:238](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L238)

___

### add

▸ **add**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `BaseFileDownloadOptions` |

#### Returns

`string`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:219](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L219)

___

### arr2ObjParams

▸ **arr2ObjParams**(`params`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any`[] |

#### Returns

`any`[]

#### Inherited from

ResServerTools.arr2ObjParams

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:61

___

### assign

▸ **assign**(`src`, `options?`): `this`

Assign the values from the src object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the source object |
| `options?` | `IMergeOptions` | - |

#### Returns

`this`

this object

#### Inherited from

ResServerTools.assign

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:106

___

### assignProperty

▸ **assignProperty**(`src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign a property of src to this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the src object |
| `name` | `string` | the property name to assign |
| `value` | `any` | the property value to assign |
| `attrs?` | `any` | the attributes object |
| `options?` | `IMergeOptions` |  |

#### Returns

`void`

#### Inherited from

ResServerTools.assignProperty

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:117

___

### assignPropertyTo

▸ **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign the property value from the src to destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `src` | `any` | The src object |
| `name` | `string` | The property name |
| `value` | `any` | The property value |
| `attrs?` | `any` | The attributes object of the property |
| `options?` | `IMergeOptions` |  |

#### Returns

`void`

**`Abstract`**

#### Inherited from

ResServerTools.assignPropertyTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:131

___

### assignTo

▸ **assignTo**(`dest?`, `options?`): `any`

Assign this attributes to the dest object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest?` | `any` | the destination object |
| `options?` | `IMergeOptions` | - |

#### Returns

`any`

the dest object

#### Inherited from

ResServerTools.assignTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:191

___

### cast

▸ **cast**(`key`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`any`

#### Inherited from

ResServerTools.cast

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:553

___

### clone

▸ **clone**(`options?`): `any`

Create a new object with the same values of attributes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IMergeOptions` |

#### Returns

`any`

the new object

#### Inherited from

ResServerTools.clone

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:155

___

### cloneTo

▸ **cloneTo**(`dest`, `options?`): `any`

Create and assign the values to the destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | `IMergeOptions` |  |

#### Returns

`any`

the new dest object

#### Inherited from

ResServerTools.cloneTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:148

___

### defineProperties

▸ **defineProperties**(`aProperties`): `any`

Define the attributes of this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aProperties` | `SimplePropDescriptors` | the defined attributes of the object |

#### Returns

`any`

**`Abstract`**

#### Inherited from

ResServerTools.defineProperties

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:89

___

### delete

▸ **delete**(`options`): `Promise`\<`undefined` \| \{ `filepath`: `undefined` \| `string` = download.options.filepath; `id`: `string` ; `status`: [`FileDownloadStatus`](../modules.md#filedownloadstatus) = download.status; `url`: `string` = download.options.url }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `DownloadFuncParams` |

#### Returns

`Promise`\<`undefined` \| \{ `filepath`: `undefined` \| `string` = download.options.filepath; `id`: `string` ; `status`: [`FileDownloadStatus`](../modules.md#filedownloadstatus) = download.status; `url`: `string` = download.options.url }\>

#### Overrides

ResServerTools.delete

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:453](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L453)

___

### exportQueue

▸ **exportQueue**(): `DownloadOptionsItems`

#### Returns

`DownloadOptionsItems`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:113](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L113)

___

### exportTo

▸ **exportTo**(`dest`, `options?`): `any`

Export attributes to the dest json object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | `IExportOptions` | - |

#### Returns

`any`

the dest object.

#### Inherited from

ResServerTools.exportTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:173

___

### func

▸ **func**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ResServerFuncParams` |

#### Returns

`any`

#### Inherited from

ResServerTools.func

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:555

___

### get

▸ **get**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `DownloadFuncParams` |

#### Returns

`any`

#### Overrides

ResServerTools.get

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:416](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L416)

___

### getDownloadsInQueue

▸ **getDownloadsInQueue**(`status?`, `isNot?`): [`FileDownload`](FileDownload.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `status?` | [`FileDownloadStatus`](../modules.md#filedownloadstatus) |
| `isNot?` | `boolean` |

#### Returns

[`FileDownload`](FileDownload.md)[]

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:143](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L143)

___

### getFunc

▸ **getFunc**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Inherited from

ResServerTools.getFunc

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:67

___

### getFuncWithPos

▸ **getFuncWithPos**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Inherited from

ResServerTools.getFuncWithPos

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:72

___

### getId

▸ **getId**(`options`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| `DownloadFuncParams` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:124](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L124)

___

### getItem

▸ **getItem**(`options`): `undefined` \| [`FileDownload`](FileDownload.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| `DownloadFuncParams` |

#### Returns

`undefined` \| [`FileDownload`](FileDownload.md)

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:276](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L276)

___

### getMethodFromParams

▸ **getMethodFromParams**(`params`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ResServerFuncParams` |

#### Returns

`undefined` \| `string`

#### Inherited from

ResServerTools.getMethodFromParams

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:554

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

**`Abstract`**

#### Inherited from

ResServerTools.getProperties

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:98

___

### hasOwnProperty

▸ **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Inherited from

ResServerTools.hasOwnProperty

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:140

___

### importQueue

▸ **importQueue**(`queue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | `DownloadOptionsItems` |

#### Returns

`void`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:104](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L104)

___

### initialize

▸ **initialize**(`src?`): `this`

Initialize object and assign attribute values from src if src exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src?` | `any` |

#### Returns

`this`

this object.

#### Inherited from

ResServerTools.initialize

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:139

___

### isPrototypeOf

▸ **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `Object` | Another object whose prototype chain is to be checked. |

#### Returns

`boolean`

#### Inherited from

ResServerTools.isPrototypeOf

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:146

___

### isSame

▸ **isSame**(`src`, `options?`): `boolean`

Check the src object whether “equals” this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | The source object |
| `options?` | `IMergeOptions` | - |

#### Returns

`boolean`

#### Inherited from

ResServerTools.isSame

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:200

___

### isStream

▸ **isStream**(`params`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ServerFuncParams` |

#### Returns

`undefined` \| `boolean`

#### Inherited from

ResServerTools.isStream

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:408

___

### list

▸ **list**(`options`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `DownloadFuncParams` |

#### Returns

`string`[]

#### Overrides

ResServerTools.list

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:434](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L434)

___

### mergeTo

▸ **mergeTo**(`dest`, `options?`): `any`

Merge this attributes to dest object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `options?` | `IMergeOptions` | - |

#### Returns

`any`

the dest object.

#### Inherited from

ResServerTools.mergeTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:164

___

### newDownload

▸ **newDownload**(`options`, `id`): [`FileDownload`](FileDownload.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `BaseFileDownloadOptions` |
| `id` | `string` |

#### Returns

[`FileDownload`](FileDownload.md)

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:184](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L184)

___

### obj2ArrParams

▸ **obj2ArrParams**(`params?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`[]

#### Inherited from

ResServerTools.obj2ArrParams

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:62

___

### onCompleted

▸ **onCompleted**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:133](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L133)

___

### post

▸ **post**(`options`): `Promise`\<`undefined` \| \{ `id`: `string` = hashId }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `DownloadFuncParams` |

#### Returns

`Promise`\<`undefined` \| \{ `id`: `string` = hashId }\>

#### Overrides

ResServerTools.post

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:380](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L380)

___

### propertyIsEnumerable

▸ **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Inherited from

ResServerTools.propertyIsEnumerable

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:152

___

### put

▸ **put**(`options`): `undefined` \| \{ `id`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `DownloadFuncParams` |

#### Returns

`undefined` \| \{ `id`: `string`  }

#### Overrides

ResServerTools.put

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:396](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L396)

___

### register

▸ **register**(): `boolean` \| `ToolFunc`

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

ResServerTools.register

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:59

___

### run

▸ **run**(`params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

ResServerTools.run

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:64

___

### runAs

▸ **runAs**(`name`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

ResServerTools.runAs

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:65

___

### runAsSync

▸ **runAsSync**(`name`, `params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`any`

#### Inherited from

ResServerTools.runAsSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:66

___

### runSync

▸ **runSync**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`

#### Inherited from

ResServerTools.runSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:63

___

### runWithPos

▸ **runWithPos**(`...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Inherited from

ResServerTools.runWithPos

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:70

___

### runWithPosAs

▸ **runWithPosAs**(`name`, `...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Inherited from

ResServerTools.runWithPosAs

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:71

___

### runWithPosAsSync

▸ **runWithPosAsSync**(`name`, `...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`any`

#### Inherited from

ResServerTools.runWithPosAsSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:69

___

### runWithPosSync

▸ **runWithPosSync**(`...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`any`

#### Inherited from

ResServerTools.runWithPosSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:68

___

### start

▸ **start**(`options`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| `DownloadFuncParams` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:254](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L254)

___

### startAll

▸ **startAll**(): `void`

#### Returns

`void`

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:153](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L153)

___

### stopAll

▸ **stopAll**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool-downloader/src/ai-tool-download.ts:174](https://github.com/isdk/ai-tool-download.js/blob/0c0b4cff51ad45952c8912b531b0f346fb0d92c6/src/ai-tool-download.ts#L174)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

ResServerTools.toJSON

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:182

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

ResServerTools.toLocaleString

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:131

___

### toObject

▸ **toObject**(`options?`): `any`

Convert the attributes to the json object

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`any`

the json object.

#### Inherited from

ResServerTools.toObject

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:181

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

ResServerTools.toString

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:128

___

### unregister

▸ **unregister**(): `any`

#### Returns

`any`

#### Inherited from

ResServerTools.unregister

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:60

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

ResServerTools.valueOf

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:134

___

### assign

▸ **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source` | `U` | The source object from which to copy properties. |

#### Returns

`T` & `U`

#### Inherited from

ResServerTools.assign

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:284

▸ **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | The first source object from which to copy properties. |
| `source2` | `V` | The second source object from which to copy properties. |

#### Returns

`T` & `U` & `V`

#### Inherited from

ResServerTools.assign

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:293

▸ **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |
| `W` | `W` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | The first source object from which to copy properties. |
| `source2` | `V` | The second source object from which to copy properties. |
| `source3` | `W` | The third source object from which to copy properties. |

#### Returns

`T` & `U` & `V` & `W`

#### Inherited from

ResServerTools.assign

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:303

▸ **assign**(`target`, `...sources`): `any`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | The target object to copy to. |
| `...sources` | `any`[] | One or more source objects from which to copy properties |

#### Returns

`any`

#### Inherited from

ResServerTools.assign

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:311

___

### create

▸ **create**(`o`): `any`

Creates an object that has the specified prototype or that has null prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | ``null`` \| `object` | Object to use as a prototype. May be null. |

#### Returns

`any`

#### Inherited from

ResServerTools.create

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:188

▸ **create**(`o`, `properties`): `any`

Creates an object that has the specified prototype, and that optionally contains specified properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | ``null`` \| `object` | Object to use as a prototype. May be null |
| `properties` | `PropertyDescriptorMap` & `ThisType`\<`any`\> | JavaScript object that contains one or more property descriptors. |

#### Returns

`any`

#### Inherited from

ResServerTools.create

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:195

___

### defineProperties

▸ **defineProperties**(`aTarget`, `aProperties`, `recreate?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aTarget` | `any` |
| `aProperties` | `PropDescriptors` |
| `recreate?` | `boolean` |

#### Returns

`any`

#### Inherited from

ResServerTools.defineProperties

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:11

___

### defineProperty

▸ **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Adds a property to an object, or modifies attributes of an existing property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object. |
| `p` | `PropertyKey` | The property name. |
| `attributes` | `PropertyDescriptor` & `ThisType`\<`any`\> | Descriptor for the property. It can be for a data property or an accessor property. |

#### Returns

`T`

#### Inherited from

ResServerTools.defineProperty

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:203

___

### entries

▸ **entries**\<`T`\>(`o`): [`string`, `T`][]

Returns an array of key/values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | \{ `[s: string]`: `T`;  } \| `ArrayLike`\<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `T`][]

#### Inherited from

ResServerTools.entries

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:36

▸ **entries**(`o`): [`string`, `any`][]

Returns an array of key/values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `any`][]

#### Inherited from

ResServerTools.entries

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:42

___

### freeze

▸ **freeze**\<`T`\>(`f`): `T`

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Inherited from

ResServerTools.freeze

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:222

▸ **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | extends `string` \| `number` \| `bigint` \| `boolean` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`Readonly`\<`T`\>

#### Inherited from

ResServerTools.freeze

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:228

▸ **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`Readonly`\<`T`\>

#### Inherited from

ResServerTools.freeze

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:234

___

### fromEntries

▸ **fromEntries**\<`T`\>(`entries`): `Object`

Returns an object created by key-value entries for properties and methods

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`\<readonly [`PropertyKey`, `T`]\> | An iterable object that contains key-value entries for properties and methods. |

#### Returns

`Object`

#### Inherited from

ResServerTools.fromEntries

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2019.object.d.ts:26

▸ **fromEntries**(`entries`): `any`

Returns an object created by key-value entries for properties and methods

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`\<readonly `any`[]\> | An iterable object that contains key-value entries for properties and methods. |

#### Returns

`any`

#### Inherited from

ResServerTools.fromEntries

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2019.object.d.ts:32

___

### get

▸ **get**(`name`): `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`ToolFunc`

#### Inherited from

ResServerTools.get

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:44

___

### getAllByTag

▸ **getAllByTag**(`tagName`): `ToolFunc`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`ToolFunc`[]

#### Inherited from

ResServerTools.getAllByTag

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:47

___

### getByTag

▸ **getByTag**(`tagName`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

ResServerTools.getByTag

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:46

___

### getFunc

▸ **getFunc**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

ResServerTools.getFunc

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:50

___

### getFuncWithPos

▸ **getFuncWithPos**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

ResServerTools.getFuncWithPos

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:53

___

### getOwnPropertyDescriptor

▸ **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the property. |
| `p` | `PropertyKey` | Name of the property. |

#### Returns

`undefined` \| `PropertyDescriptor`

#### Inherited from

ResServerTools.getOwnPropertyDescriptor

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:175

___

### getOwnPropertyDescriptors

▸ **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ [P in string \| number \| symbol]: TypedPropertyDescriptor\<T[P]\> } & \{ `[x: string]`: `PropertyDescriptor`;  }

Returns an object containing all own property descriptors of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

\{ [P in string \| number \| symbol]: TypedPropertyDescriptor\<T[P]\> } & \{ `[x: string]`: `PropertyDescriptor`;  }

#### Inherited from

ResServerTools.getOwnPropertyDescriptors

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:48

___

### getOwnPropertyNames

▸ **getOwnPropertyNames**(`o`): `string`[]

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the own properties. |

#### Returns

`string`[]

#### Inherited from

ResServerTools.getOwnPropertyNames

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:182

___

### getOwnPropertySymbols

▸ **getOwnPropertySymbols**(`o`): `symbol`[]

Returns an array of all symbol properties found directly on object o.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to retrieve the symbols from. |

#### Returns

`symbol`[]

#### Inherited from

ResServerTools.getOwnPropertySymbols

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

ResServerTools.getProperties

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:10

___

### getPrototypeOf

▸ **getPrototypeOf**(`o`): `any`

Returns the prototype of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object that references the prototype. |

#### Returns

`any`

#### Inherited from

ResServerTools.getPrototypeOf

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:167

___

### is

▸ **is**(`value1`, `value2`): `boolean`

Returns true if the values are the same value, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `any` | The first value. |
| `value2` | `any` | The second value. |

#### Returns

`boolean`

#### Inherited from

ResServerTools.is

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:330

___

### isExtensible

▸ **isExtensible**(`o`): `boolean`

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Inherited from

ResServerTools.isExtensible

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:258

___

### isFrozen

▸ **isFrozen**(`o`): `boolean`

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Inherited from

ResServerTools.isFrozen

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:252

___

### isSealed

▸ **isSealed**(`o`): `boolean`

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Inherited from

ResServerTools.isSealed

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:246

___

### keys

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Inherited from

ResServerTools.keys

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:264

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Inherited from

ResServerTools.keys

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### list

▸ **list**(): `Funcs`

#### Returns

`Funcs`

#### Inherited from

ResServerTools.list

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:45

___

### preventExtensions

▸ **preventExtensions**\<`T`\>(`o`): `T`

Prevents the addition of new properties to an object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object to make non-extensible. |

#### Returns

`T`

#### Inherited from

ResServerTools.preventExtensions

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:240

___

### register

▸ **register**(`name`, `options`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

ResServerTools.register

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:54

▸ **register**(`func`, `options`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |
| `options` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

ResServerTools.register

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:55

▸ **register**(`name`, `options?`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| `ToolFunc` \| `FuncItem` |
| `options?` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

ResServerTools.register

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:56

___

### run

▸ **run**(`name`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

ResServerTools.run

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:48

___

### runSync

▸ **runSync**(`name`, `params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`any`

#### Inherited from

ResServerTools.runSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:49

___

### runWithPos

▸ **runWithPos**(`name`, `...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Inherited from

ResServerTools.runWithPos

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:51

___

### runWithPosSync

▸ **runWithPosSync**(`name`, `...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`any`

#### Inherited from

ResServerTools.runWithPosSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:52

___

### seal

▸ **seal**\<`T`\>(`o`): `T`

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Inherited from

ResServerTools.seal

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:216

___

### setApiRoot

▸ **setApiRoot**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`void`

#### Inherited from

ResServerTools.setApiRoot

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:404

___

### setPrototypeOf

▸ **setPrototypeOf**(`o`, `proto`): `any`

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object to change its prototype. |
| `proto` | ``null`` \| `object` | The value of the new prototype or null. |

#### Returns

`any`

#### Inherited from

ResServerTools.setPrototypeOf

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:337

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Inherited from

ResServerTools.toJSON

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:405

___

### unregister

▸ **unregister**(`name`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

ResServerTools.unregister

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:57

___

### values

▸ **values**\<`T`\>(`o`): `T`[]

Returns an array of values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | \{ `[s: string]`: `T`;  } \| `ArrayLike`\<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`T`[]

#### Inherited from

ResServerTools.values

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:24

▸ **values**(`o`): `any`[]

Returns an array of values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`any`[]

#### Inherited from

ResServerTools.values

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:30
