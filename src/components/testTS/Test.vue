<template>
  <div>
    <input type="text" v-model="todoName" @keyup.enter="handAdd(changeValue(todoName))">
    <div v-for="item in ItemLists" :key="item.id"
    >{{ item.id + '：' +item.name }}</div>
  </div>
</template>

<script lang="ts">
import {
 defineComponent, 
 reactive,
 ref
} from 'vue'
import { useStore } from 'vuex'

type TodoType = {
  id: number,
  name: string
}

export default defineComponent({
 name: 'Xx',
 components: {},
 props: {},
 setup () {
  // Vuex store
  const store = useStore()

  const todoName = ref('')
  // const todoName: string[] = reactive([])
  // const todoList: Array<string> = reactive([])

  const ItemLists = reactive([] as TodoType[])

  const changeValue = (todoName: string):TodoType => {
    return {
      id: ItemLists.length + 1,
      name: todoName
    }
  }

  const handAdd = (value: TodoType): void => {
    ItemLists.push(value)
    todoName.value = ''
  }

  return {
    todoName,
    ItemLists,
    handAdd,
    changeValue
  }
 }
})
</script>

<style scoped lang="scss">

</style>
