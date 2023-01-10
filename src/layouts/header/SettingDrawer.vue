<template>
  <n-drawer v-model:show="show" :width="360">
    <n-drawer-content title="设置" closable>setting</n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
export interface SettingRefs {
  openDrawer: () => void
}

const show = ref(false)

const openDrawer = () => {
  show.value = true
}

defineExpose({
  openDrawer
})
</script>
