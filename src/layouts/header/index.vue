<template>
  <n-layout-header h-16 p-4 flex-center-between bordered>
    <a>1</a>
    <ActionItems />
  </n-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ActionItems from './ActionItems.vue'

export default defineComponent({
  name: 'LayoutHeader',
  components: { ActionItems },
  setup() {
    return {}
  }
})
</script>
