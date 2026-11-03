import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sugestoes from '../views/Sugestoes.vue'
import Pets from '../views/Pets.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sugestoes',
      name: 'sugestoes',
      component: Sugestoes
    },
    {
      path: '/pets',
      name: 'pets',
      component: Pets
    },

  ]
})

export default router
