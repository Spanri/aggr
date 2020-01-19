import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _636306d2 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages_home" */))
const _176db1f4 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages_profile" */))
const _a32e9f60 = () => interopDefault(import('..\\pages\\ui-kit.vue' /* webpackChunkName: "pages_ui-kit" */))
const _53d7f01e = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages_auth_login" */))
const _738000b3 = () => interopDefault(import('..\\pages\\auth\\signup.vue' /* webpackChunkName: "pages_auth_signup" */))
const _322d4b9a = () => interopDefault(import('..\\pages\\blocks\\ege.vue' /* webpackChunkName: "pages_blocks_ege" */))
const _2117798e = () => interopDefault(import('..\\pages\\blocks\\professions.vue' /* webpackChunkName: "pages_blocks_professions" */))
const _a3f55cd2 = () => interopDefault(import('..\\pages\\blocks\\school-subjects.vue' /* webpackChunkName: "pages_blocks_school-subjects" */))
const _5d3b16ef = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _18106a7c = () => interopDefault(import('..\\pages\\_.vue' /* webpackChunkName: "pages__" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/home",
      component: _636306d2,
      name: "home"
    }, {
      path: "/profile",
      component: _176db1f4,
      name: "profile"
    }, {
      path: "/ui-kit",
      component: _a32e9f60,
      name: "ui-kit"
    }, {
      path: "/auth/login",
      component: _53d7f01e,
      name: "auth-login"
    }, {
      path: "/auth/signup",
      component: _738000b3,
      name: "auth-signup"
    }, {
      path: "/blocks/ege",
      component: _322d4b9a,
      name: "blocks-ege"
    }, {
      path: "/blocks/professions",
      component: _2117798e,
      name: "blocks-professions"
    }, {
      path: "/blocks/school-subjects",
      component: _a3f55cd2,
      name: "blocks-school-subjects"
    }, {
      path: "/",
      component: _5d3b16ef,
      name: "index"
    }, {
      path: "/*",
      component: _18106a7c,
      name: "all"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
