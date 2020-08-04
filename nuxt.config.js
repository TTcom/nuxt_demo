
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  pm2 启动命令：pm2 start npm --name "package 中的name" -- run start
  */
  mode: 'universal',
  server: {
    port: 3000, // default: 3000
    //host: ‘0.0.0.0’, // default: localhost
    },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [/^element-ui/],
  }
}
