var MyClass = /** @class */ (function () {
    // constractor (initialize now_val)
    function MyClass(_value) {
        this._value = _value;
    }
    Object.defineProperty(MyClass.prototype, "value", {
        // getter gets now val
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    // value add
    MyClass.prototype.plus = function (value) {
        this._value += value;
        return this;
    };
    // value subtraction
    MyClass.prototype.minus = function (value) {
        this._value -= value;
        return this;
    };
    return MyClass;
}());
// calc
var clazz = new MyClass(10);
console.log(clazz.plus(10).minus(5).value); // result:15
