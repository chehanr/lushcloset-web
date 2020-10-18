export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    { src: '~/assets/css/main.scss', lang: 'scss' },
    { src: '~/assets/css/fonts.css', lang: 'css' },
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg',
    '@nuxtjs/date-fns',
    '@nuxtjs/google-fonts',
  ],
  modules: ['@nuxtjs/bulma', '@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/auth'],
  axios: {
    baseURL: 'https://lushcloset.herokuapp.com/',
  },
  router: {
    middleware: ['auth'],
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/v1_0/auth/local/login',
            method: 'post',
            propertyName: 'data.accessToken',
          },
          logout: false,
          user: {
            url: '/api/v1_0/me',
            method: 'get',
            propertyName: 'data',
          },
        },
      },
    },
  },
  'google-fonts': {
    families: {
      Roboto: true,
      Nunito: [300],
    },
    download: true,
  },
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
}
