import { useState } from 'react';
import { useDispatchTodos } from '../context/TodoContext';
import todoApi from '../api/todo';

const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const dispatch = useDispatchTodos();

  const changeContent = e => setEditingContent(e.target.value);

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    todoApi.patch(newTodo).then(newTodo => {
      dispatch({ type: 'todo/update', todo: newTodo });
    });
  };

  const confirmContent = e => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      editing: !todo.editing,
      content: editingContent,
    };
    // dispatch({ type: 'todo/update', todo: newTodo });
    todoApi.patch(newTodo).then(newTodo => {
      dispatch({ type: 'todo/update', todo: newTodo });
    });
  };

  // const complete = todo => {
  const complete = () => {
    console.log('削除対象のtodo:', todo); // デバッグ用
    console.log('todo.id:', todo.id); // IDを確認

    // IDを文字列に変換
    const todoToDelete = { ...todo, id: String(todo.id) };

    todoApi
      .delete(todo)
      .then(() => {
        dispatch({ type: 'todo/delete', todo: todo });
      })
      .catch(error => {
        console.error('削除エラー:', error);
      });
  };

  return (
    <div key={todo.id}>
      {/* <button onClick={() => complete(todo)}>完了</button> */}
      <button onClick={() => complete()}>完了</button>
      <form onSubmit={confirmContent} style={{ display: 'inline' }}>
        {todo.editing ? (
          <input type="text" value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
