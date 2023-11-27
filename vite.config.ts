import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3030,
  },

  preview: {
    port: 8080,
  },

  plugins: [
    react(),
    VitePWA(),
    sentryVitePlugin({
      org: 'requestkraken',
      project: 'plane-builder-ui',
    }),
  ],

  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },

  build: {
    sourcemap: true,
  },
});
