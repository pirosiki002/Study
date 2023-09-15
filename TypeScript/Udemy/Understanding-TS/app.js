var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log("Result:" + num);
};
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
addAndHandle(10, 20, function (result) {
    console.log(result);
});
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
printResult(add(5, 12));
