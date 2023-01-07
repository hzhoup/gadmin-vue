import { createI18n, I18nOptions } from 'vue-i18n'
import { useConfigWithOut } from '@/stores/config'
import { setHtmlLang, setupLangs } from './helper'

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

const i18n = createI18n(await createI18nOptions())

export default i18n
