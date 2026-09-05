import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  webServer: {
    command: 'npx http-server ./src/pages -p 8080',
    port: 8080,
    reuseExistingServer: true,
  },

  use: {
    headless: true,
  },
});
