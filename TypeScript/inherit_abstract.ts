// b. define class abstract
abstract class Figure{
  constructor(protected width:number, protected height:number){}

  // a. prepare of getArea as abstract method
  abstract getArea():number;
}

class Triangle extends Figure{
  // override of abstract method
  getArea():number{
    return this.width * this.height / 2;
  }
}

let t = new Triangle(10, 5);
console.log(t.getArea());