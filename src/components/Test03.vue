<template>
  <div>
    <p>{{num}}</p>
    <p>{{doubleNum}}</p>
    <h2>待办事项！！！</h2>
    <!-- newTodo把输入的todoName字符串，转换成我们需要的对象。（items遍历的是对象数组） -->
    <input type="text" v-model="todoName" @keyup.enter="addTodo(newTodo(todoName))">

    <div v-for="item in items" :key="item.id">
      {{item.id + item.name}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
 ref,
 reactive,
 computed,
 defineProps
} from 'vue'
import { useStore } from 'vuex'
import type {PropType} from 'vue'
import type { Todo,TitleInfo } from '../type/types'

// 属性声明
defineProps({
  myObj: {
    type: Object as PropType<TitleInfo>,
    required: true
  }
})


const num = ref(233)
const doubleNum = computed(() => num.value * 2)

const items = ref([] as Todo[])
items.value.push({
     id: 1,
     name: 'zs',
     completed: false
})

const todoName = ref('')

const newTodo = (todoName: string):Todo => {
     return {
       id: items.value.length + 1,
       name: todoName,
       completed: false
     }
}

const addTodo = (todo: Todo): void => {
    items.value.push(todo)
    todoName.value = ''
  }

</script>

<style scoped lang="scss">

</style>
