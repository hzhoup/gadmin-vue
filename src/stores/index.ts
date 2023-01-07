import { useConfig } from './config'
import piniaPersistedstate from 'pinia-plugin-persistedstate'
import { App } from 'vue'

export interface AppStore {
  useConfig: ReturnType<typeof useConfig>
}

const appStore: AppStore = {} as AppStore

export const registerStore = () => {
  appStore.useConfig = useConfig()
}

export const pinia = createPinia().use(piniaPersistedstate)

export const setupStore = (app: App) => {
  app.use(pinia)
  registerStore()
}

export default appStore
