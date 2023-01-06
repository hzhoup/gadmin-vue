import { useConfig } from './config'
import piniaPersistedstate from 'pinia-plugin-persistedstate'

export interface AppStore {
  useConfig: ReturnType<typeof useConfig>
}

const appStore: AppStore = {} as AppStore

export const registerStore = () => {
  appStore.useConfig = useConfig()
}

export const pinia = createPinia().use(piniaPersistedstate)

export default appStore
