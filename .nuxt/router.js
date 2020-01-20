import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b9ba3bb2 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _e843e0de = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _65f857ec = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _1fd09a47 = () => interopDefault(import('../pages/auth/signup.vue' /* webpackChunkName: "pages/auth/signup" */))
const _266c03c2 = () => interopDefault(import('../pages/blocks/ege.vue' /* webpackChunkName: "pages/blocks/ege" */))
const _51cf89b6 = () => interopDefault(import('../pages/blocks/professions.vue' /* webpackChunkName: "pages/blocks/professions" */))
const _b32de482 = () => interopDefault(import('../pages/blocks/school-subjects.vue' /* webpackChunkName: "pages/blocks/school-subjects" */))
const _6eb08719 = () => interopDefault(import('../pages/tools/ui-kit.vue' /* webpackChunkName: "pages/tools/ui-kit" */))
const _1576a63a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _19755747 = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/home",
      component: _b9ba3bb2,
      name: "home"
    }, {
      path: "/profile",
      component: _e843e0de,
      name: "profile"
    }, {
      path: "/auth/login",
      component: _65f857ec,
      name: "auth-login"
    }, {
      path: "/auth/signup",
      component: _1fd09a47,
      name: "auth-signup"
    }, {
      path: "/blocks/ege",
      component: _266c03c2,
      name: "blocks-ege"
    }, {
      path: "/blocks/professions",
      component: _51cf89b6,
      name: "blocks-professions"
    }, {
      path: "/blocks/school-subjects",
      component: _b32de482,
      name: "blocks-school-subjects"
    }, {
      path: "/tools/ui-kit",
      component: _6eb08719,
      name: "tools-ui-kit"
    }, {
      path: "/",
      component: _1576a63a,
      name: "index"
    }, {
      path: "/*",
      component: _19755747,
      name: "all"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
