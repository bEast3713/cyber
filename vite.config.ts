
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // This ensures process.env.API_KEY is available in the browser after build
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  }
});
