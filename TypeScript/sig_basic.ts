// a. declare type Car
interface Car{
  type: string; // property signature
  run():void;   // method signature
}

// b. declare type Car val c
let c: Car = {
  type:'track',
  run(){
    console.log(`${this.type} run`);
  }
};

c.run();  // result