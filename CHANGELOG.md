# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [0.1.5](https://github.com/isdk/ai-tool-download.js/compare/v0.1.4...v0.1.5) (2024-12-17)

## [0.1.4](https://github.com/isdk/ai-tool-download.js/compare/v0.1.3...v0.1.4) (2024-12-15)

## [0.1.3](https://github.com/isdk/ai-tool-download.js/compare/v0.1.2...v0.1.3) (2024-09-30)

## [0.1.2](https://github.com/isdk/ai-tool-download.js/compare/v0.1.1...v0.1.2) (2024-09-25)

## [0.1.1](https://github.com/isdk/ai-tool-download.js/compare/v0.1.0...v0.1.1) (2024-09-17)


### Bug Fixes

* destinationFolder should be cwd if no input ([2dc25ea](https://github.com/isdk/ai-tool-download.js/commit/2dc25eaa43b4bda0b8aacddca68c0ef546b52187))

## [0.1.0](https://github.com/isdk/ai-tool-download.js/compare/v0.0.18...v0.1.0) (2024-09-16)


### ⚠ BREAKING CHANGES

* add waitForCompletion option

### Features

* add waitForCompletion option ([c919e17](https://github.com/isdk/ai-tool-download.js/commit/c919e17ce54509d2fa99fa359cd46320295cc012))

## [0.0.18](https://github.com/isdk/ai-tool-download.js/compare/v0.0.17...v0.0.18) (2024-09-02)

## [0.0.17](https://github.com/isdk/ai-tool-download.js/compare/v0.0.16...v0.0.17) (2024-09-02)

## [0.0.16](https://github.com/isdk/ai-tool-download.js/compare/v0.0.15...v0.0.16) (2024-09-01)

## [0.0.15](https://github.com/isdk/ai-tool-download.js/compare/v0.0.14...v0.0.15) (2024-08-31)

## [0.0.14](https://github.com/isdk/ai-tool-download.js/compare/v0.0.13...v0.0.14) (2024-08-28)

## [0.0.13](https://github.com/isdk/ai-tool-download.js/compare/v0.0.12...v0.0.13) (2024-08-23)

## [0.0.12](https://github.com/isdk/ai-tool-download.js/compare/v0.0.11...v0.0.12) (2024-08-18)

## [0.0.11](https://github.com/isdk/ai-tool-download.js/compare/v0.0.10...v0.0.11) (2024-08-16)

## [0.0.10](https://github.com/isdk/ai-tool-download.js/compare/v0.0.9...v0.0.10) (2024-08-14)

## [0.0.9](https://github.com/isdk/ai-tool-download.js/compare/v0.0.8...v0.0.9) (2024-08-11)

## [0.0.8](https://github.com/isdk/ai-tool-download.js/compare/v0.0.7...v0.0.8) (2024-07-08)


### Bug Fixes

* **BaseFileDownload:** the progress event should return the all transferredBytes and the whole file totalSize instead of current transferredBytes ([d37a329](https://github.com/isdk/ai-tool-download.js/commit/d37a329924300524b85b27370a06ebff9539eef2))

## [0.0.7](https://github.com/isdk/ai-tool-download.js/compare/v0.0.6...v0.0.7) (2024-06-13)

## [0.0.6](https://github.com/isdk/ai-tool-download.js/compare/v0.0.5...v0.0.6) (2024-06-13)


### Features

* add agent option ([0c0b4cf](https://github.com/isdk/ai-tool-download.js/commit/0c0b4cff51ad45952c8912b531b0f346fb0d92c6))

## [0.0.5](https://github.com/isdk/ai-tool-download.js/compare/v0.0.4...v0.0.5) (2024-06-11)

## [0.0.4](https://github.com/isdk/ai-tool-download.js/compare/v0.0.3...v0.0.4) (2024-06-09)


### Bug Fixes

* **test:** should test one by one ([4e1a03f](https://github.com/isdk/ai-tool-download.js/commit/4e1a03f3da38384c603ab30407cb4b7d433b8f3a))

## [0.0.3](https://github.com/isdk/ai-tool-download.js/compare/v0.0.2...v0.0.3) (2024-06-07)


### Bug Fixes

* **build:** the @isdk/ai-tool-download is not allowed by npmjs.org ([f1e296b](https://github.com/isdk/ai-tool-download.js/commit/f1e296b66d1f86f2ca75ad0b94aa574a888c7010))

## 0.0.2 (2024-06-07)


### Features

* add concatStreamTo ([1a1e950](https://github.com/isdk/ai-tool-download.js/commit/1a1e950eff58946efd0169f76a32162928558a67))
* add const download to export DownloadFunc ([fdc4941](https://github.com/isdk/ai-tool-download.js/commit/fdc4941cd64020864fe97c0dca46f1bc40548ef4))
* add DownloadFunc for AIToolFunc ([cfe6152](https://github.com/isdk/ai-tool-download.js/commit/cfe6152cd522ac88ec46a457895481ebdd41d612))
* add msg to stop(WIP) ([fa35c0c](https://github.com/isdk/ai-tool-download.js/commit/fa35c0c5c817c37b9b98bef5e5346ba2ed8a051e))
* add overwrite option to BaseFileDownload ([833c6a5](https://github.com/isdk/ai-tool-download.js/commit/833c6a563ee39dd551a3a3bd0ab99451e0541585))
* **BaseFileDownload:** add cleanTemp and cleanTempFile option to stop ([d819663](https://github.com/isdk/ai-tool-download.js/commit/d81966375873a361b7ab67e922d59207a9420b66))
* **BaseFileDownload:** add cleanTempFile option to stop() ([6227565](https://github.com/isdk/ai-tool-download.js/commit/6227565d739c69b56ef852773e04294b1444c0f5))
* **ChunkDownload:** add status, progress events supports ([063a3bd](https://github.com/isdk/ai-tool-download.js/commit/063a3bdaa69dd001c9cf797ea83552c6beb4f46c))
* **ChunkDownload:** add toJSON() support ([008c08a](https://github.com/isdk/ai-tool-download.js/commit/008c08ab03d72982aed5372428bfecf2462de2fe))
* **DownloadFunc:** add autoScaleDownloads and order supports ([a519b06](https://github.com/isdk/ai-tool-download.js/commit/a519b06fc54efc86fe1aa538a4a5e351732f92ee))
* **DownloadFunc:** add downloadingOnly, pausedOnly options to list ([c28a7c2](https://github.com/isdk/ai-tool-download.js/commit/c28a7c2fe7b47c8c3c996ca2f8a59efa5acff47f))
* **DownloadFunc:** add new cleanTempFile, chunkSizeInBytes option to DownloadFunc ([14353cc](https://github.com/isdk/ai-tool-download.js/commit/14353ccb4c9e8405827cfb485e9ae4c30782017c))
* export utils and chunk-download ([591129a](https://github.com/isdk/ai-tool-download.js/commit/591129a3be3a658573dead00cac8cc2b544c2c6f))
* **ThreadFileDownload:** WIP ([cf104f2](https://github.com/isdk/ai-tool-download.js/commit/cf104f28199bb8c200cab8efd97c4eed86185a76))


### Bug Fixes

* **BaseFileDownload:** can not download with no splited file and check exists file size without overwrite ([3246b1b](https://github.com/isdk/ai-tool-download.js/commit/3246b1bed75527469ce29a8f9f8b9d2cad0cb89c))
* **BaseFileDownload:** do not overwrite size > 0 file when overwite is false ([2d32e3b](https://github.com/isdk/ai-tool-download.js/commit/2d32e3bbffca9bb497d0a80bf5e57acadfc14518))
* can pass absolution path if it's in rootDir and pass idInfo to event ([276b3f8](https://github.com/isdk/ai-tool-download.js/commit/276b3f88b42153908e119a06db424dd9428dc1a2))
* **ChunkDownload:** toJSON only export necessary options ([4330192](https://github.com/isdk/ai-tool-download.js/commit/43301922416386c7081762d8ff3dad078b4e0491))
* **DownloadFunc:** only autostart pending tasks ([55d2e9a](https://github.com/isdk/ai-tool-download.js/commit/55d2e9a4e97c329984dde35b9f0e1ea62cf4ce3d))
* **ts:** declare findport return value is number ([458fbe6](https://github.com/isdk/ai-tool-download.js/commit/458fbe6f9eaf224316f83f8baa847ef19214ac01))
* **ts:** id as string ([880cdde](https://github.com/isdk/ai-tool-download.js/commit/880cdde54d4d78d5acf5a0946a25cc2f89b994c7))
* **ts:** ts declaration error ([a80ee00](https://github.com/isdk/ai-tool-download.js/commit/a80ee00a458b954c62c00b3b70862d15bffaabb0))
