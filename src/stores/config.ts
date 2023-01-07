import { defineStore } from 'pinia'
import { pinia } from '@/stores'

/**
 * @description app config 配置，持久化存储到 localStorage 中
 */
export const useConfig = defineStore(
  'config',
  () => {
    const config = reactive({
      locale: 'zh'
    })

    return { ...toRefs(config) }
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
