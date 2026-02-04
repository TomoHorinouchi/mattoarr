import { expect, test } from "@playwright/test";

test("desktop layout has side-by-side panels", async ({ page }) => {
  await page.goto("/");
  await page.setViewportSize({ width: 1280, height: 720 });

  const card = page.getByTestId("csv-card");
  const panel = page.getByTestId("table-panel");

  await expect(card).toBeVisible();
  await expect(panel).toBeVisible();

  const cardBox = await card.boundingBox();
  const panelBox = await panel.boundingBox();
  expect(cardBox && panelBox).toBeTruthy();

  if (cardBox && panelBox) {
    expect(panelBox.x).toBeGreaterThan(cardBox.x);
  }

  await page.screenshot({
    path: "test-results/layout-desktop.png",
    fullPage: true,
  });
});

test("mobile layout stacks panels", async ({ page }) => {
  await page.goto("/");
  await page.setViewportSize({ width: 390, height: 844 });

  const card = page.getByTestId("csv-card");
  const panel = page.getByTestId("table-panel");

  await expect(card).toBeVisible();
  await expect(panel).toBeVisible();

  const cardBox = await card.boundingBox();
  const panelBox = await panel.boundingBox();
  expect(cardBox && panelBox).toBeTruthy();

  if (cardBox && panelBox) {
    expect(panelBox.y).toBeGreaterThan(cardBox.y);
  }

  await page.screenshot({
    path: "test-results/layout-mobile.png",
    fullPage: true,
  });
});
