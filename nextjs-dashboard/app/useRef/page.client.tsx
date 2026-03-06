'use client';
import React, { useState, useRef, FC } from 'react';

const ClientPage: FC = () => {
  // useState を使用したカウンター
  const [stateCount, setStateCount] = useState(0);

  // useRef を使用したカウンター
  const refCount = useRef(0);

  const incrementStateCount = () => {
    setStateCount(prev => prev + 1);
  };

  const incrementRefCount = () => {
    refCount.current = refCount.current + 1;
    console.log('useRef の値:', refCount.current); // コンソールで値の変化を確認
    // ここでは再レンダリングが発生しないため、画面上の表示は変わりません
  };

  return (
    <div>
      <h2>useState カウンター</h2>
      <p>Count: {stateCount}</p>
      <button onClick={incrementStateCount}>Increment useState</button>

      <h2>useRef カウンター</h2>
      <p>Count: (画面には直接表示されないが、コンソールで確認)</p>
      <button onClick={incrementRefCount}>Increment useRef</button>

      {/* useRef の値を直接表示しようとすると、再レンダリングされないためボタンを押しても値が変わらない */}
      <p>Ref Current Value (表示は更新されない): {refCount.current}</p>

      <p>
        **ポイント:** useState で変更すると画面の表示もすぐに更新されますが、
        useRef で変更しても画面は更新されません。 useRef の値は console.log
        で確認してください。
      </p>
    </div>
  );
};

export default ClientPage;
