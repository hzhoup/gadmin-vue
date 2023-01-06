import './style.css'
import App from './App.vue'
import { pinia, registerStore } from '@/stores'

import 'uno.css'

const app = createApp(App)

app.use(pinia)
registerStore()

app.mount('#app')
