import { Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  readonly username;
  readonly password;
  readonly loginButton;

  constructor(page: Page) {
    this.page = page;
    this.username = this.page.locator('input[placeholder="Username"]');
    this.password = this.page.locator('input[placeholder="Password"]');
    this.loginButton = this.page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('http://127.0.0.1:8080/login.html');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }
}
