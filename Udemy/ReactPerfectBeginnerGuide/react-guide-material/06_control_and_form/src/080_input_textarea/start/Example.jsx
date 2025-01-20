import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");

  const handleClear = () => {
    setVal("");
  };

  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      <label htmlFor="456">label</label>
      <input
        id="123"
        placeholder="hello"
        onChange={(e) => {
          setVal(e.target.value);
        }}
        value={val}
      />
      <textarea
        id="456"
        placeholder="hello"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <h3>{val}</h3>
      <button onClick={handleClear}>clear</button>
    </>
  );
};

export default Example;
