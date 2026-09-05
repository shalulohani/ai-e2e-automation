import { expect, Page, Locator } from "@playwright/test";

export class DashboardPage {
  readonly welcomeMessage: Locator;

  constructor(private readonly page: Page) {
    this.welcomeMessage = page.locator("#welcome");
  }

  async goto() {
    // Local server se dashboard load hoga
    await this.page.goto("http://localhost:8080/dashboard.html");
  }

  async verifyDashboardLoaded(): Promise<void> {
    await expect(this.welcomeMessage).toBeVisible();
  }
}
