import { App } from 'vue'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { LoginPage } from './constant'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Workbench.vue')
  },
  LoginPage
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export const setupRouter = (app: App) => {
  app.use(router)
}

export default router
