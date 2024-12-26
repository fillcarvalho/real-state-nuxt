export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'real-state',
    htmlAttrs: {
      lang: 'pt'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: '/font-icons.css' },
        { rel: 'stylesheet', href: '/animate.css' },
        { rel: 'stylesheet', href: '/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: '/glightbox.css' },
        { rel: 'stylesheet', href: '/style.css' }
    ],
    script: [
      {
        src: '/accordion.js',
        // defer: true
      },

      {
        src: '/drawer.js',
        // defer: true
      },
      {
        src: '/swiper-bundle.min.js',
        // defer: true
      },
      {
        src: '/silder.js',
        // defer: true
      },
      {
        src: '/glightbox.min.js',
        // defer: true
      },
      // {
      //   src: '/isotope.pkgd.min.js',
      //   defer: true
      // },
      // {
      //   src: '/nice_checkbox.js',
      //   defer: true
      // },
      {
        src: '/main.js',
        defer: true
      }
    ]
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/fontawesome.js',
    '@/plugins/global.js',
    '@/plugins/my-plugin.js',
    '@/plugins/dayjs.js',
    '@/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    ['nuxt-purgecss']
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  router: {
    middleware: ['apartments']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  },

  // Not sensible variables. They are available at the browser
  publicRuntimeConfig: {
    websiteName: process.env.WEBSITE_NAME
  },

  // Sensible variables. They are secret
  privateRuntimeConfig: {
    someApiKey: process.env.SOME_API_KEY
  }

}
