<template>
  <div>
    <h2>待办事项</h2>
    <!-- newTodo把输入的todoName字符串，转换成我们需要的对象。（items遍历的是对象数组） -->
    <input type="text" v-model="todoName" @keyup.enter="addTodo(newTodo(todoName))">

    <div v-for="item in items" :key="item.id">
      {{item.id + item.name}}
    </div>
  </div>
</template>

<script lang="ts">
import {
 defineComponent, 
 reactive,
} from 'vue'
import { useStore } from 'vuex'
import { Todo } from '../type/types'

export default defineComponent({
 name: 'Xx',
 components: {},
 props: {},
 data() {
   return {
     items: [] as Todo[],
     todoName: ''
   }
 },
 created() {
   this.items.push({
     id: 1,
     name: 'zs',
     completed: false
  })
    //  console.log('items', this)
 },
 methods: {
   newTodo(todoName: string):Todo {
     return {
       id: this.items.length + 1,
       name: todoName,
       completed: false
     }
   },
  //  addTodo把输入框中的值转换为的对象push到items数组中，把输入框中的值清空
  addTodo(todo: Todo): void {
    this.items.push(todo)
    this.todoName = ''
  }
 },
 setup () {
  // Vuex store
  const store = useStore()

  // const items = reactive<Todo>({items:[]})


  

  return {
    // items
  }
 }
})
</script>

<style scoped lang="scss">

</style>
