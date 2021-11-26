import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '../components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../components/Test.vue')
  }
]

export default routes;