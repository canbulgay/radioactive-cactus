import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import("@/views/Login")
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import("@/views/Register")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
