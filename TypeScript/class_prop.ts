class Person{
  name:string;
  age:number;
  // initialize property by constractor
  constructor(name:string, age:number){
    this.name = name;
    // this.age  = age;
  }
}

let p = new Person('suzuki', 38);
// assign age property
p.age = 50;
console.log(p.age);