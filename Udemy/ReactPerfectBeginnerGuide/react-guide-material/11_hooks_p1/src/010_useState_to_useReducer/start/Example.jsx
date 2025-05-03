import { useReducer, useState } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  // const [rstate, dispatch] = useReducer((prev) => ++prev, 0);
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    // if (action === "+") {
    //   return ++prev;
    // } else if (action === "-") {
    //   return --prev;
    // }
    switch (type) {
      case "+":
        return (prev += step);
      case "-":
        return (prev -= step);
      default:
        throw new Error("it is unknown action");
    }
  }, 0);

  const countUp = () => {
    // setState((prev) => prev + 1);
    // setState(function test(prev) {
    //   return prev + 1;
    // });
    setState((prev) => {
      return ++prev;
    });
  };
  const rcountUp = () => {
    // dispatch("+");
    dispatch({ type: "+", step: 2 });
  };
  const rcountDown = () => {
    // dispatch("-");
    dispatch({ type: "-", step: 3 });
  };

  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
