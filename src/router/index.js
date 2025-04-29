import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import HomeView from '../views/HomeView.vue'
import LogInView from '@/views/LogInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView,
    },
  ],
})

export default router
