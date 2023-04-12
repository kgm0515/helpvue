import type { PluginOption } from 'vite'
import { normalizePath } from 'vite'

const VItePluginVitePress = (options?: {}): PluginOption => {
  return {
    name: 'vite-plugin-vitepress',
    // enforce: 'pre', // 控制执行时机："pre" | "post"
    // apply: 'build', // 控制执行模式："serve" | "build"
    configResolved(config) {
      console.log('vite-plugin-vitepress 运行了---', normalizePath(process.cwd()))
    }
  }
}

export { VItePluginVitePress }
export default VItePluginVitePress
