class Person{
  private _age!:number;

  // getter accesser
  get age():number {
    return this._age;
  }

  // setter accesser
  set age(value: number){
    if(value < 0){
      throw new RangeError('Please specify the age property as a positive number.');
    }
    this._age = value;
  }
}

let p = new Person();
p.age = 10;
// p.age = -1;

console.log(p.age); // result:10