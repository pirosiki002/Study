import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";

function App() {
  return (
    <div>
      {/* // App コンポーネントないにAddTodoコンポーネントを描画します */}
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
