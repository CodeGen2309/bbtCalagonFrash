import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:sid?',
      name: 'catalog',
      component: () => import('@/pages/catalog.vue'),
    },
    
    {
      path: '/section/:id',
      name: 'section',
      component: () => import('@/pages/section.vue'),
    },

    {
      path: '/itemCard/:id/:section?',
      name: 'itemCard',
      component: () => import('@/pages/itemCard.vue'),
    },

    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/pages/menu.vue'),
    },
  ],
})

export default router