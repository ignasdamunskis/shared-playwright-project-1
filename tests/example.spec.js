// @ts-check
const { test, expect } = require('@playwright/test');
const { openPlaywrightSite } = require('shared-playwright-project-2/helpers/example');

test('verify playwright site content', async ({ page }) => {
  await openPlaywrightSite({ page });
  const title = page.locator('.features_keug .col:first-child h3');
  await expect(title).toHaveText('Any browser • Any platform • One API');
});
