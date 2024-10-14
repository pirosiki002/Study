import { useState } from "react";
// const [buttonC, setButtonC] = useState(0);

const Example = () => {
  const [buttonA, setButtonA] = useState(0);
  const [buttonB, setButtonB] = useState(10);
  // const [buttonC, setButtonC] = useState(0);

  // if (1) {
  //   const [buttonC, setButtonC] = useState(0);
  // }

  // const buttonACnt = 0;
  // const buttonBCnt = 0;
  // const buttonCCnt = 0;

  // const handleA = () => {
  //   setButtonA(buttonA + 1);
  // };

  return (
    <>
      <p>ボタンAを{buttonA}回押しました！</p>
      {/* <button onClick={handleA}>ボタンA</button> */}
      <button
        onClick={() => {
          setButtonA(buttonA + 1);
        }}
      >
        ボタンA
      </button>
      <p>ボタンBを{buttonB}回押しました！</p>
      <button
        onClick={() => {
          setButtonB(buttonB + 1);
        }}
      >
        ボタンB
      </button>
      {/* <p>ボタンCを{buttonC}回押しました！</p> */}
    </>
  );
};

export default Example;
