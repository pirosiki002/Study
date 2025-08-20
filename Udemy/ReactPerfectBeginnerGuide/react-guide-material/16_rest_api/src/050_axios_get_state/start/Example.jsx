import { useEffect, useState } from 'react';
import axios from 'axios';

const Example = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('useEffect called');
    const getUser = async () => {
      const res = await axios.get('http://127.0.0.1:3003/user');
      // console.log(res.data);
      setUsers(res.data);
    };
    getUser();
  }, []);

  return (
    <div>
      {users.map(user => {
        return (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>age:{user.age}</p>
            <p>hobby:{user.hobbies.join(',')}</p>
            {/* <p>hobby:{user.hobbies}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Example;
