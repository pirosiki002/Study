import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  // const onClick = () => {
  //   // const addCnt = count + 1;
  //   // setCount(addCnt);
  //   setCount(count + 1);
  // };
  // const countUp = () => setCount(count + 1);
  const countUp = () => setCount((state) => state + 1);

  return {
    count,
    // onClick,
    countUp,
  };
};
