import { useState } from "react";

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

  const onDelete = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

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
      {/* List.jsに移動する */}
      {list.map((todo) => (
        <div key={todo.id} style={{ display: "flex", alignItems: "center" }}>
          <button onClick={() => onDelete(todo.id)}>完了</button>
          <p style={{ margin: 0 }}>{todo.content}</p>
        </div>
      ))}
      {/* Form.jsに移動する */}
      {/* <form> */}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addList}>追加</button>
      {/* </form> */}
    </>
  );
};
export default Todo;
