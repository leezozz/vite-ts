<template>
  <div>
    <p>
      {{ num }}
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
 PropType
} from 'vue'
import { useStore } from 'vuex'
import { Todo, TitleInfo } from '../type/types'

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
  const store = useStore()

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
    obj
  }
 }
})
</script>

<style scoped lang="scss">

</style>
