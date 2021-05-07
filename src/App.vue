<template>
  <div>
    <el-date-picker v-model="value" type="datetime" placeholder="选择日期时间"></el-date-picker>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const value = ref('')

    return {
      value,
    }
  },
})
</script>
