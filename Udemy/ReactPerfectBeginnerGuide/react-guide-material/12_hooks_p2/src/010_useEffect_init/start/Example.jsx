import { useState, useEffect } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(
    () => {
      console.log("useEffect is called");
      const intervalId = window.setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);

      // クリーンアップ関数を返す
      return () => {
        clearInterval(intervalId);
      };
    },
    // time,
    // setTime
    []
  );

  return (
    <>
      <h3>
        <time>{time}</time>
        <span>sec past</span>
      </h3>
    </>
  );
};

export default Example;
