'use client';
import React, { useState } from 'react';

// 大量のデータ（10,000件）を作成
// このような大量データのフィルタリングは、useTransitionを使わないと
// ユーザーの入力に対してUIがブロックされる可能性があります
const items = Array.from({ length: 10000 }, (_, i) => `item-${i}`);

export const ClientPage = () => {
  const [query, setQuery] = useState('');

  // フィルタリング処理が同期的に実行される
  // 大量のデータを処理する際、この処理がメインスレッドをブロックし
  // ユーザーの入力に対するレスポンスが遅くなる可能性があります
  const filtered = items.filter(item => item.includes(query));

  return (
    <>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="search"
      />
      <ul>
        {filtered.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
