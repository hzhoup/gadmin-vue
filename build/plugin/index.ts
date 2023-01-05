import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

export const createVitePlugin = () => {
  const plugins: (Plugin | Plugin[])[] = [vue()]
  return plugins
}
