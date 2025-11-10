import { useState } from 'react';
import TaskList from './TaskList';

export type Todo = {
  id: number;
  text: string;
};

const Example = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 0,
      text: 'Todo1',
    },
    {
      id: 1,
      text: 'Todo2',
    },
  ]);

  //   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
  //     setInputText(e.target.value);

  const addTodoItem = () => {
    setTodos(state => [...state, { id: state.length, text: inputText }]);
    setInputText('');
  };

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <button onClick={addTodoItem}>追加</button>
      <TaskList todos={todos} />
    </>
  );

  //   const [input, setInput] = useState('');
  //   const [list, setList] = useState<string[]>([]);
  //   // 追加ボタンを押したらテキストの中身をTodoリストとして表示
  //   const handleClick = () => {
  //     if (input === '') {
  //       console.log('empty!');
  //       return;
  //     }
  //     console.log('click!!!');
  //     // リストに追加
  //     const array = [...list, input];
  //     setList(array);
  //     console.log('array=', array);
  //     // 入力後、入力欄はクリアする
  //     setInput('');
  //     console.log('input cleared=', input);
  //   };
  //   // 配列
  //   return (
  //     <>
  //       {/* テキストボックスとボタン */}
  //       <input
  //         name="todo"
  //         value={input}
  //         onChange={e => {
  //           setInput(e.target.value);
  //         }}
  //       />
  //       <button onClick={handleClick}>追加</button>
  //       {/* リストの表示 */}
  //       <ul>
  //         {list.map((item, index) => {
  //           return <li key={index}>{item}</li>;
  //         })}
  //       </ul>
  //     </>
  //   );
};

export default Example;
