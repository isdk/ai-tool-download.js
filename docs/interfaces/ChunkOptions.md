[**@isdk/ai-tool-downloader**](../README.md)

***

[@isdk/ai-tool-downloader](../globals.md) / ChunkOptions

# Interface: ChunkOptions

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/chunk-download.ts:9](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/chunk-download.ts#L9)

## Extends

- `Options`

## Properties

### aborter?

> `optional` **aborter**: `AbortController`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/chunk-download.ts:36](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/chunk-download.ts#L36)

***

### agent?

> `optional` **agent**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/chunk-download.ts:37](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/chunk-download.ts#L37)

***

### body?

> `optional` **body**: `null` \| `BodyInit`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.dom.d.ts:1861

A BodyInit object or null to set request's body.

#### Inherited from

`Options.body`

***

### cache?

> `optional` **cache**: `RequestCache`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.dom.d.ts:1863

A string indicating how the request will interact with the browser's cache to set request's cache.

#### Inherited from

`Options.cache`

***

### credentials?

> `optional` **credentials**: `RequestCredentials`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.dom.d.ts:1865

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### Inherited from

`Options.credentials`

***

### endByte?

> `optional` **endByte**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/chunk-download.ts:29](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/chunk-download.ts#L29)

The end byte of the chunk.

***

### fetch()?

> `optional` **fetch**: (`input`, `init?`) => `Promise`\<`Response`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/ky@1.7.5/node\_modules/ky/distribution/types/options.d.ts:187

User-defined `fetch` function.
Has to be fully compatible with the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) standard.

Use-cases:
1. Use custom `fetch` implementations like [`isomorphic-unfetch`](https://www.npmjs.com/package/isomorphic-unfetch).
2. Use the `fetch` wrapper function provided by some frameworks that use server-side rendering (SSR).

#### Parameters

##### input

`Input`

##### init?

`RequestInit`

#### Returns

`Promise`\<`Response`\>

#### Default

```ts
fetch
```

#### Example

```
import ky from 'ky';
import fetch from 'isomorphic-unfetch';

const json = await ky('https://example.com', {fetch}).json();
```

#### Inherited from

`Options.fetch`

***

### filepath

> **filepath**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/chunk-download.ts:17](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/chunk-download.ts#L17)

save the content to the filePath

***

### headers?

> `optional` **headers**: `KyHeadersInit`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/ky@1.7.5/node\_modules/ky/distribution/types/options.d.ts:242

HTTP headers used to make the request.

You can pass a `Headers` instance or a plain object.

You can remove a header with `.extend()` by passing the header with an `undefined` value.

#### Example

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

`Options.headers`

***

### hooks?

> `optional` **hooks**: `Hooks`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/ky@1.7.5/node\_modules/ky/distribution/types/options.d.ts:138

Hooks allow modifications during the request lifecycle. Hook functions may be async and are run serially.

#### Inherited from

`Options.hooks`

***

### index?

> `optional` **index**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/chunk-download.ts:21](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/chunk-download.ts#L21)

The index of the chunk.

***

### integrity?

> `optional` **integrity**: `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.dom.d.ts:1869

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

#### Inherited from

`Options.integrity`

***

### json?

> `optional` **json**: `unknown`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/ky@1.7.5/node\_modules/ky/distribution/types/options.d.ts:26

Shortcut for sending JSON. Use this instead of the `body` option.

Accepts any plain object or value, which will be `JSON.stringify()`'d and sent in the body with the correct header set.

#### Inherited from

`Options.json`

***

### keepalive?

> `optional` **keepalive**: `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.dom.d.ts:1871

A boolean to set request's keepalive.

#### Inherited from

`Options.keepalive`

***

### method?

> `optional` **method**: `LiteralUnion`\<`HttpMethod`, `string`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/ky@1.7.5/node\_modules/ky/distribution/types/options.d.ts:206

HTTP method used to make the request.

Internally, the standard methods (`GET`, `POST`, `PUT`, `PATCH`, `HEAD` and `DELETE`) are uppercased in order to avoid server errors due to case sensitivity.

#### Inherited from

`Options.method`

***

### mode?

> `optional` **mode**: `RequestMode`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.dom.d.ts:1875

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### Inherited from

`Options.mode`

***

### onDownloadProgress()?

> `optional` **onDownloadProgress**: (`progress`, `chunk`) => `void`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/ky@1.7.5/node\_modules/ky/distribution/types/options.d.ts:168

Download progress event handler.

#### Parameters

##### progress

`DownloadProgress`

##### chunk

`Uint8Array`

Note: It's empty for the first call.

#### Returns

`void`

#### Example

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

#### Inherited from

`Options.onDownloadProgress`

***

### overwrite?

> `optional` **overwrite**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/chunk-download.ts:33](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/chunk-download.ts#L33)

overwrite the existing file.

***

### parseJson()?

> `optional` **parseJson**: (`text`) => `unknown`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/ky@1.7.5/node\_modules/ky/distribution/types/options.d.ts:46

User-defined JSON-parsing function.

Use-cases:
1. Parse JSON via the [`bourne` package](https://github.com/hapijs/bourne) to protect from prototype pollution.
2. Parse JSON with [`reviver` option of `JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).

#### Parameters

##### text

`string`

#### Returns

`unknown`

#### Default

```ts
JSON.parse()
```

#### Example

```
import ky from 'ky';
import bourne from '@hapijs/bourne';

const json = await ky('https://example.com', {
    parseJson: text => bourne(text)
}).json();
```

#### Inherited from

`Options.parseJson`

***

### port?

> `optional` **port**: `MessagePort`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/chunk-download.ts:35](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/chunk-download.ts#L35)

***

### prefixUrl?

> `optional` **prefixUrl**: `string` \| `URL`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/ky@1.7.5/node\_modules/ky/distribution/types/options.d.ts:100

A prefix to prepend to the `input` URL when making the request. It can be any valid URL, either relative or absolute. A trailing slash `/` is optional and will be added automatically, if needed, when it is joined with `input`. Only takes effect when `input` is a string. The `input` argument cannot start with a slash `/` when using this option.

Useful when used with [`ky.extend()`](#kyextenddefaultoptions) to create niche-specific Ky-instances.

Notes:
 - After `prefixUrl` and `input` are joined, the result is resolved against the [base URL](https://developer.mozilla.org/en-US/docs/Web/API/Node/baseURI) of the page (if any).
 - Leading slashes in `input` are disallowed when using this option to enforce consistency and avoid confusion about how the `input` URL is handled, given that `input` will not follow the normal URL resolution rules when `prefixUrl` is being used, which changes the meaning of a leading slash.

#### Example

```
import ky from 'ky';

// On https://example.com

const response = await ky('unicorn', {prefixUrl: '/api'});
//=> 'https://example.com/api/unicorn'

const response = await ky('unicorn', {prefixUrl: 'https://cats.com'});
//=> 'https://cats.com/unicorn'
```

#### Inherited from

`Options.prefixUrl`

***

### priority?

> `optional` **priority**: `RequestPriority`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.dom.d.ts:1876

#### Inherited from

`Options.priority`

***

### redirect?

> `optional` **redirect**: `RequestRedirect`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.dom.d.ts:1878

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Inherited from

`Options.redirect`

***

### referrer?

> `optional` **referrer**: `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.dom.d.ts:1880

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### Inherited from

`Options.referrer`

***

### referrerPolicy?

> `optional` **referrerPolicy**: `ReferrerPolicy`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.dom.d.ts:1882

A referrer policy to set request's referrerPolicy.

#### Inherited from

`Options.referrerPolicy`

***

### retry?

> `optional` **retry**: `number` \| `RetryOptions`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/ky@1.7.5/node\_modules/ky/distribution/types/options.d.ts:127

An object representing `limit`, `methods`, `statusCodes`, `afterStatusCodes`, and `maxRetryAfter` fields for maximum retry count, allowed methods, allowed status codes, status codes allowed to use the [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) time, and maximum [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) time.

If `retry` is a number, it will be used as `limit` and other defaults will remain in place.

If the response provides an HTTP status contained in `afterStatusCodes`, Ky will wait until the date or timeout given in the [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) header has passed to retry the request. If `Retry-After` is missing, the non-standard [`RateLimit-Reset`](https://www.ietf.org/archive/id/draft-polli-ratelimit-headers-02.html#section-3.3) header is used in its place as a fallback. If the provided status code is not in the list, the [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) header will be ignored.

If `maxRetryAfter` is set to `undefined`, it will use `options.timeout`. If [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) header is greater than `maxRetryAfter`, it will cancel the request.

By default, delays between retries are calculated with the function `0.3 * (2 ** (attemptCount - 1)) * 1000`, where `attemptCount` is the attempt number (starts from 1), however this can be changed by passing a `delay` function.

Retries are not triggered following a timeout.

#### Example

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

`Options.retry`

***

### searchParams?

> `optional` **searchParams**: `SearchParamsOption`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/ky@1.7.5/node\_modules/ky/distribution/types/options.d.ts:77

Search parameters to include in the request URL. Setting this will override all existing search parameters in the input URL.

Accepts any value supported by [`URLSearchParams()`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams).

#### Inherited from

`Options.searchParams`

***

### signal?

> `optional` **signal**: `null` \| `AbortSignal`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.dom.d.ts:1884

An AbortSignal to set request's signal.

#### Inherited from

`Options.signal`

***

### skipCheck?

> `optional` **skipCheck**: `Headers`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/chunk-download.ts:34](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/chunk-download.ts#L34)

***

### startByte?

> `optional` **startByte**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/chunk-download.ts:25](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/chunk-download.ts#L25)

The start byte of the chunk.

***

### stringifyJson()?

> `optional` **stringifyJson**: (`data`) => `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/ky@1.7.5/node\_modules/ky/distribution/types/options.d.ts:71

User-defined JSON-stringifying function.

Use-cases:
1. Stringify JSON with a custom `replacer` function.

#### Parameters

##### data

`unknown`

#### Returns

`string`

#### Default

```ts
JSON.stringify()
```

#### Example

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

#### Inherited from

`Options.stringifyJson`

***

### throwHttpErrors?

> `optional` **throwHttpErrors**: `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/ky@1.7.5/node\_modules/ky/distribution/types/options.d.ts:148

Throw an `HTTPError` when, after following redirects, the response has a non-2xx status code. To also throw for redirects instead of following them, set the [`redirect`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) option to `'manual'`.

Setting this to `false` may be useful if you are checking for resource availability and are expecting error responses.

Note: If `false`, error responses are considered successful and the request will not be retried.

#### Default

```ts
true
```

#### Inherited from

`Options.throwHttpErrors`

***

### timeout?

> `optional` **timeout**: `number` \| `false`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/ky@1.7.5/node\_modules/ky/distribution/types/options.d.ts:134

Timeout in milliseconds for getting a response, including any retries. Can not be greater than 2147483647.
If set to `false`, there will be no timeout.

#### Default

```ts
10000
```

#### Inherited from

`Options.timeout`

***

### url

> **url**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-downloader/src/chunk-download.ts:13](https://github.com/isdk/ai-tool-download.js/blob/05bb53b628f06761f19ed5d6dbc02c381e992ef5/src/chunk-download.ts#L13)

download the url content

***

### window?

> `optional` **window**: `null`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.dom.d.ts:1886

Can only be null. Used to disassociate request from any Window.

#### Inherited from

`Options.window`
