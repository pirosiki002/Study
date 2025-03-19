'use client';
import { useState } from 'react';
export default function ClientPage() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);

  // a, b どちらが呼ばれても再描写される
  // a * bが複雑な処理だった場合に負荷がかかる
  const result = a * b;

  return (
    <div>
      <p>
        {a} * {b} = {result}
      </p>
      <button onClick={() => setA(a + 1)}>aを増やす</button>
      <button onClick={() => setB(b + 1)}>bを増やす</button>
    </div>
  );
}
