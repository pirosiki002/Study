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
  const [list, setList] = useState(todosList);

  const onDelete = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
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
    </>
  );
};
export default Todo;
