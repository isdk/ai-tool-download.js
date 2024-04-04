import path from 'path'
// import { createServer } from 'http-server'
import { fastify } from 'fastify';
import { fastifyStatic } from '@fastify/static';
import { findPort } from './find-port'

let server
export async function setup({provide}) {
  server = globalThis.__vitest_server__ || createServer({
    root: path.join(__dirname, 'res'),
    // exposeHeadRoutes: false,
    // exposeHeadRoute: false,
    // wildcard: false, // without this the content-length should be always 0, already fixed in 7.0.3
    setHeaders(res, path, stat) {
      // console.log('🚀 ~ setHeaders ~ path:', path, res, stat)
      // res.setHeader('X-content-length', stat.size)
    },
    // acceptRanges: true,
    // prefix: '/res/',
  })
  const port = await findPort('8089')
  const host = '127.0.0.1'
  // const url = `http://${host}:${port}/res/`
  const url = `http://${host}:${port}/`
  await server.listen({port, host, exposeHeadRoutes: false})
  server.url = url
  // can not provide server for this is in another process
  provide('server-url', url)
  // console.log(server.printRoutes({ includeHooks: true, includeMeta: ['errorHandler'] }))

}

let teardownHappened = false

export async function teardown() {
  if (teardownHappened) throw new Error('teardown called twice')
  teardownHappened = true
  await server.close()
}

function createServer(options) {
  const server = fastify(options)
  options = { ...options }
  if (options.root) {
    server.register(fastifyStatic, options)
  }
  return server
}