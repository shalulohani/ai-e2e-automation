import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('admin', 'admin123');
});
