const fs = require('fs')
const path = require('path')
const { normalizePath } = require('vite')

// 判断路径是否是目录
const pathIsDirectory = (path = '') => {
  return fs.lstatSync(path).isDirectory()
}

// 判断路径是否是文件
const pathIsFile = (path = '') => {
  return fs.lstatSync(path).isDirectory()
}

/**
 * 获取文件夹下面的所有目录和文件名
 * @returns
 */
const getFolderChildren = (folderName = 'src') => {
  let srcPath = normalizePath(path.resolve(process.cwd(), folderName))
  const nameList = fs.readdirSync(srcPath)
  return nameList.map((tempName) => {
    const tempPath = normalizePath(path.join(srcPath, tempName))
    return { name: tempName, path: tempPath, isDir: pathIsDirectory(tempPath) }
  })
}

// 返回部分配置（推荐）
// 在解析 Vite 配置前调用。钩子接收原始用户配置（命令行选项指定的会与配置文件合并）和一个描述配置环境的变量，包含正在使用的 mode 和 command。
// 它可以返回一个将被深度合并到现有配置中的部分配置对象，或者直接改变配置（如果默认的合并不能达到预期的结果）
const ViteAliases = (
  arg = {
    keyName: '@'
  }
) => ({
  name: 'vite-aliases',
  config: (config, command) => {
    const folderDirs = getFolderChildren().filter((item) => item.isDir)
    const alias = folderDirs.map((info) => ({ find: `${arg.keyName}${info.name}`, replacement: info.path }))
    return { resolve: { alias } } // {resolve:{alias:[ {find: '@assets',replacement: 'D:/demo/helpvue/example/testvite/src/assets' } ]}}
  }
})

export { ViteAliases }
