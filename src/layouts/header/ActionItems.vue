<template>
  <n-space item-style="display: flex;align-items: center;">
    <n-icon hover:cursor-pointer :size="24" @click="refresh">
      <IIcRoundRefresh />
    </n-icon>
    <n-icon hover:cursor-pointer :size="24" @click="toggle">
      <IIcRoundFullscreenExit v-if="isFullscreen" />
      <IIcRoundFullscreen v-else />
    </n-icon>
    <n-dropdown :options="options" @select="changeLocale">
      <n-icon hover:cursor-pointer :size="24">
        <IIcRoundTranslate />
      </n-icon>
    </n-dropdown>
  </n-space>
</template>

<script setup lang="ts">
import { LocaleKey, useLocale } from '@/locals/useLocale'
import appStore from '@/stores'

const route = useRoute()
const router = useRouter()

const { isFullscreen, toggle } = useFullscreen()

const { locale } = useI18n()
const { options } = useLocale()

const refresh = () => {
  router.replace({ path: '/redirect' + route.path })
}

const changeLocale = (key: LocaleKey) => {
  locale.value = key
  appStore.useConfig.changeLocale(key)
}
</script>
