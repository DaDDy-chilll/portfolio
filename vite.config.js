import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  resolve:{
    alias:{
      '@pages':'/src/pages',
      '@assets':'/src/assets',
      '@components':'/src/components',
      '@store':'/src/store'
    }
  }
=======
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      assets: "/src/assets",
      lib: "/src/lib",
    },
  },
>>>>>>> a94480289bed43863b03cdf874eab63bdef0b171
})
