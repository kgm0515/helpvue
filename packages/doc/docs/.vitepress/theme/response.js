/** 这是一个生成响应式样式文件的脚本 */
const fs = require('fs')
const path = require('path')

// 读取css源文件
const resCss = fs.readFileSync(path.join(__dirname, './response.txt')).toString()
// 按照行分割成数组
const resCssLines = resCss
  .split('\r\n')
  .filter((item) => !!item)
  .map((item) => item.replaceAll(' ', ' '))

// 定义基本的没提查询变量
const originStr = `
// 使用案例: <img src="/img/rabit.jpeg" class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 el:w-1/5">
// 媒体查询
// .sm -> min-width: 370px
// .md -> min-width: 576px
// .lg -> min-width: 768px
// .xl -> min-width: 960px
// .el -> min-width: 1280px
// 开始--------------------------------------
${resCssLines.join('\r\n')}
@media (min-width: 370px) {
${resCssLines.map((item) => '  .sm\\:' + item.slice('1')).join('\r\n')}
}
@media (min-width: 576px) {
${resCssLines.map((item) => '  .md\\:' + item.slice('1')).join('\r\n')}
}
@media (min-width: 768px) {
${resCssLines.map((item) => '  .lg\\:' + item.slice('1')).join('\r\n')}
}
@media (min-width: 960px) {
${resCssLines.map((item) => '  .xl\\:' + item.slice('1')).join('\r\n')}
}
@media (min-width: 1280px) {
${resCssLines.map((item) => '  .el\\:' + item.slice('1')).join('\r\n')}
}
`
console.log(originStr)
fs.writeFileSync(path.join(__dirname, './response.css'), originStr)
