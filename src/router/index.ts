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
    component: () => import("../components/Test.vue")
  },
  {
    path: '/tests',
    name: 'Test01',
    component: () => import("../components/Test01.vue")
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;