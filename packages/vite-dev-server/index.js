const koa = require('koa')
const fs = require('fs')
const { promises } = require('fs')
const { resolve } = require('path')

const app = new koa()
const port = 5173

app.use(async (ctx) => {
  console.log(`ctx`, ctx.request, ctx.response)
  if (ctx.request.url === '/') {
    const indexHtml = await promises.readFile(resolve(__dirname, './index.html'))
    ctx.response.set('Content-Type', 'text/html')
    ctx.response.body = indexHtml
  } else if (ctx.request.url === '/src/main.js') {
    const jsContent = await promises.readFile(resolve(__dirname, './src/main.js'))
    ctx.response.set('Content-Type', 'text/javascript')
    ctx.response.body = jsContent
  } else if (ctx.request.url === '/src/app.vue') {
    const vueContent = await promises.readFile(resolve(__dirname, './src/app.vue'))
    ctx.response.set('Content-Type', 'text/javascript')
    ctx.response.body = vueContent
  }
})

app.listen(port, () => {
  console.log(`vite dev server listen on ${port},   http://127.0.0.1:${port}/`)
})
