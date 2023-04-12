import { describe, it, expect } from 'vitest'
import { fileURLToPath } from 'url'
import { resolve } from 'path'
import testCode from './fixtures/test.md?raw'
import { Parser } from '../plugins/vite-plugin-vitepress/parser'
const srcDir = fileURLToPath(new URL('./fixtures', import.meta.url))
const testPath = resolve(srcDir, 'test.md')
console.log('srcDir', srcDir)

describe('md to vue', async () => {
  const parser = new Parser(
    {
      root: srcDir,
      base: '/'
    } as any,
    {}
  )
  await parser.setupRender()
  it('test md to vue', async () => {
    // md转html
    const source = await parser.transform(testCode, testPath)
    console.log(source)

    expect(source).toMatchInlineSnapshot(`
      "<template><div class=\\"vp-doc\\"><h1 id=\\"hello-world\\" tabindex=\\"-1\\">hello world <a class=\\"header-anchor\\" href=\\"#hello-world\\" aria-label=\\"Permalink to &quot;hello world&quot;\\">&ZeroWidthSpace;</a></h1>
      <p>this is test md to vue</p>
      </div></template>
      <script setup>
        import {ref} from 'vue'
        const a = 1
      </script>
      <style>
        a{
          color:red;
          fontSize: 15px;
        }
      </style>"
    `)
  })
})
