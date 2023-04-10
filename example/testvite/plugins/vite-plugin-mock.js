/**
 * 用于模拟接口数据
 * @param {*} options
 * @returns
 */
const viteMockServe = (options = { inject: { data: {} } }) => ({
  name: 'vite-plugin-mock',
  transformIndexHtml: {
    enforce: 'pre', // 强制提前执行
    transform(html, ctx) {
      // console.log(options)
      return html.replace(/<%= (.+?) %>/gi, (...arg) => {
        return options.inject.data[arg[1]]
      })
    }
  }
})

export { viteMockServe }
