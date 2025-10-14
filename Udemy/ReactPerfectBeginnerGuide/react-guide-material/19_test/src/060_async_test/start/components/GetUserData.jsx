import { useEffect, useState } from 'react';
import axios from 'axios';

const GetUserData = ({ url }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then(response => setUserData(response.data))
      .catch(err => {
        console.error('API Error:', err);
        setError(err.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {error ? (
        <h1>エラー: {error}</h1>
      ) : userData ? (
        <>
          <h2>プロフィール</h2>
          <ul>
            <li>ID: {userData.id}</li>
            <li>Name: {userData.name}</li>
          </ul>
        </>
      ) : (
        <h1>通信中です！</h1>
      )}
    </div>
  );
};

export default GetUserData;
