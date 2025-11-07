import { useState } from 'react';

type Todo = {
  id: number;
  text: string;
};

type User = {
  name: string;
  age: number;
};

const Example = () => {
  const [text, setText] = useState('hello');
  useState(0);

  const [animals, setAnimals] = useState<string[]>(['dog', 'cat']);
  const [users, setUsers] = useState<User[]>([
    { name: 'Tom', age: 22 },
    { name: 'Jerry', age: 5 },
  ]);
  const [todos, setTodos] = useState<Todo[]>([{ id: 1, text: 'test' }]);
};

export default Example;
