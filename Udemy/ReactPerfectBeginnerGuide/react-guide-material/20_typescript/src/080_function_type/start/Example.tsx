const Example = () => {
  // 練習用
  // function sum1(x: number, y: number) {
  //   console.log(y);
  //   return x + y;
  // }

  // const sum2 = (x: number, y: number): number => x + y;
  const sum2 = (x: number, y: number): string => 'hello';

  // const result1 = sum1(1, '2');
  // const result1 = sum1(1);
  // const result1 = sum1(1, 2);
  // const result1 = sum1(1);

  // const result2 = sum2(4, 4);
  const result2 = sum2(4, 4);

  // console.log(result1, result2);
  console.log(result2);

  type Sum = (x: number, y: number) => number;
  const sum3: Sum = (x, y) => x + y;
  const result3 = sum3(10, 2);
  console.log(result3);
};

export default Example;
