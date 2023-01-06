import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import { ImportMetaEnv } from '../../types/env'
import { configHtmlPlugin } from './html'
import { configCompressPlugin } from './compression'
import { configUnplugins } from './unplugins'

export const createVitePlugin = (env: ImportMetaEnv, isBuild: boolean) => {
  const { VITE_LEGACY, VITE_BUILD_COMPRESSION, VITE_COMPRESSION_DELETE_ORIGIN_FILE } = env

  const plugins: (PluginOption | PluginOption[])[] = [vue(), jsx()]

  VITE_LEGACY &&
    plugins.push(
      legacy({
        targets: ['Android > 39', 'Chrome >= 60', 'Safari >= 10.1', 'iOS >= 10.3', 'Firefox >= 54', 'Edge >= 15']
      })
    )

  plugins.push(configHtmlPlugin(env, isBuild))

  plugins.push(configUnplugins())

  if (isBuild) {
    plugins.push(configCompressPlugin(VITE_BUILD_COMPRESSION, VITE_COMPRESSION_DELETE_ORIGIN_FILE))
  }

  return plugins
}
