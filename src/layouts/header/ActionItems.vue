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
    <n-icon hover:cursor-pointer :size="24" @click="changeTheme">
      <IIcRoundLightMode v-if="theme === 'dark'" />
      <IIcRoundDarkMode v-else />
    </n-icon>
    <n-icon hover:cursor-pointer :size="24" @click="openSetting">
      <IIcRoundSettings />
    </n-icon>
  </n-space>
  <SettingDrawer ref="setting" />
</template>

<script setup lang="ts">
import { LocaleKey, useLocale } from '@/locals/useLocale'
import appStore from '@/stores'
import SettingDrawer, { SettingRefs } from './SettingDrawer.vue'

const setting = ref<SettingRefs | null>(null)

const route = useRoute()
const router = useRouter()

const { isFullscreen, toggle } = useFullscreen()

const { locale } = useI18n()
const { options } = useLocale()

const { theme } = storeToRefs(appStore.useConfig)
const { changeLocale: changeStoreLocale, changeTheme } = appStore.useConfig

const refresh = () => {
  router.replace({ path: '/redirect' + route.path })
}

const changeLocale = (key: LocaleKey) => {
  locale.value = key
  changeStoreLocale(key)
}

const openSetting = () => {
  setting.value?.openDrawer()
}
</script>
