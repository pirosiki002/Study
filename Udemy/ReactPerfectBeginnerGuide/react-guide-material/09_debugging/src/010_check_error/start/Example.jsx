import { useState } from "react";
const Example = () => {
  // const [count, setCount] = useState({ val: 0 });
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prevstate) => {
      // prevstate.val += 1;
      prevstate += 1;
      return prevstate;
    });
  };

  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>+</button>
    </>
  );
};

export default Example;
