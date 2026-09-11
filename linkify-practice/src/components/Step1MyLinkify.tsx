/**
 * Step 1: 自作 Linkify（仕組みの理解）
 *
 * ライブラリを使わず、正規表現でテキストを分割してリンク化する。
 * ここで理解したいのは次の3点。
 *   1. なぜ dangerouslySetInnerHTML を使わずに済むのか
 *   2. String.prototype.split にキャプチャグループ付き正規表現を渡すと何が起きるか
 *   3. React は配列（文字列 + 要素の混在）をそのまま children として描画できる
 */

// キャプチャグループ「( )」で囲むのが重要。
// split に渡したとき、マッチした部分も結果の配列に残るようになる。
//
// 例: "見て https://example.com ね".split(/(https?:\/\/[^\s]+)/)
//      → ["見て ", "https://example.com", " ね"]
//        ^偶数        ^奇数(＝URL)          ^偶数
//
// つまり「奇数インデックスが必ずURL」になる。この性質を判定に使う。
const URL_REGEX = /(https?:\/\/[^\s<>"'`]+)/g

/**
 * テキストを React が描画できる配列に変換する。
 *
 * 戻り値の例:
 *   ["見て ", <a href="https://example.com">https://example.com</a>, " ね"]
 */
function linkify(text: string) {
  // split の結果は「通常テキスト」と「URL」が交互に並ぶ配列になる。
  const parts = text.split(URL_REGEX)

  return parts.map((part, index) => {
    // ここで URL_REGEX.test(part) を使ってはいけない。
    // g フラグ付きの正規表現は lastIndex という内部状態を持っていて、
    // test() を呼ぶたびに検索開始位置がずれ、同じ文字列でも true/false が交互に返る。
    // インデックスの偶数・奇数で判定すればこの罠を完全に避けられる。
    const isUrl = index % 2 === 1

    if (!isUrl) {
      // 通常のテキスト。React が自動でエスケープするので <script> 等を書かれても安全。
      return part
    }

    return (
      <a
        key={index}
        href={part}
        // 外部リンクを新しいタブで開く場合、rel の指定は必須。
        // noopener: リンク先から window.opener 経由で元ページを操作されるのを防ぐ
        // noreferrer: リファラ（どこから来たか）を送らない
        target="_blank"
        rel="noopener noreferrer"
      >
        {part}
      </a>
    )
  })
}

type Props = {
  text: string
}

export function Step1MyLinkify({ text }: Props) {
  // 配列をそのまま JSX の children に置ける。key さえ付けておけば警告も出ない。
  // whitespace-pre-wrap 相当のスタイルで改行と連続スペースを保持している（App.css 側）。
  return <p className="output">{linkify(text)}</p>
}
