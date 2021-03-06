import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path  from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    // 导入文件夹别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      views: path.resolve(__dirname, './src/views'),
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, "./src/assets"),
      com: path.resolve(__dirname, "./src/components"),
      store: path.resolve(__dirname, "./src/store"),
    },
  }
})
