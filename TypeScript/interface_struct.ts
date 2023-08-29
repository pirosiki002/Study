// Figure interface(it declaired getArea method)
interface Figure{
  getArea():number;
}

// a. it has getArea method. but it doesn't implement Figure interface
class Triangle {
  constructor(private width:number, protected height:number){}

  // it implements getArea method
  getArea():number{
    return this.width * this.height / 2;
  }
}

// b. Triangle obj inserts Figure val
let t: Figure = new Triangle(10, 5);
console.log(t.getArea());