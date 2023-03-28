import { DefaultTheme, defineConfig } from 'vitepress'

/**
 * 顶部导航栏
 */
const nav: DefaultTheme.NavItem[] = [
  { text: 'pc组件库', link: '/pvue/' },
  { text: 'utils工具库', link: '/utils/' }
  /** 顶部导航下拉菜单按如下方式 */
  // {
  //   text: '下拉菜单',
  //   items: [
  //     { text: 'Item A', link: '/item-1' },
  //     { text: 'Item B', link: '/item-2' },
  //   ]
  // }
]

/**
 * 左侧侧边栏
 */
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
  ignoreDeadLinks: true,
  outDir: '../public',
  head: [
    // ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  // srcDir: './docs', // 文档根目录, vitepress dev docs 默认就是docs
  cleanUrls: true, // 路由路径不需要带.html后缀
  // 路径重写
  rewrites: {
    // 'packages/pkg-a/src/pkg-a-code.md': 'pkg-a/pkg-a-code.md',
    // 'packages/pkg-b/src/pkg-b-code.md': 'pkg-b/pkg-b-code.md',
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    lastUpdatedText: 'Updated Date',
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },
    nav,
    sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
    // carbonAds: { code: 'your-carbon-code', placement: 'your-carbon-placement' }
  }
})
