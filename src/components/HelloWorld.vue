<template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';

// console.log('useStore', useStore)
// console.log('useRouter', useRouter)
// console.log('useRoute', useRoute)


// defineProps<{ msg: string }>()

const count = ref(0)
</script>



<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
