import { LocaleKey } from '@/locals/useLocale'
import { pinia } from '@/stores'
import { ConfigProviderProps, darkTheme, lightTheme } from 'naive-ui'
import { defineStore } from 'pinia'

interface ConfigState {
  locale: LocaleKey
  theme: 'dark' | 'light' | null | undefined
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

    const changeLocale = (key: LocaleKey) => {
      config.locale = key
    }

    const initThemForOs = () => {
      config.theme = useOsTheme().value
    }

    const naiveTheme = computed(() => {
      return config.theme === 'dark' ? darkTheme : lightTheme
    })

    const changeDeviceType = (type: 'pc' | 'pad' | 'mobile') => {
      config.deviceType = type
    }

    const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
      theme: config.theme === 'light' ? lightTheme : darkTheme
    }))
    const { loadingBar, message, notification, dialog } = createDiscreteApi(
      ['loadingBar', 'message', 'notification', 'dialog'],
      {
        configProviderProps: configProviderPropsRef
      }
    )

    return {
      ...toRefs(config),
      changeLocale,
      initThemForOs,
      changeDeviceType,

      loadingBar,
      message,
      notification,
      dialog,

      naiveTheme
    }
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
