import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import store, { key }from './store'


const app = createApp(App)
app
  .use(router)
  .use(store, key)
  .use(ElementPlus)

app.mount('#app')
