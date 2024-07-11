import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://github-search-vert-mu.vercel.app/");

  // Expect a title
  await expect(page).toHaveTitle(/Bem vindo ao GitHub Search/);
});

test("has text", async ({ page }) => {
  await page.goto("https://github-search-vert-mu.vercel.app/");

  // Expect text
  await expect(page.getByText("GitHub Search")).toBeVisible();
  await expect(
    page.getByPlaceholder("Algo interessante no GitHub?")
  ).toBeVisible();
});

test("has button", async ({ page }) => {
  await page.goto("https://github-search-vert-mu.vercel.app/");

  // Expect button
  await expect(page.getByRole("button", { name: "Pesquisar" })).toBeVisible();
});
