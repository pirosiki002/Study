'use client';
import { useState, useCallback, FC } from 'react';

const ClientPage: FC = () => {
  const [count, setCount] = useState(0);

  //   const handleCount = () => {
  //     setCount(count + 1);
  //   };

  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <button onClick={handleCount}>click here!</button>
      <p>current count:{count}</p>
    </>
  );
};

export default ClientPage;
