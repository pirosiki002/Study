import { useState } from "react";
import "./Example.css";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      {/* <button style={style} onClick={clickHandler}> */}
      {/* <button
        className={isSelected ? "btn selected" : "btn"}
        onClick={clickHandler}
      > */}
      <button
        className={`btn ${isSelected ? " selected" : ""}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
