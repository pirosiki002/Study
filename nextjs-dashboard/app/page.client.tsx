'use client';
import React, { useState, useTransition } from 'react';

const items = Array.from({ length: 70000 }, (_, i) => `item-${i}`);

export const ClientPage = () => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(items);

  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    // フィルタリングの処理を「低優先度」で実行
    startTransition(() => {
      setFiltered(items.filter(item => item.includes(value)));
    });
  };

  // const filtered = items.filter(item => item.includes(query));

  return (
    <>
      <input value={query} onChange={handleChange} placeholder="search" />
      {isPending && <span>now renewing...</span>}
      <ul>
        {filtered.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
