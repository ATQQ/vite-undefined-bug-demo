<template>
  <div class="home">
    <el-date-picker
      v-model="value"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'home',
  setup() {
    const value = ref('')

    return {
      value,
    }
  },
})
</script>

<style lang="scss" scoped>
.home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  min-height: 100vh;
}
</style>
