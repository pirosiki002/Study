import { test, expect } from '@playwright/test';

/**
 * 最小限のテスト: localhost:3000が開ければPass
 *
 * このテストはPlaywrightのインストールが成功しているかを確認するための
 * 最小限のテストです。
 */
test('localhost:3000が開ける', async ({ page }) => {
  // トップページにアクセス
  await page.goto('/');

  // ページが正常に読み込まれることを確認
  // ページタイトルまたはページが表示されることを確認
  await expect(page).toHaveURL('http://localhost:3000/');

  // ページが正常に読み込まれたことを確認（body要素が存在する）
  await expect(page.locator('body')).toBeVisible();
});
