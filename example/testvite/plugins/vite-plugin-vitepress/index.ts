import type { PluginOption } from 'vite'
import { normalizePath } from 'vite'
import { Parser } from './parser'
import type { UserOptions } from './typing'

const VitePluginVitePress = (options?: UserOptions): PluginOption => {
  const opt = options ?? {}
  let parser: Parser | undefined
  return {
    name: 'vite-plugin-vitepress',
    // enforce: 'pre', // 控制执行时机："pre" | "post"
    // apply: 'build', // 控制执行模式："serve" | "build"
    async configResolved(_config) {
      console.log('vite-plugin-vitepress 运行了---', normalizePath(process.cwd()))
      parser = new Parser(_config, opt)
      await parser.setupRender()
    },
    async transform(code: string, id: string) {
      return await parser.transform(code, id)
    }
  }
}

export { VitePluginVitePress }
export default VitePluginVitePress
