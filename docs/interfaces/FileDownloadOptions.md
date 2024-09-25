[**@isdk/ai-tool-downloader**](../README.md) • **Docs**

***

[@isdk/ai-tool-downloader](../globals.md) / FileDownloadOptions

# Interface: FileDownloadOptions

## Extends

- `CustomBaseFileDownloadOptions`

## Properties

### aborter?

> `optional` **aborter**: `AbortController`

#### Inherited from

`CustomBaseFileDownloadOptions.aborter`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:35](https://github.com/isdk/ai-tool-download.js/blob/513ac95661c0bfeec424a264c269c7a69d0aa2aa/src/base-file-download.ts#L35)

***

### agent?

> `optional` **agent**: `any`

#### Inherited from

`CustomBaseFileDownloadOptions.agent`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:37](https://github.com/isdk/ai-tool-download.js/blob/513ac95661c0bfeec424a264c269c7a69d0aa2aa/src/base-file-download.ts#L37)

***

### body?

> `optional` **body**: `null` \| `BodyInit`

A BodyInit object or null to set request's body.

#### Inherited from

`CustomBaseFileDownloadOptions.body`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.dom.d.ts:1694

***

### cache?

> `optional` **cache**: `RequestCache`

A string indicating how the request will interact with the browser's cache to set request's cache.

#### Inherited from

`CustomBaseFileDownloadOptions.cache`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.dom.d.ts:1696

***

### chunkSizeInBytes?

> `optional` **chunkSizeInBytes**: `number`

The size of each chunk.

#### Inherited from

`CustomBaseFileDownloadOptions.chunkSizeInBytes`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:29](https://github.com/isdk/ai-tool-download.js/blob/513ac95661c0bfeec424a264c269c7a69d0aa2aa/src/base-file-download.ts#L29)

***

### cleanTempFile?

> `optional` **cleanTempFile**: `boolean`

#### Inherited from

`CustomBaseFileDownloadOptions.cleanTempFile`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:34](https://github.com/isdk/ai-tool-download.js/blob/513ac95661c0bfeec424a264c269c7a69d0aa2aa/src/base-file-download.ts#L34)

***

### concurrency?

> `optional` **concurrency**: `number`

The number of concurrent chunk downloads.

#### Inherited from

`CustomBaseFileDownloadOptions.concurrency`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:25](https://github.com/isdk/ai-tool-download.js/blob/513ac95661c0bfeec424a264c269c7a69d0aa2aa/src/base-file-download.ts#L25)

***

### credentials?

> `optional` **credentials**: `RequestCredentials`

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### Inherited from

`CustomBaseFileDownloadOptions.credentials`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.dom.d.ts:1698

***

### destinationFolder?

> `optional` **destinationFolder**: `string`

The folder where the downloaded file will be saved.

#### Inherited from

`CustomBaseFileDownloadOptions.destinationFolder`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:33](https://github.com/isdk/ai-tool-download.js/blob/513ac95661c0bfeec424a264c269c7a69d0aa2aa/src/base-file-download.ts#L33)

***

### fetch()?

> `optional` **fetch**: (`input`, `init`?) => `Promise`\<`Response`\>

User-defined `fetch` function.
Has to be fully compatible with the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) standard.

Use-cases:
1. Use custom `fetch` implementations like [`isomorphic-unfetch`](https://www.npmjs.com/package/isomorphic-unfetch).
2. Use the `fetch` wrapper function provided by some frameworks that use server-side rendering (SSR).

#### Parameters

• **input**: `Input`

• **init?**: `RequestInit`

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

`CustomBaseFileDownloadOptions.fetch`

#### Defined in

node\_modules/.pnpm/ky@1.7.2/node\_modules/ky/distribution/types/options.d.ts:187

***

### filepath?

> `optional` **filepath**: `string`

#### Inherited from

`CustomBaseFileDownloadOptions.filepath`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:21](https://github.com/isdk/ai-tool-download.js/blob/513ac95661c0bfeec424a264c269c7a69d0aa2aa/src/base-file-download.ts#L21)

***

### headers?

> `optional` **headers**: `KyHeadersInit`

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

`CustomBaseFileDownloadOptions.headers`

#### Defined in

node\_modules/.pnpm/ky@1.7.2/node\_modules/ky/distribution/types/options.d.ts:242

***

### hooks?

> `optional` **hooks**: `Hooks`

Hooks allow modifications during the request lifecycle. Hook functions may be async and are run serially.

#### Inherited from

`CustomBaseFileDownloadOptions.hooks`

#### Defined in

node\_modules/.pnpm/ky@1.7.2/node\_modules/ky/distribution/types/options.d.ts:138

***

### integrity?

> `optional` **integrity**: `string`

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

#### Inherited from

`CustomBaseFileDownloadOptions.integrity`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.dom.d.ts:1702

***

### json?

> `optional` **json**: `unknown`

Shortcut for sending JSON. Use this instead of the `body` option.

Accepts any plain object or value, which will be `JSON.stringify()`'d and sent in the body with the correct header set.

#### Inherited from

`CustomBaseFileDownloadOptions.json`

#### Defined in

node\_modules/.pnpm/ky@1.7.2/node\_modules/ky/distribution/types/options.d.ts:26

***

### keepalive?

> `optional` **keepalive**: `boolean`

A boolean to set request's keepalive.

#### Inherited from

`CustomBaseFileDownloadOptions.keepalive`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.dom.d.ts:1704

***

### limit?

> `optional` **limit**: `LimitFunction`

#### Defined in

[packages/ai-tool-downloader/src/file-download.ts:6](https://github.com/isdk/ai-tool-download.js/blob/513ac95661c0bfeec424a264c269c7a69d0aa2aa/src/file-download.ts#L6)

***

### method?

> `optional` **method**: `LiteralUnion`\<`HttpMethod`, `string`\>

HTTP method used to make the request.

Internally, the standard methods (`GET`, `POST`, `PUT`, `PATCH`, `HEAD` and `DELETE`) are uppercased in order to avoid server errors due to case sensitivity.

#### Inherited from

`CustomBaseFileDownloadOptions.method`

#### Defined in

node\_modules/.pnpm/ky@1.7.2/node\_modules/ky/distribution/types/options.d.ts:206

***

### mode?

> `optional` **mode**: `RequestMode`

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### Inherited from

`CustomBaseFileDownloadOptions.mode`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.dom.d.ts:1708

***

### onDownloadProgress()?

> `optional` **onDownloadProgress**: (`progress`, `chunk`) => `void`

Download progress event handler.

#### Parameters

• **progress**: `DownloadProgress`

• **chunk**: `Uint8Array`

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

`CustomBaseFileDownloadOptions.onDownloadProgress`

#### Defined in

node\_modules/.pnpm/ky@1.7.2/node\_modules/ky/distribution/types/options.d.ts:168

***

### overwrite?

> `optional` **overwrite**: `boolean`

#### Inherited from

`CustomBaseFileDownloadOptions.overwrite`

#### Defined in

[packages/ai-tool-downloader/src/base-file-download.ts:36](https://github.com/isdk/ai-tool-download.js/blob/513ac95661c0bfeec424a264c269c7a69d0aa2aa/src/base-file-download.ts#L36)

***

### parseJson()?

> `optional` **parseJson**: (`text`) => `unknown`

User-defined JSON-parsing function.

Use-cases:
1. Parse JSON via the [`bourne` package](https://github.com/hapijs/bourne) to protect from prototype pollution.
2. Parse JSON with [`reviver` option of `JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).

#### Parameters

• **text**: `string`

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

`CustomBaseFileDownloadOptions.parseJson`

#### Defined in

node\_modules/.pnpm/ky@1.7.2/node\_modules/ky/distribution/types/options.d.ts:46

***

### prefixUrl?

> `optional` **prefixUrl**: `string` \| `URL`

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

`CustomBaseFileDownloadOptions.prefixUrl`

#### Defined in

node\_modules/.pnpm/ky@1.7.2/node\_modules/ky/distribution/types/options.d.ts:100

***

### priority?

> `optional` **priority**: `RequestPriority`

#### Inherited from

`CustomBaseFileDownloadOptions.priority`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.dom.d.ts:1709

***

### redirect?

> `optional` **redirect**: `RequestRedirect`

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Inherited from

`CustomBaseFileDownloadOptions.redirect`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.dom.d.ts:1711

***

### referrer?

> `optional` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### Inherited from

`CustomBaseFileDownloadOptions.referrer`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.dom.d.ts:1713

***

### referrerPolicy?

> `optional` **referrerPolicy**: `ReferrerPolicy`

A referrer policy to set request's referrerPolicy.

#### Inherited from

`CustomBaseFileDownloadOptions.referrerPolicy`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.dom.d.ts:1715

***

### retry?

> `optional` **retry**: `number` \| `RetryOptions`

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

`CustomBaseFileDownloadOptions.retry`

#### Defined in

node\_modules/.pnpm/ky@1.7.2/node\_modules/ky/distribution/types/options.d.ts:127

***

### searchParams?

> `optional` **searchParams**: `SearchParamsOption`

Search parameters to include in the request URL. Setting this will override all existing search parameters in the input URL.

Accepts any value supported by [`URLSearchParams()`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams).

#### Inherited from

`CustomBaseFileDownloadOptions.searchParams`

#### Defined in

node\_modules/.pnpm/ky@1.7.2/node\_modules/ky/distribution/types/options.d.ts:77

***

### signal?

> `optional` **signal**: `null` \| `AbortSignal`

An AbortSignal to set request's signal.

#### Inherited from

`CustomBaseFileDownloadOptions.signal`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.dom.d.ts:1717

***

### stringifyJson()?

> `optional` **stringifyJson**: (`data`) => `string`

User-defined JSON-stringifying function.

Use-cases:
1. Stringify JSON with a custom `replacer` function.

#### Parameters

• **data**: `unknown`

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

`CustomBaseFileDownloadOptions.stringifyJson`

#### Defined in

node\_modules/.pnpm/ky@1.7.2/node\_modules/ky/distribution/types/options.d.ts:71

***

### throwHttpErrors?

> `optional` **throwHttpErrors**: `boolean`

Throw an `HTTPError` when, after following redirects, the response has a non-2xx status code. To also throw for redirects instead of following them, set the [`redirect`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) option to `'manual'`.

Setting this to `false` may be useful if you are checking for resource availability and are expecting error responses.

Note: If `false`, error responses are considered successful and the request will not be retried.

#### Default

```ts
true
```

#### Inherited from

`CustomBaseFileDownloadOptions.throwHttpErrors`

#### Defined in

node\_modules/.pnpm/ky@1.7.2/node\_modules/ky/distribution/types/options.d.ts:148

***

### timeout?

> `optional` **timeout**: `number` \| `false`

Timeout in milliseconds for getting a response, including any retries. Can not be greater than 2147483647.
If set to `false`, there will be no timeout.

#### Default

```ts
10000
```

#### Inherited from

`CustomBaseFileDownloadOptions.timeout`

#### Defined in

node\_modules/.pnpm/ky@1.7.2/node\_modules/ky/distribution/types/options.d.ts:134

***

### window?

> `optional` **window**: `null`

Can only be null. Used to disassociate request from any Window.

#### Inherited from

`CustomBaseFileDownloadOptions.window`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.dom.d.ts:1719
