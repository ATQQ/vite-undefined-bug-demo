import { createApp } from 'vue'
// 按需引入
import {
  ElDatePicker, ElButton,
  locale,
} from 'element-plus'

import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

import App from './App.vue'

const app = createApp(App)

app.use(ElButton).use(ElDatePicker)

// bug
// locale(lang)
console.log(import.meta.env.MODE, typeof locale)

// solve bug
if (import.meta.env.PROD) {
  locale.use(lang)
} else {
  locale(lang)
}
app.mount('#app')
