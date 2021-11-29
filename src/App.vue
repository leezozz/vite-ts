<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { useStore } from 'vuex'
import { defineComponent,defineAsyncComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'APP',
  components: {
    HelloWorld: defineAsyncComponent(() => import("./components/HelloWorld.vue")),
    Test: defineAsyncComponent(() => import("./components/Test.vue")),
    Test01: defineAsyncComponent(() => import("./components/Test01.vue")),
    Test02: defineAsyncComponent(() => import("./components/Test02.vue")),
    Test03: defineAsyncComponent(() => import("./components/Test03.vue"))
    
  },
  props: {

  },

  setup() {

    // const store = useStore()

    return {
    }
  }

})
</script>

<template>
  <!-- <Test :title-info="{ value: '代办事项', color: 'skyblue' }"></Test> -->
  <h2>{{123}}</h2>
  <!-- <Test01 :myObj="{ value: 'Todo', color: 'skyblue' }"/> -->
   
   <!-- <Test02 /> -->
   <!-- <Test03 /> -->
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
