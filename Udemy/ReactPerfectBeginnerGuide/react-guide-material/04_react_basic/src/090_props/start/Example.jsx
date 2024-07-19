import Child from "./components/Child";

const Example = () => {
  // const hello = (name) => {
  //   return (
  //     `Hello ${name}`
  //   );
  // }
  const hello = (arg) => `Hello! ${arg}`;
  const o = {
    color: "yellow",
    num: 12345,
  };

  return (
    <>
      {/* <Child num={123} fn={hello} bool obj={{ name: "Tom", age: "18" }} /> */}
      <Child {...o} fn={hello} bool obj={{ name: "Jim", age: "200" }} />
    </>
  );
};

export default Example;
