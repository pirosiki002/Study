import { useState } from "react";

const Example = () => {
  // let valArray = useState();
  let [val, setVal] = useState();
  // console.log(valArray);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          // const setFn = valArray[1];
          setVal(e.target.value);
          // valArray = e.target.value;
        }}
      />
      = {val}
    </>
  );
};

export default Example;
