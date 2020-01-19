/* eslint-disable prettier/prettier */
require("dotenv").config();
import path from "path";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /**
   * env
   */
  env: {
    isProduction: process.env.NODE_ENV === "production",
    isDevelopment: process.env.NODE_ENV === "development",
    name: process.env.VUE_APP_NAME,
    frontendHost: process.env.VUE_APP_FRONTEND_HOST,
    backendHost: process.env.VUE_APP_BACKEND_HOST,
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["normalize.css/normalize.css", "~/assets/icomoon/style.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/vuex-persist", ssr: false },
    "~/plugins/vuelidate.js",
    "~plugins/vue-js-modal.js",
    "~plugins/v-click-outside.js",
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/eslint-module"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt',
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "nuxt-svg-loader",
  ],
  styleResources: {
    scss: ["@/assets/scss/_base.scss"],
  },
  /*
   ** Axios
   */
  axios: {
    // proxyHeaders: false
  },
  extends: ["@nuxtjs/eslint-config-typescript"],
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
        "postcss-url": false,
        "postcss-responsive-type": {},
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true,
          flexbox: true,
        },
        doiuse: {},
      },
    },
    extend(config, ctx) {
      /**
       * alias
       */
      const { srcDir } = this.buildContext.options;
      config.resolve.alias["@assets"] = srcDir + path.sep + "assets";
      config.resolve.alias["@components"] = srcDir + path.sep + "components";
      config.resolve.alias["@ui-components"] = srcDir + path.sep + "ui-components";
      config.resolve.alias["@helpers"] = srcDir + path.sep + "helpers";
      // console.log(config.resolve.alias);
      /**
       * eslint settings
       */
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)|(\.svg$)/,
        });
      }
    },
  },
};