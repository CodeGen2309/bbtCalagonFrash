import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/itemCard/:id',
      name: 'itemCard',
      component: () => import('@/pages/itemCard.vue'),
    },
  ],
})

export default router