import { defineStore } from 'pinia'

/**
 * @description app config 配置，持久化存储到 localStorage 中
 */
export const useConfig = defineStore(
  'config',
  () => {
    const config = reactive({})

    return { ...toRefs(config) }
  },
  {
    persist: {
      key: 'APP_CONFIG',
      storage: localStorage
    }
  }
)
