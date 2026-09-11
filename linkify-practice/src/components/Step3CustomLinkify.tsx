/**
 * Step 3: カスタマイズ
 *
 * linkify-react の options で挙動を細かく制御する。ここで扱うのは4つ。
 *   - プラグイン   : @mention / #hashtag も検出対象にする
 *   - validate     : 危険なリンクや不要なリンクを弾く
 *   - formatHref   : 実際の href を組み立て直す
 *   - render       : <a> を自前のコンポーネントに差し替える
 */
import Linkify from 'linkify-react'
// 型定義は linkify-react ではなく linkifyjs 本体からエクスポートされている。
import type { IntermediateRepresentation, Opts } from 'linkifyjs'

// プラグインは「副作用インポート」するだけで linkifyjs 本体に登録される。
// これを書いた時点から @mention と #hashtag が検出されるようになる。
import 'linkify-plugin-mention'
import 'linkify-plugin-hashtag'

/**
 * 自前のリンクコンポーネント。
 * 実務では react-router の <Link> や Next.js の <Link> をここに入れることが多い。
 * type（url / email / mention / hashtag）ごとに見た目を変えている。
 */
function CustomLink({ attributes, content }: IntermediateRepresentation) {
  // attributes には href / target / rel / className などが入っている。
  const { href, ...rest } = attributes

  // href の先頭を見て種類を判定（mention は "/user"、hashtag は "/tag/..."）
  const isInternal = href.startsWith('/')

  return (
    <a
      href={href}
      {...rest}
      className={`auto-link ${isInternal ? 'internal-link' : 'external-link'}`}
      // 外部リンクにだけアイコンを付ける、といった演出もここでできる
    >
      {content}
      {!isInternal && <span aria-hidden="true"> ↗</span>}
    </a>
  )
}

const options: Opts = {
  // --- 1. すべてのリンクを自前コンポーネントで描画する ---
  render: CustomLink,
  // 種類ごとに分けたい場合はオブジェクトで渡せる:
  //   render: { url: CustomLink, mention: MentionLink, hashtag: HashtagLink }

  // --- 2. validate: false を返したリンクはリンク化されず、ただの文字列になる ---
  validate: {
    // javascript: や data: スキームを href に入れられると XSS になる。
    // linkifyjs 自体は javascript: を URL として検出しないが、
    // 「許可するものだけ通す」ホワイトリスト方式にしておくのが安全。
    url: (value) => /^(https?:\/\/|www\.)/i.test(value),
  },

  // --- 3. formatHref: 検出した文字列から実際の href を組み立てる ---
  formatHref: {
    // "@sample" → "/users/sample"
    mention: (href) => `/users${href}`,
    // "#react" → "/tags/react"（href は "/react" の形で渡ってくる）
    hashtag: (href) => `/tags${href.slice(1)}`,
  },

  // --- 4. その他よく使うオプション ---
  target: '_blank',
  rel: 'noopener noreferrer',
  // 長い URL を省略表示する（リンク先は元のまま）
  truncate: 40,
}

type Props = {
  text: string
}

export function Step3CustomLinkify({ text }: Props) {
  return (
    <p className="output">
      <Linkify options={options}>{text}</Linkify>
    </p>
  )
}
