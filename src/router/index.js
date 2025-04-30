import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import HomeView from '../views/HomeView.vue'
import LogInView from '@/views/LogInView.vue'
import CreateNewAccountView from '@/views/CreateNewAccountView.vue'
import OfflineView from '@/views/OfflineView.vue'

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
    {
      path: '/createnewaccount',
      name: 'createnewaccount',
      component: CreateNewAccountView,
    },
    {
      path: '/offline',
      name: 'offline',
      component: OfflineView,
    },
  ],
})

export default router
