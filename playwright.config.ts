import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // ⭐ Web server for CI/CD (MOST IMPORTANT)
  webServer: {
    command: 'npx http-server ./src/pages -p 8080',
    port: 8080,
    reuseExistingServer: true,
  },

  use: {
    headless: true,
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  reporter: [
    ['html', { open: 'never' }]
  ]
});
