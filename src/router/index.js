import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RedeSocial from '../views/RedeSocial.vue'
import InformaAleatorias from '../views/InformaAleatorias.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rede',
      name: 'rede',
      component: RedeSocial
    },
    {
      path: '/aleatorios',
      name: 'aleatorios',
      component: InformaAleatorias
    },

  ]
})

export default router
