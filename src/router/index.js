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
      path: '/catalog-modern',
      name: 'catalog-modern',
      component: () => import('../pages/catalog-modern.vue'),
    },
    {
      path: '/',
      name: 'section',
      component: () => import('../pages/section.vue'),
    },
  ],
})

export default router
