var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // private name: string;
    // private age: number;
    // constractor (initialize properties of name / age)
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function () {
        return "".concat(this.name, " is ").concat(this.age, ".");
    };
    return Person;
}());
// BusinessPerson inherits a class Person
var BusinessPerson = /** @class */ (function (_super) {
    __extends(BusinessPerson, _super);
    function BusinessPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // a. define only method of inherit class
    BusinessPerson.prototype.work = function () {
        return "".concat(this.name, " works smart");
    };
    return BusinessPerson;
}(Person));
var p = new BusinessPerson('rio', 30);
console.log(p.show());
console.log(p.work());
