import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  onclick = (num) => {
    const addCnt = count + 1;
    setCount(addCnt);
  };
  return (
    <>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードと同じ状態になるようにしてください。
        startフォルダの中にhooks.jsというファイルを作成しその中でuseCountというカスタムフックを作成してください。
      </p>
      <div>Counts: {count}</div>
      <button onClick={() => {}}>Count Up!</button>
    </>
  );
};

export default Example;
