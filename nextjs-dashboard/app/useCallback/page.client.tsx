'use client';
import { useState } from 'react';

export default function ClientPage() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleCount}>click here!</button>
      <p>current count:{count}</p>
    </>
  );
}
