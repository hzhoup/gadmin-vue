import type { PluginOption } from 'vite'
import { ImportMetaEnv } from '../../types/env'
import { createHtmlPlugin } from 'vite-plugin-html'

export const configHtmlPlugin = (env: ImportMetaEnv, isBuild: boolean) => {
  const { APP_NAME } = env

  const htmlPlugin: PluginOption[] = createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: APP_NAME
      }
    }
  })

  return htmlPlugin
}
