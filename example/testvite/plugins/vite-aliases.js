import fs from 'fs'
import path from 'path'
// 返回部分配置（推荐）
// 在解析 Vite 配置前调用。钩子接收原始用户配置（命令行选项指定的会与配置文件合并）和一个描述配置环境的变量，包含正在使用的 mode 和 command。
// 它可以返回一个将被深度合并到现有配置中的部分配置对象，或者直接改变配置（如果默认的合并不能达到预期的结果）
const ViteAliases = () => ({
  name: 'vite-aliases',
  config: (config, command) => {
    let srcPath = path.resolve(process.cwd(), 'src')
    let dirs = fs.readdirSync(srcPath)
    const alias = dirs
      .map((dirName) => {
        const tempPath = path.join(srcPath, dirName)
        const isDir = fs.lstatSync(tempPath).isDirectory()
        if (!isDir) return
        return { find: `@${dirName}`, replacement: tempPath }
      })
      .filter((item) => !!item)
    return {
      resolve: {
        alias // [ {find: '@assets',replacement: 'D:/demo/helpvue/example/testvite/src/assets' } ]
      }
    }
  }
})

export { ViteAliases }
