const Example = () => {
  // 練習用
  let strOrNumOrbool: string | number | boolean = 'Hello';
  strOrNumOrbool = 123;
  console.log(strOrNumOrbool);

  type HelloOrNum = 'Hello' | number;
  const hello: HelloOrNum = 'Hello';
  console.log(hello);
};

export default Example;
