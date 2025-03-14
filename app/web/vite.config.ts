/// <reference types="vitest" />

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const DEFAULT_PORT = 5173;

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    port: Number(process.env.PORT) || DEFAULT_PORT,
    proxy: {
      '/api': {
        target: process.env.TARGET,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    globals: true,
  },
});
