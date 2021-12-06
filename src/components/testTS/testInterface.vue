<template>
  <div>
    <p v-for="item in items" :key="item">{{ item}}</p>
  </div>
</template>

<script lang="ts">
import {
 defineComponent, PropType, reactive,
} from 'vue'
import { useStore } from 'vuex'
import { test } from "./interface"

export default defineComponent({
 name: 'Xx',
 components: {},
 props: {},
 setup () {
  // Vuex store
  const store = useStore()

  const testData = reactive( {} as PropType<test> )

  return {
    testData
  }
 }
})
</script>

<style scoped lang="scss">

</style>
