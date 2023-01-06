import { PluginOption } from 'vite'
import unoCss from 'unocss/vite'
import { presetIcons, presetAttributify, presetUno } from 'unocss'

export const configUnoCssPlugin = () => {
  const unoCssPlugin: PluginOption[] = unoCss({
    presets: [presetIcons(), presetAttributify(), presetUno()],
    rules: [],
    shortcuts: {}
  })

  return unoCssPlugin
}
