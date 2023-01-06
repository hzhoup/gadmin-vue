import { RouteRecordRaw } from 'vue-router'

export const LoginPage: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/Login.vue'),
  meta: {
    title: '登录',
    requireAuth: false
  }
}
