import { useState } from "react";
import List from "./List";

const todosList = [
  {
    id: 1,
    content: "店予約する",
  },
  {
    id: 2,
    content: "卵買う",
  },
  {
    id: 3,
    content: "郵便出す",
  },
];

const Todo = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState(todosList);

  // リストに追加する
  const addList = () => {
    // 入力した値をリストに追加
    // const newList = list.push({ id: {list.length + 1}, content: { input } });
    const newList = [...list, { id: list.length + 1, content: input }];
    setList(newList);
    // input をクリア
    setInput("");
  };

  return (
    <>
      <List list={list} setList={setList} />
      {/* Form.jsに移動する */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addList();
        }}
      >
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">追加</button>
      </form>
    </>
  );
};
export default Todo;
