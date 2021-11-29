// // store.ts
// import { InjectionKey } from 'vue'
// // import { createStore, useStore as baseUseStore, Store } from 'vuex'
// import { createStore, Store } from 'vuex'


// export interface State {
//   count: number
// }

// export const key: InjectionKey<Store<State>> = Symbol()

// export const store = createStore<State>({
//   state() {
//     return {
//       count: 0
//     }
//   },
//   mutations: {
//     increment(state) {
//       state.count++
//     }
//   }
// })


import { ComponentCustomProperties } from "@vue/runtime-core";
import { createStore, Store } from "vuex"
import { InjectionKey } from 'vue'

export type State = {
  counter: number
}

// 创建一个 InjectionKey 
export const key: InjectionKey<Store<State>> = Symbol()

// this.$store 强类型支持
// 模块扩展
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

export default createStore({
  state: {
    counter: 333
  },
  mutations: {
    add(state) {
      state.counter++
    }
  }
})