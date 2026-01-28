import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: () => import('@/pages/catalog.vue'),
    },
    {
      path: '/section/:id',
      name: 'section',
      component: () => import('@/pages/section.vue'),
    },
    {
      path: '/ctitem/:id',
      name: 'ctitem',
      component: () => import('@/pages/item.vue'),
    },
  ],
})

export default router