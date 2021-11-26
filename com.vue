<template>
  <div>
    <!-- 标题 -->
    <h1 :style="{backgroundColor: titleInfo.color}">{{titleInfo.value}}</h1>

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
  reactive,
  PropType
} from 'vue'
import { useStore } from 'vuex'
import { Todo, TitleInfo } from './types'

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
  // Vuex store
    const store = useStore()

    // this
    // const { ctx } = getCurrentInstance()
    // console.log(ctx)

    const counter = 1
    console.log('counter', counter)

    return {
      counter
    }
  }
})
</script>

<style scoped lang="scss">

</style>
