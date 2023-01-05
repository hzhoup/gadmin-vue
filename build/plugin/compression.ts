import type { PluginOption } from 'vite'
import compression from 'vite-plugin-compression'

export const configCompressPlugin = (compress: string, deleteOriginFile = false) => {
  const compressList = compress.split('')
  const plugins: PluginOption[] = []

  if (compressList.includes('g')) {
    plugins.push(
      compression({
        ext: '.gz',
        deleteOriginFile
      })
    )
  }
  if (compressList.includes('b')) {
    plugins.push(
      compression({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile
      })
    )
  }

  return plugins
}
