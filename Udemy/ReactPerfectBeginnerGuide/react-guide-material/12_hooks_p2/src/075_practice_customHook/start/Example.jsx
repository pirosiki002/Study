import useCount from "./hooks";
const Example = () => {
  const { onClick, count } = useCount();

  return (
    <>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードと同じ状態になるようにしてください。
        startフォルダの中にhooks.jsというファイルを作成しその中でuseCountというカスタムフックを作成してください。
      </p>
      <div>Counts: {count}</div>
      {/* <button onClick={() => {}}>Count Up!</button> */}
      <button onClick={onClick}>Count Up!</button>
    </>
  );
};

export default Example;
