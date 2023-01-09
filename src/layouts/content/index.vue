<template>
  <n-layout-content :native-scrollbar="false">
    <RouterView />
  </n-layout-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutContent',
  setup() {
    return {}
  }
})
</script>
