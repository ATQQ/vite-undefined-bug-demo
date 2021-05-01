import { createApp } from 'vue'
import mountElementUI from './utils/elementUI'

import router from './router'

import App from './App.vue'

const app = createApp(App)

app.use(router)
// 引入需要的ElementUI Component
mountElementUI(app)

app.mount('#app')
