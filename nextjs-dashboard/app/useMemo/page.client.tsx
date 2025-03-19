'use client';
import { useState, useMemo } from 'react';
export default function ClientPage() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);

  // a, b どちらが呼ばれても再描写される
  // a * bが複雑な処理だった場合に負荷がかかる
  // const result = a * b;

  const result = useMemo(() => {
    console.log('useMemo called!!!');
    return a * b;
  }, [a, b]);

  const handleDummy = () => {
    console.log('handleDummy called!!');
  };

  return (
    <div>
      <p>
        {a} * {b} = {result}
      </p>
      <button onClick={() => setA(a + 1)}>aを増やす</button>
      <button onClick={() => setB(b + 1)}>bを増やす</button>
      <button onClick={handleDummy}>click here</button>
    </div>
  );
}
