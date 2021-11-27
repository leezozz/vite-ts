<template>
  <div>
    {{titleInfo.color}}
    <h2 :style="{backgroundColor: titleInfo.color}">{{titleInfo.value}}</h2>
    
    {{counter}}

    <div v-for="item in items" :key="item.id">
      {{item}}
    </div>
  </div>
</template>

<script lang="ts">
import {
 defineComponent,
 getCurrentInstance,
 PropType
} from 'vue'

import { useStore } from 'vuex'


import { Todo, TitleInfo } from '../type/types'


// 为 store state 声明类型
export interface State {
  count: number
}

export default defineComponent({
 name: 'Xx',
 components: {},
 props: {
   titleInfo: {
     type: Object as PropType<TitleInfo>,
     required: true
   }
   
 },
 data () {
    return {
      items: [] as Todo[]
    }
  },
  created () {
    this.items.push({
      id: 33,
      name: 'zs',
      completed: false
    })
  },
 setup () {
  const store = useStore()

  // this
  // const { ctx } = getCurrentInstance()
  // console.log(ctx)

  console.log('useStore', useStore)

  const counter: number = 666

  return {
    counter
  }
 }
})
</script>

<style scoped lang="scss">

</style>
