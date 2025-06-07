import fastify from 'fastify'
import { inject } from 'vitest'
import path from 'path'
import fs from 'fs'
import EventSource from 'eventsource'
global.EventSource = EventSource as any

import {
  ResClientTools,
  type ResServerFuncParams,
  ResServerTools,
  sleep,
  xxhashAsStr,
  event, // event bus for server
  backendEventable,
  EventToolFunc,
  EventBusName,
  eventClient as eventOnClient,
  eventServer as eventOnServer,
  EventClient,
  ClientTools,
  ServerTools,
  ToolFunc,
  Funcs,
} from '@isdk/ai-tool'

import { compareStr, findPort, rmFile } from '@isdk/ai-tool/test/util'

import {DownloadFunc, DownloadName, DownloadProgressEventName, DownloadStatusEventName} from '../src/ai-tool-download'
import { FileDownload } from '../src/file-download'
import {EventEmitter} from 'events-ex'

const chunkSizeInBytes = 1024 * 512; // 512KB
FileDownload.minSplitSizeInBytes = chunkSizeInBytes

const mini = 'mini.txt'
const xyj  = 'xyj.txt'
const xyjA = 'xyj_annotated.txt'
const cgt  = 'caigentang.txt'
const three= 'the3Kingdoms.txt'
const xyjTmpFilePath = '/tmp/' + xyj
const xyjTmpDir = xyjTmpFilePath + '.temp'
const xyjSrc = fs.readFileSync(path.join(__dirname, 'res', xyj))
const totalBytes = xyjSrc.length
const eventBus4Client = new EventToolFunc(EventBusName)

declare module 'vitest' {
  export interface ProvidedContext {
    'server-url': string
  }
}

describe('Tool Download class', () => {
  let apiRoot: string // = 'http://localhost:3000/api'
  let downloader: DownloadFunc
  let DefaultDownloadConig: any
  const server = fastify()
  const url: string = inject('server-url')

  beforeAll(async () => {
    const ServerToolItems: {[name:string]: ServerTools|ToolFunc} = {}
    Object.setPrototypeOf(ServerToolItems, ToolFunc.items)
    ServerTools.items = ServerToolItems

    const ClientToolItems: Funcs = {}
    Object.setPrototypeOf(ClientToolItems, ToolFunc.items)
    ClientTools.items = ClientToolItems

    // the event-bus for server
    ResServerTools.register(event)
    // the event-bus for client
    ResClientTools.register(eventBus4Client)
    backendEventable(ResClientTools)
    backendEventable(ResServerTools)

    server.get('/api', async function(request, reply){
      reply.send(ResServerTools)
    })

    server.all('/api/:toolId/:id?', async function(request, reply){
      const { toolId, id } = request.params as any;
      const func = ResServerTools.get(toolId)
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
      // console.log('🚀 ~ server.all ~ toolId:', toolId, params, id)
      params._req = request.raw
      params._res = reply.raw
      if (id !== undefined) {params.id = id}

      // const result = JSON.stringify(await func.run(params))
      try {
        let result = await func.run(params)
        if (!func.isStream(params)) {
          result = JSON.stringify(result)
          // console.log('🚀 ~ server.all ~ result:', result)
          reply.send(result)
          // reply.send({params: request.params as any, query: request.query, url: request.url})
        } else if (result) {
          reply.send(result)
        // } else if (func.result && func.result !== 'any' && func.result !== 'void') {
        //   // maybe should valid result type
        //   reply.code(500).send({error: 'no result'})
        // } else {
        //   reply.send()
        }
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
    await sleep(10)
    const port = await findPort(3000) as number
    const result = await server.listen({port})
    console.log('server listening on ', result)
    apiRoot = `http://localhost:${port}/api`


    ResServerTools.register(eventOnServer)
    ResServerTools.setApiRoot(apiRoot)
    downloader = new DownloadFunc(DownloadName)
    downloader.rootDir = '/tmp/'
    downloader.chunkSizeInBytes = chunkSizeInBytes
    ResServerTools.register(downloader)

    ResClientTools.register(eventOnClient)
    ResClientTools.setApiRoot(apiRoot)
    await ResClientTools.loadFrom()

    DefaultDownloadConig = downloader.$config()
  })

  afterAll(async () => {
    await server.close()
    delete (ClientTools as any).items
    delete (ServerTools as any).items
  })

  beforeEach(async () => {
    const result = ResClientTools.get(DownloadName)
    // clean all completed tasks
    await result.clean()
    rmFile(xyjTmpFilePath)
    rmFile('/tmp/' + xyjA)
    rmFile('/tmp/' + three)
    rmFile('/tmp/' + cgt)
    rmFile('/tmp/' + mini)
    rmFile('/tmp/aa')
    downloader.$clean({paused: true, downloading: true})
    downloader.$config(DefaultDownloadConig)
  })

  it('should list download tasks', async () => {
    const result = ResClientTools.get(DownloadName)
    const xyjUrl = url + xyj
    const expectId = xxhashAsStr(xyjUrl)
    let res = await result.post({url: xyjUrl, start: true})
    expect(res).toHaveProperty('id', expectId)
    res = await result.post({url: url + xyjA})
    expect(res).toHaveProperty('id')
    res = await result.list()
    expect(res).toStrictEqual([expectId, xxhashAsStr(url + xyjA)])
    res = await result.post({url: url + three})
    do {
      await sleep(10)
      res = await result.get({id: expectId})
    } while (res.status === 'downloading')

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
    rmFile(xyjTmpFilePath)
    res = await result.post({url: xyjUrl, start: true})
    await sleep(5)
    res = await result.clean({downloading: true})
    expect(res).toStrictEqual([{id: expectId, url: xyjUrl, filepath: xyj}])
    res = await result.list()
    expect(res).toStrictEqual([])
  })

  it('should download a short file', async () => {
    const result = ResClientTools.get(DownloadName)
    expect(result).toBeInstanceOf(ResClientTools)
    const cgtUrl = url + cgt
    const expectId = xxhashAsStr(cgtUrl)
    let res = await result.post({url: cgtUrl})
    expect(res).toHaveProperty('id', expectId)
    let id = res.id
    res = await result.get({id})
    expect(res).toHaveProperty('id', expectId)
    expect(res).toHaveProperty('url', cgtUrl)
    res = await result.start({id})
    expect(res).toHaveProperty('id', expectId)
    res = await result.get({id})
    expect(res).toHaveProperty('status', 'downloading')
    await sleep(100)
    res = await result.get({id})
    expect(res).toHaveProperty('status', 'completed')
    const content = fs.readFileSync('/tmp/'+cgt)
    const src = fs.readFileSync(path.join(__dirname, 'res', cgt))
    expect(content.length).toEqual(src.length)
    expect(compareStr(src, content)).toBeTruthy()
   });

   it('should download file', async () => {
    const result = ResClientTools.get(DownloadName)
    expect(result).toBeInstanceOf(ResClientTools)
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
    await sleep(5)
    res = await result.get({id})
    expect(res).toHaveProperty('status', 'downloading')
    while(res.status === 'downloading') {
      await sleep(30)
      res = await result.get({id})
    }
    res = await result.get({id})
    expect(res).toHaveProperty('status', 'completed')
    const content = fs.readFileSync(xyjTmpFilePath)
    expect(content.length).toEqual(xyjSrc.length)
    expect(compareStr(xyjSrc, content)).toBeTruthy()
   });

   it.skip('should download file from remote', async () => {
    rmFile('/tmp/tiny-random-bloomforcausallm.q2_k.gguf')
    const result = ResClientTools.get(DownloadName)
    expect(result).toBeInstanceOf(ResClientTools)
    const xyjUrl = 'https://huggingface.co/afrideva/tiny-random-BloomForCausalLM-GGUF/resolve/main/tiny-random-bloomforcausallm.q2_k.gguf'
    const expectId = xxhashAsStr(xyjUrl)
    let res = await result.post({url: xyjUrl})
    expect(res).toHaveProperty('id', expectId)
    let id = res.id
    res = await result.get({id})
    expect(res).toHaveProperty('id', expectId)
    expect(res).toHaveProperty('url', xyjUrl)
    res = await result.start({id})
    expect(res).toHaveProperty('id', expectId)
    res = await result.get({id})
    while (res.status === 'pending') {
      await sleep(500)
      res = await result.get({id})
    }
    expect(res).toHaveProperty('status', 'downloading')
    while (res.status === 'downloading') {
      await sleep(500)
      res = await result.get({id})
    }
    res = await result.get({id})
    expect(res).toHaveProperty('status', 'completed')
    const content = fs.readFileSync('/tmp/tiny-random-bloomforcausallm.q2_k.gguf')
    expect(content.length).toEqual(130688)
    // expect(compareStr(src, content)).toBeTruthy()
   });

  it('should download file with resume', async () => {
    const result = ResClientTools.get(DownloadName)
    const xyjUrl = url + xyj
    const expectId = xxhashAsStr(xyjUrl)
    let res = await result.post({url: xyjUrl, start: true})
    expect(res).toHaveProperty('id', expectId)
    let id = res.id
    res = await result.get({id})
    expect(res).toHaveProperty('id', expectId)
    expect(res).toHaveProperty('url', xyjUrl)
    await sleep(30)
    res = await result.get({id})
    expect(res).toHaveProperty('status', 'downloading')
    expect(res.chunks).toHaveLength(5)
    res = await result.stop({id})
    expect(res).toHaveProperty('status', 'paused')
    res = await result.get({id})
    expect(res).toHaveProperty('status', 'paused')

    res = await result.start({id})
    expect(res).toHaveProperty('id', expectId)

    do {
      res = await result.get({id})
      await sleep(30)
    } while(res.status === 'downloading')


    res = await result.get({id})
    expect(res).toHaveProperty('status', 'completed')
    const content = fs.readFileSync(xyjTmpFilePath)
    expect(content.length).toEqual(xyjSrc.length)
    expect(compareStr(xyjSrc, content)).toBeTruthy()
  })

  it('should clean temp file after removing task ', async () => {
    const result = ResClientTools.get(DownloadName)
    const xyjUrl = url + xyj
    const expectId = xxhashAsStr(xyjUrl)
    let res = await result.post({url: xyjUrl, start: true})
    expect(res).toHaveProperty('id', expectId)
    let id = res.id
    res = await result.get({id})
    expect(res).toHaveProperty('id', expectId)
    expect(res).toHaveProperty('url', xyjUrl)
    await sleep(30)
    res = await result.get({id})
    expect(res).toHaveProperty('status', 'downloading')
    res = await result.stop({id})
    expect(res).toHaveProperty('status', 'paused')
    expect(fs.existsSync(path.join(xyjTmpDir, '0.part'))).toBeTruthy()
    res = await result.delete({id})
    expect(res).toHaveProperty('id', expectId)
    expect(res).toHaveProperty('status', 'paused')
    expect(fs.existsSync(xyjTmpDir)).toBeFalsy()
  })

  it('should config downloader', async () => {
    const result = ResClientTools.get(DownloadName)
    const xyjUrl = url + xyj
    const expectId = xxhashAsStr(xyjUrl)
    const dnConfig = await result.config()
    expect(dnConfig).toStrictEqual({
      autoScaleDownloads: false,
      autostartQueue: false,
      chunkSizeInBytes: chunkSizeInBytes,
      concurrency: 3,
      rootDir: '/tmp/',
      cleanTempFile: true,
    })
    let res = await result.config({
      chunkSizeInBytes: 1024 * 1024 * 1,
      concurrency: 1,
      rootDir: '/tmp/aa',
      cleanTempFile: false,
    })
    res = await result.config()
    expect(res).toStrictEqual({
      autoScaleDownloads: false,
      autostartQueue: false,
      chunkSizeInBytes: 1024 * 1024 * 1,
      concurrency: 1,
      rootDir: '/tmp/aa',
      cleanTempFile: false,
    })
    try {
      res = await result.post({url: xyjUrl, start: true})
      await sleep(200)
      let id = res.id
      res = await result.get({id})
      expect(res).toHaveProperty('status', 'completed')
      expect(fs.existsSync('/tmp/aa/'+xyj)).toBeTruthy()
      expect(fs.existsSync('/tmp/aa/'+xyj+'.temp')).toBeTruthy()
      rmFile('/tmp/aa')
      rmFile(xyjTmpFilePath)
      await result.clean()
      await result.post({url: xyjUrl, start: true, order: 1})
      await expect(result.post({url: url + xyjA, start: true, order: 0})).rejects.toThrow('Concurrency limit reached')
      res = await result.config({
        autoScaleDownloads: true,
      })
      res = await result.start({url: url + xyjA})
      await sleep(5)
      res = await result.list({downloadingOnly: true})
      expect(res).toHaveLength(1)
      expect(res).toStrictEqual([ xxhashAsStr(url + xyj) ])
      expect(fs.existsSync('/tmp/aa/'+xyj+'.temp')).toBeTruthy()
      res = await result.config({
        cleanTempFile: true,
      })
      await result.clean({downloading: true, paused: true})
      expect(fs.existsSync('/tmp/aa/'+xyj+'.temp')).toBeFalsy()
      rmFile('/tmp/aa')
    } finally {
      // await result.config(dnConfig)
    }
    await result.clean()
    await result.config(dnConfig)
    await result.post({url: xyjUrl, start: true})
    await result.post({url: url + xyjA, start: true})
    await sleep(0)
    res = await result.list({downloadingOnly: true})
    expect(res).toHaveLength(2)
    expect(res).toStrictEqual([ expectId, xxhashAsStr(url + xyjA) ])
    expect(fs.existsSync(xyjTmpDir)).toBeTruthy()
    await result.clean({downloading: true})
    expect(fs.existsSync(xyjTmpDir)).toBeFalsy()
  })

  it('should use config autostart', async () => {
    const result = ResClientTools.get(DownloadName)
    const xyjUrl = url + xyj
    const dnConfig = await result.config()
    try {
      await result.config({
        concurrency: 1,
        autoScaleDownloads: true,
        autostartQueue: true,
      })
      await result.post({url: xyjUrl, start: true})
      await result.post({url: url + xyjA, start: true})
      await sleep(1)
      let res = await result.list({downloadingOnly: true})
      expect(res).toHaveLength(1)
      expect(res).toStrictEqual([ xxhashAsStr(url + xyj) ])
    } finally {
      // await result.config(dnConfig)
      await result.clean({downloading: true, paused: true})
    }
  })

  it('should use event', async () => {
    const result = ResClientTools.get(DownloadName)
    const xyjUrl = url + xyj
    const expectId = xxhashAsStr(xyjUrl)
    const event = ResClientTools.get('event') as EventClient
    // await event.init([DownloadProgressEventName +':'+expectId, DownloadStatusEventName+':'+expectId])
    await event.subscribe([DownloadProgressEventName +':'+expectId, DownloadStatusEventName+':'+expectId])
    await sleep(60)
    try {
      // result.on(`/^${DownloadName}[:]/`, function() {
      //   console.log('event this', this)
      //   console.log('event', arguments)
      // })
      let data: any
      let typ: string|undefined
      let c = 0
      result.on(`/^${DownloadName}:status:/`, function(...dat: any[]) {
        c++
        data = dat
        typ = this.type
      })
      await result.post({url: xyjUrl, start: true})
      await sleep(5)
      expect(c).toStrictEqual(1)
      expect(typ).toStrictEqual(DownloadStatusEventName+':'+expectId)
      expect(data).toStrictEqual([ 'Download', 'downloading', {filepath: 'xyj.txt',  id: expectId, url: xyjUrl } ])
      await result.stop({url: xyjUrl})
      await sleep(5)
      expect(c).toStrictEqual(3)
      expect(data).toStrictEqual([ 'Download', 'paused', {filepath: 'xyj.txt',  id: expectId, url: xyjUrl } ])
    } finally {
      event.active = false
    }
  })
});
