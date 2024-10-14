// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';

export default defineConfig({
  plugins: [react(),
    new CaseSensitivePathsPlugin()
  ],
  resolve: {
    alias: {
      '@': '/src', // Ensure alias is defined here too
    },
  },
});
