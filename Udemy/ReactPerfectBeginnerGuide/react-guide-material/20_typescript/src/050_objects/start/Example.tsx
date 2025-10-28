const Example = () => {
  // 練習用
  const array1: number[] = [1, 2, 3];
  const array3: Array<number> = [1, 2, 3];
  const array4: (string | number)[] = [1, 2, 'yahoo'];
  const array5: Array<string | number> = [1, 2, 'google'];
  console.log(array1, array3, array4, array5);

  // type Person = { name: string; age: number };
  type Person = { name: string; age?: number };
  const obj1: Person = { name: 'taro', age: 18 };
  const obj2: Person = { name: 'hanako' };
  console.log(obj1, obj2);

  const users: Person[] = [{ name: 'taro', age: 20 }, { name: 'hanako' }];
  console.log(users);
};

export default Example;
