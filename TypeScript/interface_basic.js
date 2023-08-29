// b. Prepare class Triangle has Figure interface
var Triangle = /** @class */ (function () {
    function Triangle(width, height) {
        this.width = width;
        this.height = height;
    }
    // getArea method
    Triangle.prototype.getArea = function () {
        return this.width * this.height / 2;
    };
    return Triangle;
}());
var t = new Triangle(10, 5);
console.log(t.getArea());
