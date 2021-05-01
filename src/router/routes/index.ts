import { RouteRecordRaw } from 'vue-router'
import Home from '@/pages/home/index.vue'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
    },
  },
]
export default routes
