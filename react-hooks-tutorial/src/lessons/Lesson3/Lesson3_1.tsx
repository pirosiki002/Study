import { useState, useRef } from 'react';

const Lesson3_1 = () => {
  const [input, setInput] = useState('');

  const ref = useRef(0);
  // console.log(ref);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log('You clicked' + ref.current);
  }

  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleClick}>Click me!</button>
      <p></p>
    </div>
  );
};

export default Lesson3_1;
