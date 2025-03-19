'use client';
import { useState, useCallback, FC } from 'react';

const ClientPage: FC = () => {
  const [count, setCount] = useState(0);

  //   const handleCount = () => {
  //     setCount(count + 1);
  //   };
  console.log('ClientPage called');

  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleLog = useCallback(() => {
    console.log('Button clicked!');
  }, []); // 依存配列が空なので、関数は再生成されません

  return (
    <>
      <button onClick={handleCount}>Count up!</button>
      <p>current count: {count}</p>
      <button onClick={handleLog}>Log message</button>
    </>
  );
};

export default ClientPage;
