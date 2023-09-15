var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log("Result:" + num);
};
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
printResult(add(5, 12));
