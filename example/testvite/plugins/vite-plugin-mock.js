const url = require('url')
const fs = require('fs')
const path = require('path')
const { normalizePath } = require('vite')

/**
 * 用于模拟接口数据
 * @param {*} options
 * @returns
 */
const viteMockServe = (
  options = {
    mockPath: 'mock', // 接口文件夹目录名
    localEnabled: command === 'serve' // 只在开发环境下面才启用
  }
) => ({
  name: 'vite-plugin-mock',
  configureServer(server) {
    // 加载全部mock数据
    const mockPath = normalizePath(path.resolve(process.cwd(), options.mockPath))
    const mockStat = fs.statSync(mockPath).isDirectory()
    const mockList = mockStat ? require(normalizePath(path.resolve(mockPath, 'index.js'))) : []
    server.middlewares.use((req, res, next) => {
      if (options.localEnabled && req.url.startsWith('/api')) {
        // 判断是否走模拟接口
        const { pathname, query: queryString, href } = url.parse(req.url)
        const method = req.method.toLowerCase()
        const headers = req.headers
        // 获取到符合当前请求的模拟数据接口
        const targetApi = mockList.filter((item) => !!item).find((item) => (item.method || 'get').toLowerCase() === method && pathname === item.url)
        const query = queryString
          ? queryString
              .split('&')
              .map((item) => item.split('='))
              .reduce((prev, cur) => {
                prev[cur[0]] = decodeURIComponent(cur[1])
                return prev
              }, {})
          : {}
        if (targetApi && typeof targetApi.response === 'function') {
          res.setHeader('Content-Type', 'application/json')
          let body = ''
          if (method === 'get') {
            // const result = targetApi.response(req); return res.end(JSON.stringify(result))
            const result = targetApi.response({ url: href, body, query, headers })
            return res.end(JSON.stringify(result))
          } else {
            const chuncks = []
            // 接收post参数
            req.on('data', (data) => chuncks.push(data))
            req.on('end', () => {
              body = JSON.parse(chuncks.toString())
              const result = targetApi.response({ url: href, body, query, headers })
              return res.end(JSON.stringify(result))
            })
            return
          }
        }
      }
      next()
    })
  }
})

export { viteMockServe }
