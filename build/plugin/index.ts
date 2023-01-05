import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'

export const createVitePlugin = () => {
  const plugins: (Plugin | Plugin[])[] = [vue(), jsx()]
  return plugins
}
