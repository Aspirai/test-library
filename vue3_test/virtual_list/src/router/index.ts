import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VirtListView from '../views/VirtListView.vue'
import ElementDateView from '@/views/ElementDateView.vue'
import WaterfallView from '@/views/WaterfallView.vue'
import VueJs from '@/views/VueJs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/virtListView',
      name: 'virtListView',
      component: VirtListView,
    },
    {
      path: '/dateTimePicker',
      name: 'dateTimePicker',
      component: ElementDateView,
    },
    {
      path: '/waterfall',
      name: 'waterfall',
      component: WaterfallView,
    },
    {
      path: '/vueJs',
      name: 'vueJs',
      component: VueJs,
    },
  ],
})

export default router
