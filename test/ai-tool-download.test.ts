import fastify from 'fastify';
import { inject } from 'vitest'
import path from 'path';
import fs from 'fs'

import { ResClientTools as ClientTools, type ResServerFuncParams, ResServerTools as ToolFunc, wait, xxhashAsStr } from '@isdk/ai-tool'
import { findPort } from './util/find-port'
import {DownloadFunc} from '../src/ai-tool-download'
import { FileDownload } from '../src/file-download';
import { compareStr } from './util/compare-str';
import { rmFile } from './util/rm-file';

const chunkSizeInBytes = 1024 * 512; // 512KB
FileDownload.minSplitSizeInBytes = chunkSizeInBytes

const xyj  = 'xyj.txt'
const xyjA = 'xyj_annotated.txt'
const three= 'the3Kingdoms.txt'
const tmpFilePath = '/tmp/' + xyj
const tmpDir = tmpFilePath + '.temp'
const src = fs.readFileSync(path.join(__dirname, 'res', xyj))
const totalBytes = src.length

declare module 'vitest' {
  export interface ProvidedContext {
    'server-url': string
  }
}

describe('Tool Download class', () => {
  let apiRoot: string // = 'http://localhost:3000/api'
  const server = fastify()
  const url: string = inject('server-url')

  beforeAll(async () => {
    server.get('/api', async function(request, reply){
      reply.send(ToolFunc)
    })

    server.all('/api/:toolId/:id?', async function(request, reply){
      const { toolId, id } = request.params as any;
      const func = ToolFunc.get(toolId)
      if (!func) {
        reply.code(404).send({error: toolId + ' Not Found', data: {what: toolId}})
      }
      let params: any
      const method = request.method
      if (method === 'GET' || method == 'DELETE') {
        params = (request.query as any).p
        if (params) {
          params = JSON.parse(params)
        } else {
          params = {}
        }
      } else {
        params = request.body;
        if (typeof params === 'string') {params = JSON.parse(params)}
      }
      params._req = request.raw
      params._res = reply.raw
      if (id !== undefined) {params.id = id}

      // const result = JSON.stringify(await func.run(params))
      try {
        let result = await func.run(params)
        result = JSON.stringify(result)
        // console.log('🚀 ~ server.all ~ result:', result)

        reply.send(result)
        // reply.send({params: request.params as any, query: request.query, url: request.url})
      } catch(e) {
        if (e.code !== undefined) {
          const err: any = {...e, error: e.message}
          console.log('🚀 ~ server.all ~ err:', err)
          if (err.stack) {delete err.stack}
          if (typeof err.code === 'number') {
            reply.code(err.code).send(JSON.stringify(err))
          } else {
            reply.code(500).send(JSON.stringify(err))
          }
        } else if (e.message) {
          reply.code(500).send({error: e.message})
        } else {
          reply.code(500).send({error: e})
        }
      }
    })
    await wait(10)
    const port = await findPort(3000) as number
    const result = await server.listen({port})
    console.log('server listening on ', result)
    apiRoot = `http://localhost:${port}/api`

    ToolFunc.apiRoot = apiRoot
    const res = new DownloadFunc('download')
    res.rootDir = '/tmp/'
    res.chunkSizeInBytes = chunkSizeInBytes
    res.register()

    ClientTools.apiRoot = apiRoot
    await ClientTools.loadFrom()
  })

  afterAll(async () => {
    await server.close()
  })

  beforeEach(async () => {
    const result = ClientTools.get('download')
    // clean all completed tasks
    await result.clean()
    rmFile(tmpFilePath)
    rmFile('/tmp/' + xyjA)
    rmFile('/tmp/' + three)
  })

  it('should list download tasks', async () => {
    const result = ClientTools.get('download')
    const xyjUrl = url + xyj
    const expectId = xxhashAsStr(xyjUrl)
    let res = await result.post({url: xyjUrl, start: true})
    expect(res).toHaveProperty('id', expectId)
    res = await result.post({url: url + xyjA})
    expect(res).toHaveProperty('id')
    res = await result.list()
    expect(res).toStrictEqual([expectId, xxhashAsStr(url + xyjA)])
    res = await result.post({url: url + three})
    await wait(100)
    res = await result.get({id: expectId})
    expect(res).toHaveProperty('status', 'completed')
    res = await result.list()
    expect(res).toStrictEqual([xxhashAsStr(url + xyjA), xxhashAsStr(url + three)])
    res = await result.list({finished: true}) // include finished too.
    expect(res).toStrictEqual([xxhashAsStr(url + xyjA), xxhashAsStr(url + three), expectId])
    res = await result.clean()
    expect(res).toStrictEqual([{id: expectId, url: xyjUrl, filepath: xyj}])
    res = await result.list({finished: true})
    expect(res).toStrictEqual([xxhashAsStr(url + xyjA), xxhashAsStr(url + three)])
    res = await result.clean({paused: true})
    expect(res).toStrictEqual([{id: xxhashAsStr(url + xyjA), url: url + xyjA, filepath: xyjA}, {id: xxhashAsStr(url + three), url: url + three, filepath: three}])
    res = await result.list()
    expect(res).toStrictEqual([])
    res = await result.post({url: xyjUrl, start: true})
    await wait(5)
    res = await result.clean({downloading: true})
    expect(res).toStrictEqual([{id: expectId, url: xyjUrl, filepath: xyj}])
    res = await result.list()
    expect(res).toStrictEqual([])
  })

  it('should download file', async () => {
    const result = ClientTools.get('download')
    console.log('🚀 ~ it ~ ClientTools:', Object.keys(ClientTools.items))
    expect(result).toBeInstanceOf(ClientTools)
    const xyjUrl = url + xyj
    const expectId = xxhashAsStr(xyjUrl)
    let res = await result.post({url: xyjUrl})
    expect(res).toHaveProperty('id', expectId)
    let id = res.id
    res = await result.get({id})
    expect(res).toHaveProperty('id', expectId)
    expect(res).toHaveProperty('url', xyjUrl)
    res = await result.start({id})
    expect(res).toHaveProperty('id', expectId)
    await wait(5)
    res = await result.get({id})
    expect(res).toHaveProperty('status', 'downloading')
    await wait(100)
    res = await result.get({id})
    expect(res).toHaveProperty('status', 'completed')
    const content = fs.readFileSync(tmpFilePath)
    expect(content.length).toEqual(src.length)
    expect(compareStr(src, content)).toBeTruthy()
   });


  it('should download file with resume', async () => {
    const result = ClientTools.get('download')
    const xyjUrl = url + xyj
    const expectId = xxhashAsStr(xyjUrl)
    let res = await result.post({url: xyjUrl, start: true})
    expect(res).toHaveProperty('id', expectId)
    let id = res.id
    res = await result.get({id})
    expect(res).toHaveProperty('id', expectId)
    expect(res).toHaveProperty('url', xyjUrl)
    await wait(5)
    res = await result.get({id})
    expect(res).toHaveProperty('status', 'downloading')
    expect(res.chunks).toHaveLength(5)
    res = await result.stop({id})
    expect(res).toHaveProperty('status', 'paused')
    res = await result.get({id})
    expect(res).toHaveProperty('status', 'paused')

    res = await result.start({id})
    expect(res).toHaveProperty('id', expectId)
    await wait(100)
    res = await result.get({id})
    expect(res).toHaveProperty('status', 'completed')
    const content = fs.readFileSync(tmpFilePath)
    expect(content.length).toEqual(src.length)
    expect(compareStr(src, content)).toBeTruthy()
  })

  it('should clean temp file after removing task ', async () => {
    const result = ClientTools.get('download')
    const xyjUrl = url + xyj
    const expectId = xxhashAsStr(xyjUrl)
    let res = await result.post({url: xyjUrl, start: true})
    expect(res).toHaveProperty('id', expectId)
    let id = res.id
    res = await result.get({id})
    expect(res).toHaveProperty('id', expectId)
    expect(res).toHaveProperty('url', xyjUrl)
    await wait(5)
    res = await result.get({id})
    expect(res).toHaveProperty('status', 'downloading')
    res = await result.stop({id})
    expect(res).toHaveProperty('status', 'paused')
    expect(fs.existsSync(path.join(tmpDir, '0.part'))).toBeTruthy()
    res = await result.delete({id})
    expect(res).toHaveProperty('id', expectId)
    expect(res).toHaveProperty('status', 'paused')
    expect(fs.existsSync(tmpDir)).toBeFalsy()
  })
});
