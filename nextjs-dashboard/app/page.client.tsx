'use client';
// useOptimisticは実験的機能で、React18には含まれません。
import { useOptimistic } from 'react';

export const ClientPage = () => {
  // 初期状態はFalse（いいねしていない）
  const [liked, addOptimistic] = useOptimistic(
    false,
    (currentLiked, optimisticValue) => {
      // 楽観的状態の更新ロジック。ここでは単純に楽観的な値を反映
      return optimisticValue;
    }
  );

  async const handleClick = () => {
    // ユーザーのクリックを受けて楽観的にlikedの状態を切替え表示する
    addOptimistic(prev => !prev);
    // 実際にはサーバーにいいねの更新を非同期送信する
    await fakeServerUpdate();
  };

  return (
    <>
      <h1>Client Page</h1>
      <button onClick={handleClick}>{liked ? '♥ Liked' : '♡ Like'}</button>
    </>
  );
};

// 非同期サーバー処理の模擬関数
function fakeServerUpdate() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}
