import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import Statistics from '@/views/statistics/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics
    },
    {
      path: '/management',
      name: 'Management',
      component: () => import('@/views/management/index.vue')
    }
  ]
})

export default router
