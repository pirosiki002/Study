'use client';
import { useEffect, useState } from 'react';
import { fetchBio } from './fetchBio';

const Lesson2_2 = () => {
  const [person, setPerson] = useState<string>('ShinCode');
  const [bio, setBio] = useState<string | null>(null);

  useEffect(() => {
    const startFetching = async () => {
      const response = await fetchBio(person);
      // console.log(response);
      setBio(response);
    };
    startFetching();
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
    </div>
  );
};

export default Lesson2_2;
