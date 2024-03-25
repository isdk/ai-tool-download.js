import path from 'path'
import { createServer } from 'http-server'
import { findPort } from './test/find-port'

let server
export async function setup({provide}) {
  server = globalThis.__vitest_server__ || createServer({
    root: path.join(__dirname, 'res'),
  })
  const port = await findPort('8088')
  const host = '127.0.0.1'
  const url = `http://${host}:${port}/`
  server.listen({port, host})
  server.url = url
  provide('server-url', url)
}

let teardownHappened = false

export async function teardown() {
  if (teardownHappened) throw new Error('teardown called twice')
  teardownHappened = true
  return new Promise((resolve) => {
    console.log('Closing server...');
    server.server.close(() => {
      console.log('Server closed');
      resolve();
    })
  })

}