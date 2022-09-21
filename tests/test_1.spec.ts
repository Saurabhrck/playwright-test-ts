import test from "../lambdatest-setup";
import { expect } from "@playwright/test";

test.describe("Browse LambdaTest in different search engines", () => {
  test("Search LambdaTest on Bing", async ({ page }) => {
    await page.goto("https://www.bing.com");
    const element = page.locator('[aria-label="Enter your search term"]');
    await element.click();
    await element.type("LambdaTest");
    await element.press("Enter");
    const title = await page.title();

    console.log("Page title:: ", title);
    // Use the expect API for assertions provided by playwright
    expect(title).toEqual(expect.stringContaining("LambdaTest"));
  });
});
