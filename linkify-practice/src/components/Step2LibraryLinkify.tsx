/**
 * Step 2: ライブラリ版（linkify-react）
 *
 * Step 1 の自作版には次の弱点がある。
 *   - "http://" が付かない "example.com" を拾えない
 *   - メールアドレスを拾えない
 *   - 文末の句読点まで URL に含めてしまう（"見て https://example.com。" の「。」）
 *   - 日本語ドメイン、IPアドレス、括弧を含む Wikipedia URL などに弱い
 *
 * これらを全部自前で正規表現に詰め込むと破綻する。
 * linkifyjs は正規表現ではなく字句解析（トークナイザ＋ステートマシン）で
 * リンクを検出するので、上記のケースを正しく扱える。
 *
 * 補足: よく検索で出てくる "react-linkify" は 2019年から更新が止まっていて
 * React 18 以降で peer dependency の警告が出る。現行のメンテナンス版は
 * この "linkify-react"（linkifyjs 公式）なので、こちらを使う。
 */
import Linkify from 'linkify-react'

type Props = {
  text: string
}

export function Step2LibraryLinkify({ text }: Props) {
  return (
    <p className="output">
      {/*
        children に渡したテキスト内のリンクが自動で <a> に置き換わる。
        options に渡した属性はすべての <a> に適用される。
      */}
      <Linkify
        options={{
          target: '_blank',
          rel: 'noopener noreferrer',
          // className: 生成される <a> に付くクラス名
          className: 'auto-link',
        }}
      >
        {text}
      </Linkify>
    </p>
  )
}
