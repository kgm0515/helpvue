import { DefaultTheme, defineConfig } from 'vitepress'

/**
 * 顶部导航栏
 */
const nav: DefaultTheme.NavItem[] = [
  { text: 'pc组件库', link: '/pvue/' },
  { text: 'utils工具库', link: '/utils/' },
  {
    text: '项目指引',
    items: [
      { text: '指引', link: '/guide/' },
      { text: '使用markdown', link: '/guide/markdown' },
      { text: '使用vue', link: '/guide/useVue' },
      { text: '加载资源', link: '/guide/loadResource' }
    ]
  }
]

/** 左侧侧边栏 */
const sidebar: DefaultTheme.Sidebar = {
  '/pvue': [
    {
      text: '开始',
      collapsed: false,
      items: [
        { text: '简介', link: '/pvue/' },
        { text: '快速上手', link: '/pvue/quick' }
      ]
    },
    {
      text: '基础组件',
      collapsed: false,
      items: [{ text: 'Button 按钮', link: '/pvue/button' }]
    }
  ],
  '/utils': [
    {
      text: '开始',
      collapsed: false,
      items: [
        { text: '简介', link: '/utils/' },
        { text: '快速上手', link: '/utils/quick' }
      ]
    }
  ]
}

export default defineConfig({
  title: '帮助文档',
  description: '用于辅助vue开发的工具库和组件库',
  lang: 'cn-ZH',
  base: '/helpvue/', // 公共基础路径，打包或所有资源会添加这个路径
  lastUpdated: true,
  cleanUrls: true, // 路由路径不需要带.html后缀
  ignoreDeadLinks: true,
  outDir: '../public',
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['link', { rel: 'shortcut icon', href: '/helpvue/favicon.ico', crossorigin: '' }]
    // [ 'script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' } ]
  ],
  // srcDir: './docs', // 文档根目录, vitepress dev docs 默认就是docs
  // 路径重写
  rewrites: {
    // 'components/:pkg/:page': ':pkg/:page'
  },
  markdown: {
    // theme: { light: 'vitesse-light', dark: 'vitesse-dark' }
    theme: 'material-theme-palenight'
  },
  themeConfig: {
    logo: '/img/logo.jpg',
    siteTitle: '帮助文档',
    outline: [1, 3],
    outlineTitle: 'On this page',
    socialLinks: [{ icon: 'github', link: 'https://github.com/kgm0515/helpvue' }],
    lastUpdatedText: 'Updated Date',
    editLink: {
      pattern: 'https://github.com/kgm0515/helpvue/tree/main/packages/doc/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav,
    sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Evan You'
    }
    // docFooter: { prev: '上一页', next: '下一页' }
    // carbonAds: { code: 'your-carbon-code', placement: 'your-carbon-placement' }
  }
})
