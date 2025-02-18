// サーバーコンポーネントとしてのUserInfo
export function UserInfo() {
  // サーバーサイドでユーザー情報を取得する例
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
