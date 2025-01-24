import { useState, useEffect } from "react";

// URLからユーザーデータ取得
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function User() {
  const [users, setUsers] = useState([]);

  // useEffectでfetchデータ取得
  useEffect(() => {
    fetchUsers().then((data) => {
      console.log({ data });
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <h2>ユーザ一覧</h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default User;
