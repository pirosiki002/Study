var Person = /** @class */ (function () {
    // constractor
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // method
    Person.prototype.show = function () {
        return "".concat(this.name, "\u306F").concat(this.age, "\u6B73\u3067\u3059");
    };
    return Person;
}());
var p = new Person('リオ', 30);
console.log(p.show());
