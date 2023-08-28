class Person{
  constructor(public name:string, public age:number){}
}

let p = new Person('piro', 41);
console.log(`${p.name}は${p.age}です`);
