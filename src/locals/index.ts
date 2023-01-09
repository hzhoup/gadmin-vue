import { createI18n, I18nOptions } from 'vue-i18n'
import { useConfigWithOut } from '@/stores/config'
import { setHtmlLang, setupLangs } from './helper'
import type { App } from 'vue'

const createI18nOptions = async (): Promise<I18nOptions> => {
  const { locale } = useConfigWithOut()
  const messages = await setupLangs()

  setHtmlLang(locale)

  return {
    locale,
    messages,
    legacy: false,
    fallbackLocale: import.meta.env.APP_FALL_BACK_LOCALE,
    missingWarn: false,
    silentTranslationWarn: true,
    silentFallbackWarn: true
  }
}

export let i18n: ReturnType<typeof createI18n>

export const setupI18n = async (app: App) => {
  const options = await createI18nOptions()
  i18n = createI18n(options)
  app.use(i18n)
}
