'use client';

// import './lib';
import { useState, useEffect } from 'react';

export default function ClientComp() {
  const [state, setState] = useState(undefined);

  useEffect(() => {
    setState('client loaded');
  }, []);

  return (
    <>
      <div>{state}</div>
    </>
  );
}
