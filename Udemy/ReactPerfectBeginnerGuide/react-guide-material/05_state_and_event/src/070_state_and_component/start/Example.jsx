import { useState } from "react";

const Example = () => {
  const [toggle, setToggle] = useState(true);

  const changeToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <button onClick={changeToggle}>Toggle</button>
      {toggle ? <Count key="A" name={"A"} /> : <Count key="B" name={"B"} />}
    </>
  );
};

const Count = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>
        {name}: {count}
      </h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
