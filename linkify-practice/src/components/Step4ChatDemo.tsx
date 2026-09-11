/**
 * Step 4: 実用（チャット風UIへの組み込み）
 *
 * 実際のアプリでリンク化が必要になるのは、ユーザーが自由入力した本文を
 * 表示する場面（チャット、掲示板、コメント欄）。
 * ここでは投稿フォームと組み合わせて、次の実務上の論点を確認する。
 *   - ユーザー入力をそのまま表示しても安全な理由
 *   - 改行の保持
 *   - Linkify の as プロパティで余計な入れ子を減らす
 */
import { useState } from 'react'
import Linkify from 'linkify-react'
import 'linkify-plugin-mention'
import 'linkify-plugin-hashtag'

type Message = {
  id: number
  author: string
  body: string
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    author: 'さとう',
    body: '公式ドキュメントはこちら https://linkify.js.org/docs/\n参考になったら #react で共有お願いします',
  },
  {
    id: 2,
    author: 'たなか',
    body: '@sato ありがとう！\n質問は support@example.com まで送ってもいいですか？',
  },
  {
    id: 3,
    author: 'いとう',
    body: '<script>alert(1)</script> と書いてもスクリプトは実行されない。React が文字列として描画するため。',
  },
]

const linkifyOptions = {
  target: '_blank',
  rel: 'noopener noreferrer',
  className: 'auto-link',
  // 長いURLは省略表示。href は元のまま保たれる。
  truncate: 36,
  formatHref: {
    mention: (href: string) => `/users${href}`,
    hashtag: (href: string) => `/tags${href.slice(1)}`,
  },
}

export function Step4ChatDemo() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [draft, setDraft] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const body = draft.trim()
    if (!body) return

    setMessages((prev) => [...prev, { id: Date.now(), author: 'あなた', body }])
    setDraft('')
  }

  return (
    <div className="chat">
      <ul className="chat-list">
        {messages.map((message) => (
          <li key={message.id} className="chat-item">
            <span className="chat-author">{message.author}</span>
            {/*
              as="p" を指定すると、Linkify 自身が <p> として描画される。
              指定しないと React.Fragment になり、
              改行保持のスタイルを当てるための要素を別途用意する必要がある。
            */}
            <Linkify as="p" className="chat-body" options={linkifyOptions}>
              {message.body}
            </Linkify>
          </li>
        ))}
      </ul>

      <form className="chat-form" onSubmit={handleSubmit}>
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="URL や @mention、#hashtag を含めて投稿してみる"
          rows={3}
        />
        <button type="submit">投稿</button>
      </form>
    </div>
  )
}
