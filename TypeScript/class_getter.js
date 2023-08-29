var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        // getter accesser
        get: function () {
            return this._age;
        },
        // setter accesser
        set: function (value) {
            if (value < 0) {
                throw new RangeError('Please specify the age property as a positive number.');
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p = new Person();
p.age = 10;
// p.age = -1;
console.log(p.age); // result:10
