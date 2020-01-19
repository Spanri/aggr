import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _636306d2 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages_home" */))
const _26e2ba06 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _176db1f4 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages_profile" */))
const _01ce73cb = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages_signup" */))
const _a32e9f60 = () => interopDefault(import('..\\pages\\ui-kit.vue' /* webpackChunkName: "pages_ui-kit" */))
const _5d3b16ef = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      path: "/login",
      component: _26e2ba06,
      name: "login"
    }, {
      path: "/profile",
      component: _176db1f4,
      name: "profile"
    }, {
      path: "/signup",
      component: _01ce73cb,
      name: "signup"
    }, {
      path: "/ui-kit",
      component: _a32e9f60,
      name: "ui-kit"
    }, {
      path: "/",
      component: _5d3b16ef,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
