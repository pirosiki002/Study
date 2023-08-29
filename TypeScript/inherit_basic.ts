class Person{
  // b.prepare to protected member
  protected name: string;
  protected age: number;
  // private name: string;
  // private age: number;

  // constractor (initialize properties of name / age)
  constructor(name: string, age:number){
    this.name = name;
    this.age  = age;
  }
  show():string{
    return `${this.name} is ${this.age}.`;
  }
}

// BusinessPerson inherits a class Person
class BusinessPerson extends Person{
  // a. define only method of inherit class
  work():string{
    return `${this.name} works smart`;
  }
}

let p = new BusinessPerson('rio', 30);

console.log(p.show());
console.log(p.work());
