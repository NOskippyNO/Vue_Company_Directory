import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/login', component: LoginPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
