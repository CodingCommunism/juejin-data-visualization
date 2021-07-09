import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    })],
  alias: {
    '/@': path.resolve(__dirname, 'src')
  },
  server: {
    proxy: {
      '/user_api/v1': {
        target: 'https://api.juejin.cn/',
        changeOrigin: true
      },
      '/recommend_api/v1': {
        target: 'https://api.juejin.cn/',
        changeOrigin: true
      },
      '/api/local': {
        target: 'http://localhost:8080/',
        changeOrigin: true
      }
    }
  }
})
