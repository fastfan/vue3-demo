import { resolve } from 'path'

import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",   // 开发环境和生产环境路径  如果放如的生产环境不是在根目录下，需要要加上放入文件的文件名 '/product'
  plugins: [
    vue(), vueJsx(),
    // @ts-ignore
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      "#": resolve(__dirname, './types'), // #代替types
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"] // 导入时想要省略的扩展名列表，不建议省.vue
  },
  // css的配置
  css: {

  },
  server: {
    host: "127.0.0.1", // 主机名
    port: 8080,
    open: true, //自动打开   
    strictPort: true, // 端口被占用调用下个端口
    proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      '^/municipal': {
        target: 'http://10.10.77.134:9320/',
        changeOrigin: true, //开启代理
        // rewrite: (path) => path.replace(/^\/municipal/, '')
      },
    }
  },
  // 正式环境的配置
  build: {
    target: 'modules', // 
    outDir: 'dist', // 指定输出的路径，相当于项目根目录
    assetsDir: "assets", // 静态资源存放路径，相对于outDir
    assetsInlineLimit: 4096, // 小于此配置的会被base64编码，0为完全禁用
    cssCodeSplit: true, // 启用/禁用css代码拆分  如果禁用整个项目所有css将会提取为一个css
    sourcemap: false, // boolen| inline 构建后是不是生产source map 文件
    chunkSizeWarningLimit: 500, // chunk大小警告
  }
})
