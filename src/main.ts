import App from './App.vue'
import { setupStore } from '@/stores'
import { setupRouter } from '@/routes'
import { setupI18n } from '@/locals'

import 'uno.css'

const bootstrap = async () => {
  const app = createApp(App)

  setupStore(app)

  await setupI18n(app)

  await setupRouter(app)

  app.mount('#app')
}

bootstrap()
