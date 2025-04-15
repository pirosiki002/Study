import { useState } from "react";
import List from "./List";
import Form from "./Form";

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
    if (!input) return; // if brank input, return
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
      <Form input={input} setInput={setInput} addList={addList} />
    </>
  );
};
export default Todo;
