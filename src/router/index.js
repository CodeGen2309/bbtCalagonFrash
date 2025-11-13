import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
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
      path: '/section',
      name: 'section',
      component: () => import('../pages/section.vue'),
    },
    {
      path: '/',
      name: 'ctitem',
      component: () => import('../pages/item.vue'),
    },
  ],
})

export default router
