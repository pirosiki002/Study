import { useState } from 'react';

const Example = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState<string[]>([]);

  // 追加ボタンを押したらテキストの中身をTodoリストとして表示
  const handleClick = () => {
    if (input === '') {
      console.log('empty!');
      return;
    }

    console.log('click!!!');
    // リストに追加
    const array = [...list, input];
    setList(array);
    console.log('array=', array);
    // 入力後、入力欄はクリアする
    setInput('');
    console.log('input cleared=', input);
  };

  // 配列
  return (
    <>
      {/* テキストボックスとボタン */}
      <input
        name="todo"
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleClick}>追加</button>
      {/* リストの表示 */}
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default Example;
