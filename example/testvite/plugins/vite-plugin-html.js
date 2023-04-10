const createHtmlPlugin = (options = { inject: { data: {} } }) => ({
  name: 'vite-plugin-html',
  transformIndexHtml: {
    enforce: 'pre', // 强制提前执行
    transform(html, ctx) {
      console.log(options)
      return html.replace(/<%= (.+?) %>/gi, (...arg) => {
        console.log(arg)
        return options.inject.data[arg[1]]
      })
    }
  }
})

export { createHtmlPlugin }
