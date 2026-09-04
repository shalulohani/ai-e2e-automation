import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput;
  readonly passwordInput;
  readonly loginButton;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login');
  }

  async navigate() {
    // Local login.html page open karega
    await this.page.goto('file:///C:/Projects/ai-e2e-automation/src/pages/login.html');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
    await expect(this.page.locator('#message')).toBeVisible();
  }
}
