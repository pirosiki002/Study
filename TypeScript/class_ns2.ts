namespace Wings.MainApp{
  export class Hoge{
    constructor() {
      console.log("Hoge instance created");
    }
  }
  export function foo(){
    console.log("foo function called");
  }
}

let wmah = new Wings.MainApp.Hoge();
Wings.MainApp.foo();