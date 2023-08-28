class Person{
  // property
  name  : string;
  age   : number;

  // constractor
  constructor(name: string, age:number){
    this.name = name;
    this.age  = age;
  }

  // method
  show():string{
    return `${this.name}は${this.age}歳です`;
  }
}

let p = new Person('リオ', 30);
console.log(p.show());