import type { Todo } from './Example';

type TaskListProps = {
  todos: Todo[];
};

const TaskList: React.FC<TaskListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};
export default TaskList;
