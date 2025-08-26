'use client';
import { useState, useEffect } from 'react';

export default function SSR() {
  const [state, setState] = useState(undefined);

  useEffect(() => {
    setState('client loaded');
  }, []);

  return (
    <>
      <div className="page">SSR Page</div>
      <div>{state}</div>
    </>
  );
}
