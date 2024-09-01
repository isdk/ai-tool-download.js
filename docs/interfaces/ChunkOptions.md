[@isdk/ai-tool-downloader](../README.md) / [Exports](../modules.md) / ChunkOptions

# Interface: ChunkOptions

## Hierarchy

- `Options`

  ↳ **`ChunkOptions`**

## Table of contents

### Properties

- [aborter](ChunkOptions.md#aborter)
- [agent](ChunkOptions.md#agent)
- [body](ChunkOptions.md#body)
- [cache](ChunkOptions.md#cache)
- [credentials](ChunkOptions.md#credentials)
- [endByte](ChunkOptions.md#endbyte)
- [fetch](ChunkOptions.md#fetch)
- [filepath](ChunkOptions.md#filepath)
- [headers](ChunkOptions.md#headers)
- [hooks](ChunkOptions.md#hooks)
- [index](ChunkOptions.md#index)
- [integrity](ChunkOptions.md#integrity)
- [json](ChunkOptions.md#json)
- [keepalive](ChunkOptions.md#keepalive)
- [method](ChunkOptions.md#method)
- [mode](ChunkOptions.md#mode)
- [onDownloadProgress](ChunkOptions.md#ondownloadprogress)
- [overwrite](ChunkOptions.md#overwrite)
- [parseJson](ChunkOptions.md#parsejson)
- [port](ChunkOptions.md#port)
- [prefixUrl](ChunkOptions.md#prefixurl)
- [priority](ChunkOptions.md#priority)
- [redirect](ChunkOptions.md#redirect)
- [referrer](ChunkOptions.md#referrer)
- [referrerPolicy](ChunkOptions.md#referrerpolicy)
- [retry](ChunkOptions.md#retry)
- [searchParams](ChunkOptions.md#searchparams)
- [signal](ChunkOptions.md#signal)
- [skipCheck](ChunkOptions.md#skipcheck)
- [startByte](ChunkOptions.md#startbyte)
- [stringifyJson](ChunkOptions.md#stringifyjson)
- [throwHttpErrors](ChunkOptions.md#throwhttperrors)
- [timeout](ChunkOptions.md#timeout)
- [url](ChunkOptions.md#url)
- [window](ChunkOptions.md#window)

## Properties

### aborter

• `Optional` **aborter**: `AbortController`

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:36](https://github.com/isdk/ai-tool-download.js/blob/85b076cdd4900aef24b821f267150a6a096347bd/src/chunk-download.ts#L36)

___

### agent

• `Optional` **agent**: `any`

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:37](https://github.com/isdk/ai-tool-download.js/blob/85b076cdd4900aef24b821f267150a6a096347bd/src/chunk-download.ts#L37)

___

### body

• `Optional` **body**: ``null`` \| `BodyInit`

A BodyInit object or null to set request's body.

#### Inherited from

Options.body

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.dom.d.ts:1673

___

### cache

• `Optional` **cache**: `RequestCache`

A string indicating how the request will interact with the browser's cache to set request's cache.

#### Inherited from

Options.cache

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.dom.d.ts:1675

___

### credentials

• `Optional` **credentials**: `RequestCredentials`

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### Inherited from

Options.credentials

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.dom.d.ts:1677

___

### endByte

• `Optional` **endByte**: `number`

The end byte of the chunk.

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:29](https://github.com/isdk/ai-tool-download.js/blob/85b076cdd4900aef24b821f267150a6a096347bd/src/chunk-download.ts#L29)

___

### fetch

• `Optional` **fetch**: (`input`: `Input`, `init?`: `RequestInit`) => `Promise`\<`Response`\>

User-defined `fetch` function.
Has to be fully compatible with the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) standard.

Use-cases:
1. Use custom `fetch` implementations like [`isomorphic-unfetch`](https://www.npmjs.com/package/isomorphic-unfetch).
2. Use the `fetch` wrapper function provided by some frameworks that use server-side rendering (SSR).

**`Default`**

```ts
fetch
```

**`Example`**

```
import ky from 'ky';
import fetch from 'isomorphic-unfetch';

const json = await ky('https://example.com', {fetch}).json();
```

#### Type declaration

▸ (`input`, `init?`): `Promise`\<`Response`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |
| `init?` | `RequestInit` |

##### Returns

`Promise`\<`Response`\>

#### Inherited from

Options.fetch

#### Defined in

node_modules/.pnpm/ky@1.3.0/node_modules/ky/distribution/types/options.d.ts:185

___

### filepath

• **filepath**: `string`

save the content to the filePath

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:17](https://github.com/isdk/ai-tool-download.js/blob/85b076cdd4900aef24b821f267150a6a096347bd/src/chunk-download.ts#L17)

___

### headers

• `Optional` **headers**: `KyHeadersInit`

HTTP headers used to make the request.

You can pass a `Headers` instance or a plain object.

You can remove a header with `.extend()` by passing the header with an `undefined` value.

**`Example`**

```
import ky from 'ky';

const url = 'https://sindresorhus.com';

const original = ky.create({
    headers: {
        rainbow: 'rainbow',
        unicorn: 'unicorn'
    }
});

const extended = original.extend({
    headers: {
        rainbow: undefined
    }
});

const response = await extended(url).json();

console.log('rainbow' in response);
//=> false

console.log('unicorn' in response);
//=> true
```

#### Inherited from

Options.headers

#### Defined in

node_modules/.pnpm/ky@1.3.0/node_modules/ky/distribution/types/options.d.ts:240

___

### hooks

• `Optional` **hooks**: `Hooks`

Hooks allow modifications during the request lifecycle. Hook functions may be async and are run serially.

#### Inherited from

Options.hooks

#### Defined in

node_modules/.pnpm/ky@1.3.0/node_modules/ky/distribution/types/options.d.ts:136

___

### index

• `Optional` **index**: `number`

The index of the chunk.

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:21](https://github.com/isdk/ai-tool-download.js/blob/85b076cdd4900aef24b821f267150a6a096347bd/src/chunk-download.ts#L21)

___

### integrity

• `Optional` **integrity**: `string`

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

#### Inherited from

Options.integrity

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.dom.d.ts:1681

___

### json

• `Optional` **json**: `unknown`

Shortcut for sending JSON. Use this instead of the `body` option.

Accepts any plain object or value, which will be `JSON.stringify()`'d and sent in the body with the correct header set.

#### Inherited from

Options.json

#### Defined in

node_modules/.pnpm/ky@1.3.0/node_modules/ky/distribution/types/options.d.ts:26

___

### keepalive

• `Optional` **keepalive**: `boolean`

A boolean to set request's keepalive.

#### Inherited from

Options.keepalive

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.dom.d.ts:1683

___

### method

• `Optional` **method**: `LiteralUnion`\<`HttpMethod`, `string`\>

HTTP method used to make the request.

Internally, the standard methods (`GET`, `POST`, `PUT`, `PATCH`, `HEAD` and `DELETE`) are uppercased in order to avoid server errors due to case sensitivity.

#### Inherited from

Options.method

#### Defined in

node_modules/.pnpm/ky@1.3.0/node_modules/ky/distribution/types/options.d.ts:204

___

### mode

• `Optional` **mode**: `RequestMode`

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### Inherited from

Options.mode

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.dom.d.ts:1687

___

### onDownloadProgress

• `Optional` **onDownloadProgress**: (`progress`: `DownloadProgress`, `chunk`: `Uint8Array`) => `void`

Download progress event handler.

**`Example`**

```
import ky from 'ky';

const response = await ky('https://example.com', {
    onDownloadProgress: (progress, chunk) => {
        // Example output:
        // `0% - 0 of 1271 bytes`
        // `100% - 1271 of 1271 bytes`
        console.log(`${progress.percent * 100}% - ${progress.transferredBytes} of ${progress.totalBytes} bytes`);
    }
});
```

#### Type declaration

▸ (`progress`, `chunk`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `progress` | `DownloadProgress` | - |
| `chunk` | `Uint8Array` | Note: It's empty for the first call. |

##### Returns

`void`

#### Inherited from

Options.onDownloadProgress

#### Defined in

node_modules/.pnpm/ky@1.3.0/node_modules/ky/distribution/types/options.d.ts:166

___

### overwrite

• `Optional` **overwrite**: `boolean`

overwrite the existing file.

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:33](https://github.com/isdk/ai-tool-download.js/blob/85b076cdd4900aef24b821f267150a6a096347bd/src/chunk-download.ts#L33)

___

### parseJson

• `Optional` **parseJson**: (`text`: `string`) => `unknown`

User-defined JSON-parsing function.

Use-cases:
1. Parse JSON via the [`bourne` package](https://github.com/hapijs/bourne) to protect from prototype pollution.
2. Parse JSON with [`reviver` option of `JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).

**`Default`**

```ts
JSON.parse()
```

**`Example`**

```
import ky from 'ky';
import bourne from '@hapijs/bourne';

const json = await ky('https://example.com', {
    parseJson: text => bourne(text)
}).json();
```

#### Type declaration

▸ (`text`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

##### Returns

`unknown`

#### Inherited from

Options.parseJson

#### Defined in

node_modules/.pnpm/ky@1.3.0/node_modules/ky/distribution/types/options.d.ts:46

___

### port

• `Optional` **port**: `MessagePort`

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:35](https://github.com/isdk/ai-tool-download.js/blob/85b076cdd4900aef24b821f267150a6a096347bd/src/chunk-download.ts#L35)

___

### prefixUrl

• `Optional` **prefixUrl**: `string` \| `URL`

A prefix to prepend to the `input` URL when making the request. It can be any valid URL, either relative or absolute. A trailing slash `/` is optional and will be added automatically, if needed, when it is joined with `input`. Only takes effect when `input` is a string. The `input` argument cannot start with a slash `/` when using this option.

Useful when used with [`ky.extend()`](#kyextenddefaultoptions) to create niche-specific Ky-instances.

Notes:
 - After `prefixUrl` and `input` are joined, the result is resolved against the [base URL](https://developer.mozilla.org/en-US/docs/Web/API/Node/baseURI) of the page (if any).
 - Leading slashes in `input` are disallowed when using this option to enforce consistency and avoid confusion about how the `input` URL is handled, given that `input` will not follow the normal URL resolution rules when `prefixUrl` is being used, which changes the meaning of a leading slash.

**`Example`**

```
import ky from 'ky';

// On https://example.com

const response = await ky('unicorn', {prefixUrl: '/api'});
//=> 'https://example.com/api/unicorn'

const response = await ky('unicorn', {prefixUrl: 'https://cats.com'});
//=> 'https://cats.com/unicorn'
```

#### Inherited from

Options.prefixUrl

#### Defined in

node_modules/.pnpm/ky@1.3.0/node_modules/ky/distribution/types/options.d.ts:100

___

### priority

• `Optional` **priority**: `RequestPriority`

#### Inherited from

Options.priority

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.dom.d.ts:1688

___

### redirect

• `Optional` **redirect**: `RequestRedirect`

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Inherited from

Options.redirect

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.dom.d.ts:1690

___

### referrer

• `Optional` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### Inherited from

Options.referrer

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.dom.d.ts:1692

___

### referrerPolicy

• `Optional` **referrerPolicy**: `ReferrerPolicy`

A referrer policy to set request's referrerPolicy.

#### Inherited from

Options.referrerPolicy

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.dom.d.ts:1694

___

### retry

• `Optional` **retry**: `number` \| `RetryOptions`

An object representing `limit`, `methods`, `statusCodes` and `maxRetryAfter` fields for maximum retry count, allowed methods, allowed status codes and maximum [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) time.

If `retry` is a number, it will be used as `limit` and other defaults will remain in place.

If `maxRetryAfter` is set to `undefined`, it will use `options.timeout`. If [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) header is greater than `maxRetryAfter`, it will cancel the request.

By default, delays between retries are calculated with the function `0.3 * (2 ** (attemptCount - 1)) * 1000`, where `attemptCount` is the attempt number (starts from 1), however this can be changed by passing a `delay` function.

Retries are not triggered following a timeout.

**`Example`**

```
import ky from 'ky';

const json = await ky('https://example.com', {
    retry: {
        limit: 10,
        methods: ['get'],
        statusCodes: [413]
    }
}).json();
```

#### Inherited from

Options.retry

#### Defined in

node_modules/.pnpm/ky@1.3.0/node_modules/ky/distribution/types/options.d.ts:125

___

### searchParams

• `Optional` **searchParams**: `SearchParamsOption`

Search parameters to include in the request URL. Setting this will override all existing search parameters in the input URL.

Accepts any value supported by [`URLSearchParams()`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams).

#### Inherited from

Options.searchParams

#### Defined in

node_modules/.pnpm/ky@1.3.0/node_modules/ky/distribution/types/options.d.ts:77

___

### signal

• `Optional` **signal**: ``null`` \| `AbortSignal`

An AbortSignal to set request's signal.

#### Inherited from

Options.signal

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.dom.d.ts:1696

___

### skipCheck

• `Optional` **skipCheck**: `Headers`

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:34](https://github.com/isdk/ai-tool-download.js/blob/85b076cdd4900aef24b821f267150a6a096347bd/src/chunk-download.ts#L34)

___

### startByte

• `Optional` **startByte**: `number`

The start byte of the chunk.

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:25](https://github.com/isdk/ai-tool-download.js/blob/85b076cdd4900aef24b821f267150a6a096347bd/src/chunk-download.ts#L25)

___

### stringifyJson

• `Optional` **stringifyJson**: (`data`: `unknown`) => `string`

User-defined JSON-stringifying function.

Use-cases:
1. Stringify JSON with a custom `replacer` function.

**`Default`**

```ts
JSON.stringify()
```

**`Example`**

```
import ky from 'ky';
import {DateTime} from 'luxon';

const json = await ky('https://example.com', {
    stringifyJson: data => JSON.stringify(data, (key, value) => {
        if (key.endsWith('_at')) {
            return DateTime.fromISO(value).toSeconds();
        }

        return value;
    })
}).json();
```

#### Type declaration

▸ (`data`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

##### Returns

`string`

#### Inherited from

Options.stringifyJson

#### Defined in

node_modules/.pnpm/ky@1.3.0/node_modules/ky/distribution/types/options.d.ts:71

___

### throwHttpErrors

• `Optional` **throwHttpErrors**: `boolean`

Throw an `HTTPError` when, after following redirects, the response has a non-2xx status code. To also throw for redirects instead of following them, set the [`redirect`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) option to `'manual'`.

Setting this to `false` may be useful if you are checking for resource availability and are expecting error responses.

Note: If `false`, error responses are considered successful and the request will not be retried.

**`Default`**

```ts
true
```

#### Inherited from

Options.throwHttpErrors

#### Defined in

node_modules/.pnpm/ky@1.3.0/node_modules/ky/distribution/types/options.d.ts:146

___

### timeout

• `Optional` **timeout**: `number` \| ``false``

Timeout in milliseconds for getting a response, including any retries. Can not be greater than 2147483647.
If set to `false`, there will be no timeout.

**`Default`**

```ts
10000
```

#### Inherited from

Options.timeout

#### Defined in

node_modules/.pnpm/ky@1.3.0/node_modules/ky/distribution/types/options.d.ts:132

___

### url

• **url**: `string`

download the url content

#### Defined in

[packages/ai-tool-downloader/src/chunk-download.ts:13](https://github.com/isdk/ai-tool-download.js/blob/85b076cdd4900aef24b821f267150a6a096347bd/src/chunk-download.ts#L13)

___

### window

• `Optional` **window**: ``null``

Can only be null. Used to disassociate request from any Window.

#### Inherited from

Options.window

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.dom.d.ts:1698
