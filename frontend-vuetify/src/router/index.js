// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/auth/Login.vue'
import Register from '@/pages/auth/Register.vue'
import UserList from '@/pages/user/UserList.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/user', component: UserList },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
