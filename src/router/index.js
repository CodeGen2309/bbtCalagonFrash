import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../pages/catalog.vue'),
    },
    {
      path: '/',
      name: 'catalog-modern',
      component: () => import('../pages/catalog-modern.vue'),
    },
  ],
})

export default router
