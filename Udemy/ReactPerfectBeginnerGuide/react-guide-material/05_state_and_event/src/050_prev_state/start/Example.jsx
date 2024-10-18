import { useState } from "react";

const Example = () => {
  const [cnt, setCnt] = useState(0);

  const countDown = () => {
    setCnt(cnt - 1);
  };

  return (
    <>
      <p>現在のカウント数：{cnt}</p>
      <button
        // キャメルケースで指定しないと反応しません！！
        // onclick={() => {
        onClick={() => {
          setCnt(cnt + 1);
          setCnt((prevstate) => {
            return prevstate + 1;
          });
          console.log(cnt);
        }}
      >
        +
      </button>
      {/* <button
        onClick={() => {
          setCnt(cnt - 1);
        }}
      > */}
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
