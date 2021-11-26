/// <reference types="vite/client" />

// 识别ts识别 .vue 文件
// 把一个vue文件看做一个组件来对待

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  interface Vue {
    // $router: VueRouter; // 这表示this下有这个东西
    // $route: Route;
  }


  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component

   
}
