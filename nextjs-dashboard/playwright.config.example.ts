import { defineConfig, devices } from '@playwright/test';

/**
 * 設定例
 * 
 * このファイルは参考用です。実際の設定はplaywright.config.tsを確認してください。
 */

export default defineConfig({
  testDir: './e2e',
  
  /* 
   * Reporter設定の確認ポイント
   * 
   * 1. 単一のレポーターの場合:
   *    reporter: 'html',  // HTMLレポートが生成される
   *    reporter: 'list',  // HTMLレポートは生成されない（コンソール出力のみ）
   *    reporter: 'dot',   // HTMLレポートは生成されない（ドット表示のみ）
   * 
   * 2. 複数のレポーターを設定する場合:
   *    reporter: [
   *      ['list'],        // コンソールに詳細表示
   *      ['html'],        // HTMLレポートを生成
   *      ['json', { outputFile: 'test-results.json' }]  // JSONレポートも生成
   *    ],
   * 
   * 3. CI環境とローカル環境で分ける場合:
   *    reporter: process.env.CI 
   *      ? [['github'], ['html']]  // CI環境ではGitHub Actions用レポーター
   *      : [['list'], ['html']],   // ローカルではリスト表示とHTML
   */
  
  // 現在の設定（HTMLレポートが生成される）
  reporter: 'html',
  
  // 複数のレポーターを使う場合の例
  // reporter: [
  //   ['list'],  // コンソールに詳細な結果を表示
  //   ['html'],  // HTMLレポートを生成（playwright-report/index.html）
  // ],
  
  // CI環境とローカル環境で分ける場合の例
  // reporter: process.env.CI
  //   ? [['github'], ['html']]  // CI環境
  //   : [['list'], ['html']],   // ローカル環境
  
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});

