import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

test('Verify dashboard loads after login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('admin', 'admin123');

  // Dashboard URL check
  await expect(page).toHaveURL(/dashboard/);

  // Optional: check dashboard heading
  await expect(page.locator('h2')).toContainText('Dashboard');
});
