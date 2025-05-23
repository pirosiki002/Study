/* eslint-disable react/prop-types */
import { useState } from "react";

const Child = ({ count }) => {
  // debugger;
  return <p>現在のカウント数: {count.val}</p>;
};

const Example = () => {
  const [count, setCount] = useState({ val: 0 });

  const countUp = () => {
    setCount((prevstate) => {
      const newState = { val: prevstate.val + 1 };
      return newState;
    });
  };

  return (
    <>
      <Child count={count} />
      <button onClick={countUp}>+</button>
    </>
  );
};

export default Example;
