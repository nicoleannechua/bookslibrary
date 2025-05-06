import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import HomeView from '../views/HomeView.vue'
import LogInView from '@/views/LogInView.vue'
import CreateNewAccountView from '@/views/CreateNewAccountView.vue'
import OfflineView from '@/views/OfflineView.vue'
import RecentlyReadView from '@/views/RecentlyReadView.vue'
import NewAddedView from '@/views/NewAddedView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import BookmarksView from '@/views/BookmarksView.vue'
import NotificationView from '@/views/NotificationView.vue'
import ChapterView from '@/views/ChapterView.vue'

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
    {
      path: '/recentlyread',
      name: 'recentlyread',
      component: RecentlyReadView,
    },
    {
      path: '/newadded',
      name: 'newadded',
      component: NewAddedView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: BookmarksView,
    },
    {
      path: '/notification',
      name: 'notification',
      component: NotificationView,
    },
    {
      path: '/chapter-view',
      name: 'Chapter',
      component: ChapterView,
    },
  ],
})

export default router
