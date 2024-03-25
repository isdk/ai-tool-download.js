import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    pool: 'forks',
    "setupFiles": [
      // "./setupVitest.mjs",
    ],
    globalSetup: [
      "./test/server-setup.mjs",
    ],
  },
})
