import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    environment: 'happy-dom',
    coverage: {
      provider: 'istanbul',
    },
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
    ],
    include: ['**/test/*.{js,tsx,ts}'],
    alias: {
      '@root': './src',
    },
  },
})
