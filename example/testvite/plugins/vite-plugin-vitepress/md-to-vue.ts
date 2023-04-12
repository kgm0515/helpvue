import { resolve } from 'path'
// import { createMarkdownRenderer } from 'vitepress'
import type { MarkdownRenderer, MarkdownEnv } from 'vitepress'
import { Parser } from './parser'

export const mdToVue = (parser: Parser, code: string, id: string) => {
  const relativePath = resolve(parser.config.root ?? process.cwd(), id)
  const env: MarkdownEnv = {
    path: id,
    relativePath,
    cleanUrls: true // 'without-subfolders'
  }
  const html = parser?.md?.render(code, env)
  // html转vue
  const { sfcBlocks } = env
  const result = [`<template><div class="vp-doc">${html}</div></template>`, sfcBlocks?.scriptSetup?.content ?? '', ...(sfcBlocks?.styles?.map((v) => v?.content || '') ?? [])].join('\n')
  return result
}
