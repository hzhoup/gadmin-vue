<template>
  <n-config-provider
    :theme="naiveTheme"
    :theme-overrides="naiveTheme === null ? lightThemeOverrides : darkThemeOverrides"
    :locale="getNaiveLocale()"
    :date-locale="getNaiveDateLocale()"
  >
    <n-notification-provider>
      <n-message-provider>
        <n-loading-bar-provider>
          <n-dialog-provider>
            <n-el h-screen w-screen>
              <router-view />
            </n-el>
          </n-dialog-provider>
        </n-loading-bar-provider>
      </n-message-provider>
    </n-notification-provider>
    <n-global-style />
  </n-config-provider>
</template>

<script setup lang="ts">
import { GlobalThemeOverrides } from 'naive-ui'
import appStore from './stores'
import { useLocale } from '@/locals/useLocale'

const { theme, naiveTheme } = storeToRefs(appStore.useConfig)
const { initThemForOs } = appStore.useConfig

const { getNaiveLocale, getNaiveDateLocale } = useLocale()

onBeforeMount(() => {
  if (!theme.value) initThemForOs()
})

const lightThemeOverrides: GlobalThemeOverrides = {}
const darkThemeOverrides: GlobalThemeOverrides = {}
</script>
