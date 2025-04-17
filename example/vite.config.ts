import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    "target": "es2017",
    minify:false,
  },
  optimizeDeps:{
    exclude: ['@fullcalendar/core', '@fullcalendar/daygrid',"preact"],
  },
  resolve:{
    dedupe: ['solid-js'],
  }
  
});
