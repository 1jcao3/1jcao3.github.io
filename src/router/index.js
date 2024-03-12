import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CodeView from '@/views/CodeView.vue'

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
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
