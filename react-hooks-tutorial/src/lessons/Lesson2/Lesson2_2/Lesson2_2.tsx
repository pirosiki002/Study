'use client';
import { useEffect, useState } from 'react';
import { fetchBio } from './fetchBio';

const Lesson2_2 = () => {
  const [person, setPerson] = useState<string>('ShinCode');
  const [bio, setBio] = useState<string | null>(null);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    let ignore = false;
    const startFetching = async () => {
      const response = await fetchBio(person);
      console.log(person, 'ignore =', ignore); // ← 追加
      // console.log(response);
      if (!ignore) setBio(response);
    };
    startFetching();

    // setCount(count + 1);

    // clean up
    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <div>
      <select onChange={e => setPerson(e.target.value)} value={person}>
        <option value="ShinCode">ShinCode</option>
        <option value="TestUser">TestUser</option>
        <option value="SampleUser">SampleUser</option>
      </select>

      <hr />

      <p className="text-black">{bio ? bio : 'Loading...'}</p>
      {/* <p>{count}</p> */}
    </div>
  );
};

export default Lesson2_2;
