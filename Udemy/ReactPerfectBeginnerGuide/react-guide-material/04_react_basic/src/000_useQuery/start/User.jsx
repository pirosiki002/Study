// import { useState, useEffect } from "react";
// import { useQuery } from "react-query";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// URLからユーザーデータ取得
const fetchUsers = async () => {
  console.log("Fetching users...");

  // 2秒の遅延を追加
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // 意図的にエラーをスロー
  // throw new Error("Intentional fetch error");
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

function User() {
  const [count, setCount] = useState(0);

  const { data, error, isLoading, isSuccess, status } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5000, // キャッシュの有効期限を5秒に設定
    // cacheTime: 10000, // キャッシュの保持期間を10秒に設定
    gcTime: 10000, // ガベージコレクションの時間（注：v5では`cacheTime`の代わりに`gcTime`を使用）    // retry: 3, // リトライ回数を3回に設定
    // retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000), // リトライ間隔を指数関数的に増加
  });

  // クエリの状態とデータをコンソールにログ出力
  console.log({ status, data, error });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>ユーザ一覧</h2>
      <button onClick={() => setCount(count + 1)}>再レンダリング</button>
      <div>
        {data?.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default User;
