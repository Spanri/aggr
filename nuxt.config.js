export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8', },
      { name: 'viewport', content: 'width=device-width, initial-scale=1', },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '', },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff', },
  /*
  ** Global CSS
  */
  css: [

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false, },
    '~/plugins/vuelidate.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss',
    ],
  },
  /*
  ** Axios
  */
  axios: {
    // proxyHeaders: false
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': false,
        'postcss-responsive-type': {},
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true,
          flexbox: true,
        },
        doiuse: {

        },
      },
    },
    extend(/*config, ctx*/) {
    },
  },
};
