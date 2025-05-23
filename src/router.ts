import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/IndexPage.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Magionet Project',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
