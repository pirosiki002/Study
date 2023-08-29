class MyClass{
  // constractor (initialize now_val)
  constructor(private _value:number){}
  // getter gets now val
  get value():number{
    return this._value;
  }

  // value add
  plus(value: number):this{
    this._value += value;
    return this;
  }

  // value subtraction
  minus(value:number):this{
    this._value -= value;
    return this;
  }
}

// calc
let clazz = new MyClass(10);
console.log(clazz.plus(10).minus(5).value); // result:15