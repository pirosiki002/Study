import { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    // const addCnt = count + 1;
    // setCount(addCnt);
    setCount(count + 1);
  };

  return {
    count,
    onClick,
  };
};
export default useCount;
