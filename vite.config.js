import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      main: path.resolve(__dirname, './src/scss/main.scss'),
    },
  },
  plugins: [react()],
});
