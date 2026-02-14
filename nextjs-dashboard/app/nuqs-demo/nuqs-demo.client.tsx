'use client';

import { useQueryState, parseAsInteger } from 'nuqs';

/**
 * nuqs の基本動作を確認するデモ
 * - 文字列 (search): 入力フィールドで変更
 * - 数値 (count): ボタンで増減
 * 操作するとURLの ?search=...&count=... がリアルタイムで変わります
 *
 * 型安全: パーサーで「URL文字列 → 扱う型」を決める。
 * - コンパイル時: TypeScript がパーサーから型を推論（例: parseAsInteger → number）
 * - 実行時: 不正な値はパーサーが弾き、defaultValue や null になる
 */
export function NuqsDemo() {
  // パーサーなし → 型は string（defaultValue で ''）
  const [search, setSearch] = useQueryState('search', { defaultValue: '' });
  // parseAsInteger: URL の値を整数にパース。型は number。.withDefault(0) で未指定時は 0
  const [count, setCount] = useQueryState(
    'count',
    parseAsInteger.withDefault(0)
  );

  return (
    <div className="space-y-6 border rounded-lg p-6 bg-gray-50">
      {/* 現在のクエリパラメータ（nuqs で読み取った値） */}
      <div className="text-sm text-gray-500">
        <strong>URLクエリ:</strong> ?search={search || '(なし)'}&amp;count={count}
      </div>

      {/* 1. 文字列パラメータ (search) */}
      <div>
        <label className="block text-sm font-medium mb-2">
          search（文字列） → ?search=...
        </label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value || null)}
          placeholder="入力するとURLが変わります"
          className="w-full border rounded px-3 py-2"
        />
        <button
          type="button"
          onClick={() => setSearch(null)}
          className="mt-2 text-sm text-blue-600 hover:underline"
        >
          search をクリア
        </button>
      </div>

      {/* 2. 数値パラメータ (count) */}
      <div>
        <label className="block text-sm font-medium mb-2">
          count（数値） → ?count=...
        </label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 border rounded bg-white hover:bg-gray-100"
          >
            -
          </button>
          <span className="text-lg font-mono w-12 text-center">{count}</span>
          <button
            type="button"
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 border rounded bg-white hover:bg-gray-100"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => setCount(null)}
            className="text-sm text-blue-600 hover:underline"
          >
            クリア
          </button>
        </div>
      </div>

      {/* 読み取り値の確認 */}
      <div className="pt-4 border-t text-sm">
        <strong>読み取り値:</strong> search=&quot;{search}&quot;, count={count}
      </div>
    </div>
  );
}
