// a. it has getArea method. but it doesn't implement Figure interface
var Triangle = /** @class */ (function () {
    function Triangle(width, height) {
        this.width = width;
        this.height = height;
    }
    // it implements getArea method
    Triangle.prototype.getArea = function () {
        return this.width * this.height / 2;
    };
    return Triangle;
}());
// b. Triangle obj inserts Figure val
var t = new Triangle(10, 5);
console.log(t.getArea());
