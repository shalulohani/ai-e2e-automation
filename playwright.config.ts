import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  webServer: {
    command: 'npx http-server ./src/pages -p 8080',
    port: 8080,
    reuseExistingServer: true,
    timeout: 120 * 1000, // wait up to 2 minutes for server to start
  },

  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  reporter: [
    ['html', { open: 'never' }]
  ]
});
