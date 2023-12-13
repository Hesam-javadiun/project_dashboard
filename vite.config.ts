import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "~components": "/src/components",
      "~assets" : "/src/assets",
      "~hooks" : "/src/hooks",
      "~layouts" : "/src/layouts",
      "~lib" : "/src/lib",
      "~pages" : "/src/pages",
      "~services" : "/src/services",
      "~utils" : "/src/utils",
      "~features" : "/src/features",
      "~data" : "/src/data",
      "~context" : "/src/context",
    }
  }
})
