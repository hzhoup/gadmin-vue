import App from './App.vue'
import { pinia, registerStore } from '@/stores'
import router from '@/routes'

import 'uno.css'

const app = createApp(App)

app.use(pinia).use(router)
registerStore()

app.mount('#app')
