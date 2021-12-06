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
    component: () => import("../components/Test02.vue")
  },
  {
    path: '/ts',
    name: 'TS',
    component: () => import("../components/testTS/Test.vue")
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import("../components/testTS/testMenu.vue")
  },
  // 表单修饰符
  {
    path: '/form',
    name: 'From',
    component: () => import("../components/TestVue/test表单修饰符.vue")
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;