// 現在の日時を取得
const now = new Date();

// コンソールにメッセージを出力
console.log("=== GitHub Actions Test ===");
console.log(`実行時刻: ${now.toLocaleString()}`);
console.log("Node.jsのバージョン:", process.version);
console.log("========================");
