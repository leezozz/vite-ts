<template>
  <div>
    <!-- el-input 不支持v-model修饰符 -->
    <!-- <input type="input" v-model.lazy="message"> -->
    <!-- <input type="input" v-model.trim="message"> -->
    <input type="input" v-model.number="message">
    <p class="input-value">{{ message }}</p>
  </div>
</template>

<script>
import {
 defineComponent,
 getCurrentInstance,
 ref
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
 name: 'Xx',
 components: {},
 props: {},
 setup () {
  // Vuex store
  const store = useStore()

  // this
  const { ctx } = getCurrentInstance()
  console.log(ctx)

  const message = ref('')
  console.log('message', message)

  return {
    message
  }
 }
})
</script>

<style scoped lang="scss">
.input-value {
  display: inline-block;
  background-color: skyblue;
  opacity: .5;
}
</style>
