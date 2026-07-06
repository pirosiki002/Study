'use client';
import { useState } from 'react';

const Lesson1_1 = () => {
  // const [age, setAge] = useState(0);
  const [age, setAge] = useState<number>(0);

  const handleClick = () => {
    setAge(age + 1);
    console.log(age);
    // 更新されていないage 0に１を加える
    setAge(age + 1);
    console.log(age);
    // 更新されていないage 0に１を加える
    setAge(age + 1);
    console.log(age);
    // すべての処理が終わったら再レンダリングで値を反映する
  };

  return (
    <div>
      <input type="text" />
      <button
        className="border p-2 rounded-md bg-red-100"
        onClick={handleClick}
      >
        Add Age
      </button>
      <p>You are {age}</p>
    </div>
  );
};

export default Lesson1_1;
