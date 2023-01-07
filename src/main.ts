import App from './App.vue'
import { pinia, registerStore } from '@/stores'
import router from '@/routes'
import i18n from '@/locals'

import 'uno.css'

const app = createApp(App)

app.use(pinia)
registerStore()

app.use(router).use(i18n)

app.mount('#app')
