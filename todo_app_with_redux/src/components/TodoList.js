// 型定義機能を提供するPropTypesをImportします。
import PropTypes from "prop-types";
import { toggleTodo } from "../actions";
// todoList Component には、TodoList Containerで定義した
// todos and toggleTodoが渡されています。
const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo) => (
      <li>{todo.text}</li>
    ))}
  </ul>
);

// 下記では、TodoList Component に渡される引数Propsについて
// データ型」・「必須か否か」を定義しています。
// データ型は記述の通りで、すべての値を必須としています。
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
