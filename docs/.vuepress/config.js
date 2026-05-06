import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'zh-CN',
  title: 'WorkBuddy 文档',
  description: '腾讯推出的全场景职场 AI 智能体桌面工作台',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],
  theme: defaultTheme({
    logo: '/images/logo.png',
    logoDark: '/images/logo.png',

    // 顶部导航栏
    navbar: [
      { text: 'IDE', link: '/' },
      { text: '插件', link: '/' },
      { text: 'CLI', link: '/' },
      { text: 'WorkBuddy', link: '/' },
      { text: 'WorkBuddy 小程序', link: '/' },
    ],

    // 左侧侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '入门指南',
          collapsible: false,
          children: [
            '/guide/README.md',
            '/guide/getting-started.md',
            '/guide/changelog.md',
            '/guide/claw-remote-control.md',
            '/guide/advanced/task-creation.md',
            '/guide/advanced/task-management.md',
            '/guide/advanced/task-chat.md',
            '/guide/results-viewing.md',
            '/guide/first-task.md',
          ]
        },
        {
          text: '从入门到精通指南',
          collapsible: true,
          children: [
            {
              text: '产品介绍',
              link: '/guide/product-intro.md',
            },
            {
              text: '安装指南',
              link: '/guide/installation.md',
            },
            {
              text: '功能说明',
              collapsible: true,
              children: [
                '/guide/features/natural-language.md',
                '/guide/features/auto-planning.md',
                '/guide/features/multimodal.md',
                '/guide/features/local-files.md',
                '/guide/features/new-task-bar.md',
              ]
            },
            {
              text: 'Claw',
              link: '/guide/claw.md',
            },
          ]
        },
      ]
    },

    // 右侧目录
    outline: {
      level: [2, 3],
      label: '快速导航'
    },

    editLink: false,
    lastUpdated: {
      text: '上次更新'
    },
    contributors: false,
    backToTop: true,
    selectLanguageText: '语言',
    selectLanguageName: '简体中文',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接'
    ],
    backToHome: '返回首页'
  }),

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              noResultsText: '无法找到相关结果',
              resetButtonTitle: '清除查询条件',
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭'
              }
            }
          }
        }
      },
      maxSuggestions: 10,
      hotKeys: ['ctrl', 'k']
    })
  ],

  markdown: {
    anchor: {
      level: [2, 3, 4],
      slugify: (str) => str.trim().toLowerCase().replace(/\s+/g, '-')
    },
    extractHeaders: {
      level: [2, 3, 4]
    }
  },

  bundlerConfig: {
    viteOptions: {
      server: {
        port: 8080,
        open: true
      }
    }
  }
})
