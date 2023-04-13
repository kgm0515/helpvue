import fs from 'fs'

/**
 * 匹配svg，返回默认导出的svg源文件
 * @param {*} options
 * @returns
 */
const createSvgPlugin = (options = { matchReg: '' }) => {
  return {
    name: 'vite-plugin-svg',
    transform(code, id) {
      if (options.matchReg.test(id)) {
        const svgCode = fs.readFileSync(id)
        return `export default \`${svgCode}\``
      }
    }
  }
}

export { createSvgPlugin }
