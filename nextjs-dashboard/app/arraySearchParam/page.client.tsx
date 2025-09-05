'use client';
import React, { useState, useOptimistic } from 'react';
export const ClientPage = () => {
  // サーバーから取得した「本当のいいね数」
  const [likeCount, setLikeCount] = useState(100);
  const [optimisticLikeCount, addOptimisticLike] = useOptimistic(
    likeCount,
    currentCount => currentCount + 1
  );
  return (
    <>
      <p>Page client</p>
    </>
  );
};
