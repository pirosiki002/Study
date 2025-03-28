"use client";
import { useState } from "react";

const Example = () => {
  const fruits = ["Banana", "Apple", "Cherry"];
  const [fruit, setFruit] = useState(fruits[0]);

  return (
    <>
      <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
        {/* {fruits.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })} */}
        {/* {fruits.map((item) => (
          <option key={item}>{item}</option>
        ))} */}
        {fruits.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <br />
      選択された果物：{fruit}
    </>
  );
};

export default Example;
