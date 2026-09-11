/**
 * Linkify 学習用アプリ本体。
 * 左のタブで Step 1〜4 を切り替え、同じサンプルテキストが
 * 各ステップでどう描画されるかを比較する。
 */
import { useState } from 'react'
import './App.css'
import { Step1MyLinkify } from './components/Step1MyLinkify'
import { Step2LibraryLinkify } from './components/Step2LibraryLinkify'
import { Step3CustomLinkify } from './components/Step3CustomLinkify'
import { Step4ChatDemo } from './components/Step4ChatDemo'

// 各ステップの差が分かるように、あえて難しいケースを混ぜたサンプル。
//   - スキーム無しのドメイン（example.com）→ Step 1 では拾えない
//   - 文末の句読点（。）→ Step 1 は URL に飲み込んでしまう
//   - メールアドレス、@mention、#hashtag → Step 1/2 では扱いが変わる
const SAMPLE_TEXT = `公式サイトは https://linkify.js.org/docs/ を見てください。
スキーム無しの www.example.com や example.com も書けます。
末尾に句読点が付くケース: https://example.com/path。
連絡先は support@example.com です。
@sato さん、#react のタグを付けておきました。
とても長いURL: https://example.com/very/long/path/that/should/be/truncated/somewhere`

const STEPS = [
  {
    id: 1,
    title: 'Step 1: 自作',
    summary:
      '正規表現 + split で自作する。仕組みは分かるが、スキーム無しドメイン・メール・句読点の扱いに弱い。',
  },
  {
    id: 2,
    title: 'Step 2: ライブラリ',
    summary:
      'linkify-react を使う。字句解析ベースなので Step 1 の弱点が解消される。',
  },
  {
    id: 3,
    title: 'Step 3: カスタマイズ',
    summary:
      'render / validate / formatHref とプラグインで、@mention・#hashtag や独自リンクに対応する。',
  },
  {
    id: 4,
    title: 'Step 4: 実用',
    summary:
      'チャット風UIに組み込む。改行の保持、ユーザー入力の安全な描画を確認する。',
  },
] as const

function App() {
  const [activeStep, setActiveStep] = useState<number>(1)
  const [text, setText] = useState(SAMPLE_TEXT)

  const current = STEPS.find((step) => step.id === activeStep)!

  return (
    <div className="app">
      <header>
        <h1>React Linkify 練習</h1>
        <p className="lead">
          テキスト中の URL・メール・@mention・#hashtag を自動でリンクに変換する方法を、
          自作からライブラリまで4段階で学ぶ。
        </p>
      </header>

      <nav className="tabs">
        {STEPS.map((step) => (
          <button
            key={step.id}
            type="button"
            className={step.id === activeStep ? 'tab active' : 'tab'}
            onClick={() => setActiveStep(step.id)}
          >
            {step.title}
          </button>
        ))}
      </nav>

      <p className="summary">{current.summary}</p>

      {activeStep === 4 ? (
        <Step4ChatDemo />
      ) : (
        <div className="panel">
          <label className="field">
            <span>入力テキスト（自由に編集して挙動を比べる）</span>
            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              rows={8}
            />
          </label>

          <div className="result">
            <h2>描画結果</h2>
            {activeStep === 1 && <Step1MyLinkify text={text} />}
            {activeStep === 2 && <Step2LibraryLinkify text={text} />}
            {activeStep === 3 && <Step3CustomLinkify text={text} />}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
