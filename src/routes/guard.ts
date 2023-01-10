import appStore from '@/stores'
import type { Router } from 'vue-router'

export const createRouterGuard = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    appStore.useConfig.loadingBar.start()
    next()
  })

  router.afterEach((to) => {
    appStore.useConfig.loadingBar.finish()
  })
}
