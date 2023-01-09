import { RouteRecordRaw } from 'vue-router'
import { BASIC_LAYOUT, EXCEPTION_PAGE } from './constant'

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  redirect: import.meta.env.APP_HOME_REDIRECT,
  meta: {}
}

export const LoginPage: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/Login.vue'),
  meta: {
    title: '登录',
    requireAuth: false
  }
}

export const PageNotFound: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: '404',
  component: BASIC_LAYOUT,
  meta: {},
  children: [
    {
      path: '/:path(.*)*',
      name: '404',
      component: EXCEPTION_PAGE,
      meta: {}
    }
  ]
}

export const basicRoutes: RouteRecordRaw[] = [LoginPage, PageNotFound]
