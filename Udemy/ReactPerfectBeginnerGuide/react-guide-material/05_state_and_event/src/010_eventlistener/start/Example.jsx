const Example = () => {
  const clickHandler = () => {
    alert(`button was clicked`);
  };

  const hello = () => "hello react";
  // console.log(hello);
  return (
    <>
      {/* <button onClick={clickHandler}>click me</button> */}
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        {/* <button
        onClick={() => {
          clickHandler;
        }}
      > */}
        click me
      </button>
      <button
        onClick={() => {
          alert(`button was clicked`);
        }}
      >
        clickme2
      </button>
      {hello}
    </>
  );
};

export default Example;
