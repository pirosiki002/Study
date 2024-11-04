"use client";
import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountResult title="カウント" count={count} />
      <CountUpdate setCount={setCount} />
    </>
  );
};

// eslint-disable-next-line react/prop-types
const CountResult = ({ title, count }) => {
  return (
    <>
      {/* propsのtitleとcountの値を表示 */}
      <h3>
        {title}:{count}
      </h3>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const CountUpdate = ({ setCount }) => {
  const countUp = () => {
    /* countに1追加 */
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    /* countから1マイナス */
    setCount((prev) => prev - 1);
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
