import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // 引入插件
    VueSetupExtend(),
    vue()
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持 Less 的 JS 表达式
      },
    },
  },
  base: './',
  server: {
    host: '0.0.0.0'
  }
})
