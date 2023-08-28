var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var p = new Person('piro', 41);
console.log("".concat(p.name, "\u306F").concat(p.age, "\u3067\u3059"));
