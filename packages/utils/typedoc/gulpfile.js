const TypeDoc = require('typedoc')
const path = require('path')
const fs = require('fs')
const rename = require('gulp-rename')
const { src, dest, series } = require('gulp')

// 指定代码入口
const entries = [rootPath('./src/index.ts')]

// 根目录
function rootPath(...args) {
  return path.join(__dirname, '..', ...args)
}

/** 生成 sidebar 目录配置项 */
async function resolveConfig(jsonDir) {
  const result = []
  // 读取文档数据结构的 json 文件
  const buffer = await fs.promises.readFile(jsonDir, 'utf8')
  const data = JSON.parse(buffer.toString())
  if (!data.children || data.children.length <= 0) {
    return
  }
  data.children.forEach((module) => {
    let moduleConfig = {}
    if (!['Module', 'Namespace'].includes(module.kindString)) {
      // Module 作为一级导航
      moduleConfig = { text: module.name, link: '' }
      if (module.kindString === 'Class') {
        moduleConfig = { text: `Class: ${module.name}`, link: getClassPath(module.name) }
      } else if (module.kindString === 'Interface') {
        moduleConfig = { text: `Interface: ${module.name}`, link: getInterfacePath(module.name) }
      } else if (module.kindString === 'Type alias') {
        moduleConfig = { text: `Type: ${module.name}`, link: getTypePath(module.name) }
      } else if (module.kindString === 'Function') {
        moduleConfig = { text: `Function: ${module.name}`, link: getFunctionPath(module.name) }
      } else if (module.kindString === 'Variable') {
        moduleConfig = { text: `Variable: ${module.name}`, link: getVariablesPath(module.name) }
      }
    } else {
      // Module 作为一级导航
      moduleConfig = { text: `Namespace: ${module.name}`, collapsed: false, items: [{ text: `${module.name}`, link: getModulePath(module.name) }] }
      module.children.forEach((sub) => {
        // 类、接口、类型、函数作为二级导航
        if (sub.kindString === 'Class') {
          moduleConfig.items.push({ text: `Class: ${sub.name}`, link: getClassPath(module.name, sub.name) })
        } else if (sub.kindString === 'Interface') {
          moduleConfig.items.push({ text: `Interface: ${sub.name}`, link: getInterfacePath(module.name, sub.name) })
        } else if (sub.kindString === 'Type alias') {
          moduleConfig.items.push({ text: `Type: ${sub.name}`, link: getTypePath(module.name, sub.name) })
        } else if (sub.kindString === 'Function') {
          moduleConfig.items.push({ text: `Function: ${sub.name}`, link: getFunctionPath(module.name, sub.name) })
        } else if (sub.kindString === 'Variable') {
          moduleConfig.items.push({ text: `Variable: ${sub.name}`, link: getVariablesPath(module.name, sub.name) })
        }
      })
    }
    result.push(moduleConfig)
  })

  // 转换成的侧边栏数据输出到 doc/_utilsSidebar.js
  await fs.promises.writeFile(path.join(__dirname, '_utilsSidebar.js'), `export default ${JSON.stringify(result)}`, 'utf8')
}

function transformModuleName(name) {
  return name.replace(/\//g, '_')
}

function getModulePath(name) {
  return path.join('/utils/modules', `${transformModuleName(name)}`).replace(/\\/g, '/')
}

function getClassPath(moduleName, subName) {
  return path.join('/utils/classes', `${transformModuleName(moduleName)}${subName ? '-' + subName : ''}`).replace(/\\/g, '/')
}

function getInterfacePath(moduleName, subName) {
  return path.join('/utils/interfaces', `${transformModuleName(moduleName)}${subName ? '-' + subName : ''}`).replace(/\\/g, '/')
}

function getTypePath(moduleName, subName) {
  return path.join('/utils/types', `${transformModuleName(moduleName)}${subName ? '-' + subName : ''}`).replace(/\\/g, '/')
}

function getFunctionPath(moduleName, subName) {
  return path.join('/utils/functions', `${transformModuleName(moduleName)}${subName ? '-' + subName : ''}`).replace(/\\/g, '/')
}

function getVariablesPath(moduleName, subName) {
  return path.join('/utils/variables', `${transformModuleName(moduleName)}${subName ? '-' + subName : ''}`).replace(/\\/g, '/')
}

// 主函数
async function main() {
  // 初始化 TypeDoc
  const app = new TypeDoc.Application()

  // 使 TypeDoc 拥有读取 tsconfig.json 的能力
  app.options.addReader(new TypeDoc.TSConfigReader())

  // 指定代码入口
  // 指定 TypeDoc 配置项
  app.bootstrap({
    entryPoints: entries,
    readme: 'none',
    tsconfig: rootPath('tsconfig.json'),
    plugin: ['typedoc-plugin-markdown'],
    allReflectionsHaveOwnDocument: true
  })

  const project = app.convert()

  if (project) {
    // 输出产物位置
    const outputDir = path.join(__dirname, 'utils')

    // 生成文档内容
    await app.generateDocs(project, outputDir)

    // 生成文档数据结构
    const jsonDir = path.join(outputDir, 'documentation.json')
    await app.generateJson(project, jsonDir)

    // 解析数据结构，生成 VitePress Config 所需的 Sidebar 配置项
    await resolveConfig(jsonDir)
  }
}

// 生成文档
const genFile = async (cb) => {
  await main().catch(console.error)
  cb()
}
// 拷贝文件
const copyUtils = () => {
  return src(path.join(__dirname, './utils/**/*.md'))
    .pipe(
      rename(function (path) {
        // Returns a completely new object, make sure you return all keys needed!
        return {
          dirname: path.dirname,
          basename: path.basename.split('.').join('-'),
          extname: path.extname
        }
      })
    )
    .pipe(dest(path.join(__dirname, '../../doc/docs/utils/')))
}
// 拷贝文件
const copySidebar = () => {
  return src(path.join(__dirname, './_utilsSidebar.js')).pipe(dest(path.join(__dirname, '../../doc/docs/.vitepress/')))
}

module.exports = {
  genDocument: series(genFile, copyUtils, copySidebar)
}
