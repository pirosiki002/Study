// class AdminUser extends User {}

class User {
  public name: string;
  private age: number;
  // protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const Example = () => {
  // 練習用
  const user = { name: 'Hanako', age: 21 };
  const user1 = new User('Hanako', 25);

  console.log(user1);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default Example;
