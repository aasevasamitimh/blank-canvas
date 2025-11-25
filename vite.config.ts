import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        english: path.resolve(__dirname, 'english/index.html'),
        marathi: path.resolve(__dirname, 'marathi/index.html'),
      },
    },
  },
  server: {
    port: 8080,
    open: true,
  },
});
