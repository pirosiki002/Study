// a. Declear Figure interface has getArea method
interface Figure{
  getArea():number;
}

// b. Prepare class Triangle has Figure interface
class Triangle implements Figure{
  constructor(private width: number, protected height: number){}

  // getArea method
  getArea(): number{
    return this.width * this.height / 2;
  }
}

const t = new Triangle(10, 5);
console.log(t.getArea());