import "dotenv/config";
const { test, expect } = require("@playwright/test");

test.describe("post a text only tweet", () => {

  test.skip("post a text only tweet", async ({ page }) => {
    await page.goto(process.env.BASE_URL + "/login");

    await page.getByLabel("Username").click();
    await page.getByLabel("Username").fill("valentino");

    await page.getByLabel("Password").click();
    await page.getByLabel("Password").fill("Sirius1337!!");
    await page.getByText("Login").click();
    await expect(page.getByRole("heading", { name: "Home" })).toBeVisible();


    const myComment = "esta es una respuesta automatica";
    await expect(page.getByAltText("chat-icon").first()).toBeVisible();
    await expect(page.getByAltText("chat-icon").first().click());
    await page.getByPlaceholder("Tweet your reply").fill(myComment);
    await page.getByRole("button", { name: "Tweet" }).click();
    await expect(page.getByText(myComment)).toBeVisible();
  });
});
