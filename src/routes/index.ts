import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { basicRoutes } from './basic'
import { createRouterGuard } from './guard'

export const router = createRouter({
  routes: basicRoutes,
  history: createWebHistory(),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const setupRouter = async (app: App) => {
  app.use(router)
  createRouterGuard(router)
  await router.isReady()
}
