<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { useStore } from 'vuex'
console.log('useStore', useStore)
import { defineComponent,defineAsyncComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'APP',
  components: {
    HelloWorld: defineAsyncComponent(() => import("./components/HelloWorld.vue"))
  },
  props: {

  },

  setup() {

    const store = useStore()
    console.log(store)
    console.log('sss', useStore())


    return {
    }
  }

})
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="this is aaa"/>
  <h2>{{123}}</h2>
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
