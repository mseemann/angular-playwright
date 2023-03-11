import { test, expect } from '@playwright/test';

const URL = 'http://localhost:4200/';

test('has title', async ({ page }) => {
  await page.goto(URL);

  await expect(page).toHaveTitle('Angular Playwright');
});

test('show text on button click', async ({ page }) => {
  await page.goto(URL);

  await page.getByText('Click me').click();

  await expect(page.locator('div').last()).toContainText('A text.');

});
