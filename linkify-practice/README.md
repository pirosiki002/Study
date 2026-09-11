# React Linkify 練習

テキスト中の URL・メールアドレス・`@mention`・`#hashtag` を自動でリンクに変換する方法を、
自作からライブラリまで4段階で学ぶための練習用プロジェクト。

## 起動

```bash
npm install
npm run dev
```

## 学習の流れ

画面上部のタブで Step 1〜4 を切り替えられる。同じサンプルテキストが各ステップで
どう描画されるかを比べながら進める。

### Step 1: 自作（`src/components/Step1MyLinkify.tsx`）

正規表現と `String.prototype.split` だけでリンク化する。ここで押さえるポイント:

- キャプチャグループ付きの正規表現を `split` に渡すと、マッチ部分も配列に残る
  → 結果は「通常テキスト」と「URL」が交互に並ぶ配列になり、**奇数インデックスが必ず URL**
- `g` フラグ付き正規表現の `test()` は `lastIndex` の内部状態を持つため、
  同じ文字列でも `true` / `false` が交互に返る。インデックスの偶奇で判定すればこの罠を避けられる
- `dangerouslySetInnerHTML` を使わないので XSS の心配がない。React は配列（文字列と要素の混在）を
  そのまま children として描画できる

自作版の限界も同時に体感する:

- `http://` が付かない `example.com` を拾えない
- メールアドレスを拾えない
- 文末の句読点（`https://example.com/path。` の「。」）まで URL に含めてしまう

### Step 2: ライブラリ（`src/components/Step2LibraryLinkify.tsx`）

`linkify-react` を導入して Step 1 の弱点を解消する。
linkifyjs は正規表現ではなく字句解析（トークナイザ + ステートマシン）でリンクを検出するため、
スキーム無しドメイン・メールアドレス・日本語混在テキストを正しく扱える。

> 検索でよく出てくる `react-linkify` は 2019年から更新が止まっており、React 18 以降で
> peer dependency の警告が出る。現行のメンテナンス版は linkifyjs 公式の `linkify-react`。

### Step 3: カスタマイズ（`src/components/Step3CustomLinkify.tsx`）

`options` で挙動を制御する。扱うのは4つ:

| オプション | 用途 |
| --- | --- |
| `render` | 生成される `<a>` を自前のコンポーネントに差し替える（React Router の `<Link>` など） |
| `validate` | `false` を返したリンクはリンク化されず、ただの文字列になる |
| `formatHref` | 検出した文字列から実際の `href` を組み立てる（`@sato` → `/users/sato`） |
| `truncate` | 長い URL を省略表示する（リンク先は元のまま） |

プラグイン（`linkify-plugin-mention` / `linkify-plugin-hashtag`）は
副作用インポート（`import 'linkify-plugin-mention'`）するだけで linkifyjs 本体に登録される。

型定義（`Opts` / `IntermediateRepresentation`）は `linkify-react` ではなく
**`linkifyjs` 本体からエクスポートされている**点に注意。

### Step 4: 実用（`src/components/Step4ChatDemo.tsx`）

チャット風 UI に組み込む。実務で問題になりやすい点を確認する:

- ユーザー入力をそのまま表示しても安全な理由（React の自動エスケープ）
- 改行の保持（CSS の `white-space: pre-wrap`）
- 長い URL でレイアウトが崩れない指定（`overflow-wrap: anywhere`）
- `as="p"` で Linkify 自身を要素として描画し、余計な入れ子を減らす

## セキュリティ上の注意

- 外部リンクを `target="_blank"` で開く場合、`rel="noopener noreferrer"` を必ず付ける
  - `noopener`: リンク先から `window.opener` 経由で元ページを操作されるのを防ぐ
  - `noreferrer`: リファラ（どこから来たか）を送らない
- `href` に `javascript:` や `data:` スキームを入れられると XSS になる。
  `validate` で「許可するものだけ通す」ホワイトリスト方式にしておく
- 受け取ったテキストを HTML として解釈させない。`dangerouslySetInnerHTML` は使わない

## 参考

- linkifyjs ドキュメント: https://linkify.js.org/docs/
- linkify-react: https://linkify.js.org/docs/linkify-react.html
