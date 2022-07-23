import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {outDir:"./docs"}
  // base: <your_sub_dir> use this option for testing outside of our pulsar.github.io
})
