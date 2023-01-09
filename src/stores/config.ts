import { pinia } from '@/stores'
import { darkTheme } from 'naive-ui'
import { defineStore } from 'pinia'

interface ConfigState {
  locale: 'zh' | 'en'
  theme: 'dark' | 'light' | null
  deviceType: 'pc' | 'pad' | 'mobile'
}

/**
 * @description app config 配置，持久化存储到 localStorage 中
 */
export const useConfig = defineStore(
  'config',
  () => {
    const config = reactive<ConfigState>({
      locale: 'zh',
      theme: null,
      deviceType: 'pc'
    })

    const initThemForOs = () => {
      config.theme = useOsTheme().value
    }

    const naiveTheme = computed(() => {
      return config.theme === 'dark' ? darkTheme : null
    })

    const changeDeviceType = (type: 'pc' | 'pad' | 'mobile') => {
      config.deviceType = type
    }

    return { ...toRefs(config), initThemForOs, changeDeviceType, naiveTheme }
  },
  {
    persist: {
      key: 'APP_CONFIG',
      storage: localStorage
    }
  }
)

export const useConfigWithOut = () => {
  return useConfig(pinia)
}
