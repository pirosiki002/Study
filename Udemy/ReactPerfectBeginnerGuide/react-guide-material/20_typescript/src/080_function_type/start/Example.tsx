const Example = () => {
  // 練習用
  function sum1(x: number, y?: number) {
    console.log(y);
    return x + y;
  }

  const sum2 = (x: number, y: number) => x + y;

  // const result1 = sum1(1, '2');
  // const result1 = sum1(1);
  // const result1 = sum1(1, 2);
  const result1 = sum1(1);

  const result2 = sum2(3, 4);

  console.log(result1, result2);
};

export default Example;
