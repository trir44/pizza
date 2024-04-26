import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ufu's cunty website",
  description: "mr wilson on the beat",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Sidebar :3',
        items: [
          { text: 'Who is Kira?', link: '/who-is-kira' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'about:blank' },
      { icon: 'twitter', link: 'about:blank' },
      { icon: 'instagram', link: 'about:blank' },
    ]
  }
})
