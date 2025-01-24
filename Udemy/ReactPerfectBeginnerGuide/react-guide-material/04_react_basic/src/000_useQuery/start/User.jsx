// import { useState, useEffect } from "react";
// import { useQuery } from "react-query";
import { useQuery } from "@tanstack/react-query";

// URLからユーザーデータ取得
const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

function User() {
  // const [users, setUsers] = useState([]);

  // useEffectでfetchデータ取得
  // useEffect(() => {
  //   fetchUsers().then((data) => {
  //     console.log({ data });
  //     setUsers(data);
  //   });
  // }, []);
  // const result = useQuery("users", fetchUsers);
  // console.log(result);

  const { data, error, isLoading, isSuccess, status } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log({ status });
  console.log({ isLoading });
  console.log({ isSuccess });
  console.log({ error });

  return (
    <div>
      <h2>ユーザ一覧</h2>
      <div>
        {/* {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))} */}
        {data?.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default User;
