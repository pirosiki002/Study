import { useRef } from 'react';

const Lesson3_3 = () => {
  // const [inputText, setInputText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // alert(inputText);
    alert(inputRef.current?.value);
  };

  console.log('rendered');

  return (
    <div>
      <input
        type="text"
        className="border-b"
        // onChange={e => {
        //   setInputText(e.target.value);
        // }}
        ref={inputRef}
      />
      <button onClick={handleClick}>input入力値を見る</button>
    </div>
  );
};

export default Lesson3_3;
