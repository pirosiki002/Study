import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [text, setText] = useState("OFF!");

  const handleClick = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    if (newIsChecked) {
      setText("ON");
    } else {
      setText("OFF");
    }
  };

  return (
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
      <label htmlFor="my-check">check</label>
      <input
        type="checkbox"
        id="my-check"
        checked={isChecked}
        onClick={handleClick}
      ></input>
      {text}
    </p>
  );
};

export default Example;
