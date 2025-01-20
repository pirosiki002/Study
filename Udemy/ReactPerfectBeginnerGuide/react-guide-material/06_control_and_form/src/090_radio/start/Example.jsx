import { useState } from "react";

const Example = () => {
  const [fruit, setFruit] = useState("");

  const handleChange = (e) => setFruit(e.target.value);

  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      <label>
        <input
          type="radio"
          value="Apple"
          checked={fruit === "Apple"}
          onChange={handleChange}
        />
        Apple
      </label>
      <label>
        <input
          type="radio"
          value="Banana"
          checked={fruit === "Banana"}
          onChange={handleChange}
        />
        Banana
      </label>
      <label>
        <input
          type="radio"
          value="Cherry"
          checked={fruit === "Cherry"}
          onChange={handleChange}
        />
        Cherry
      </label>
      <h3>I'd like to eat a {fruit}</h3>
    </>
  );
};

export default Example;
