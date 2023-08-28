var Person = /** @class */ (function () {
    // initialize property by constractor
    function Person(name, age) {
        this.name = name;
        // this.age  = age;
    }
    return Person;
}());
var p = new Person('suzuki', 38);
// assign age property
p.age = 50;
console.log(p.age);
