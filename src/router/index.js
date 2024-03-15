import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CodeView from '@/views/CodeView.vue'
import SportView from '@/views/SportView.vue'
import MusicView from '@/views/MusicView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {

    path:'/code',
    name: 'Code',
    component: CodeView,
  },
  {

    path:'/sport',
    name:'sport',
    component: SportView,
  },
  {

    path:'/music',
    name:'music',
    component: MusicView,
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
