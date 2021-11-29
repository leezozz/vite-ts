<template>
  <div>
    <!-- <p>{{$store.state.counter}}</p> -->
    <p @click="$store.commit('add')">counterValue: {{ counterValue }}</p>
    <p>
      num: {{ num }}
    </p>
    <p>{{ arr }}</p>
    <p>{{myObj}}</p>
    <p>{{ doubleCounter }}</p>
  </div>
</template>

<script lang="ts">
import {
 defineComponent,
 getCurrentInstance,
 ref,
 PropType,
 computed
} from 'vue'
import { useStore } from 'vuex'
import { Todo, TitleInfo } from '../type/types'
import { key } from '../store'

export default defineComponent({
 name: 'Xx',
 components: {},
 props: {
   myObj: {
     type: Object as PropType<TitleInfo>,
     required: true
   }
 },


computed: {
  doubleCounter(): number {
    return this.num * 2
  }
},

 setup (props) {
  // Vuex store
  const store = useStore(key)

  // const counterValue = store.state.counter
  
  // 通过computed 拿到 state中的值
  const counterValue = computed(() => store.state.counter)
  console.log('counterValue',counterValue)

  console.log('myObj', props.myObj)

  const num: number = 66
  console.log('num', num)

  const arr: number[] = [1,2,3]
  const arr1: Array<number> = [3,2,1]

  const obj: object = {
    name: 'zs',
    age: 18
  }


  // this
  // const { ctx } = getCurrentInstance()
  // console.log(ctx)

  return {
    num,
    arr,
    arr1,
    obj,
    counterValue
  }
 }
})
</script>

<style scoped lang="scss">

</style>
