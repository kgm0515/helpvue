import { MarkdownRenderer, createMarkdownRenderer } from 'vitepress'
import type { ResolvedConfig } from 'vite'
import type { UserOptions } from './typing'
import { mdToVue } from './md-to-vue'

export class Parser {
  public md: MarkdownRenderer | undefined

  constructor(public readonly config: ResolvedConfig, public readonly options: UserOptions) {}

  // 生产md这个渲染函数
  public async setupRender() {
    const srcDir = this.config.root ?? process.cwd()
    const base = this.config.root ?? '/'
    this.md = await createMarkdownRenderer(srcDir, this.options.markdown, base)
  }

  // 执行.md文件转.vue
  public async transform(code: string, id: string) {
    if (id.endsWith('.md')) {
      return await mdToVue(this, code, id)
    }
    return code
  }
}
