const Example = () => {
  // 練習用
  const repeatNum = (value: number, times: number): number[] => {
    // Array timesでtimesの数だけ空の配列要素を作成し、fillでvalueに指定した文字列を埋める
    return new Array(times).fill(value);
  };

  /**
   *
   * @param value ジェネリクス型です。
   * @param times 作成したい配列の要素数を指定
   * @returns
   */
  // T Uなど、ジェネリクス型は大文字ひと文字で定義する
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  };

  // 基本的には<>の部分は省略し、型推論を使うと良いとのこと
  const strArray = repeat<string>('test', 3);
  const numArray = repeat<number>(11, 3);
  const boolArray = repeat<boolean>(true, 2);

  console.log(strArray, numArray, boolArray);

  // const strArray = repeatStr('hello', 3);
  // console.log(strArray);
  // const numArray = repeatNum(10, 3);
  // console.log(numArray);
};

export default Example;
