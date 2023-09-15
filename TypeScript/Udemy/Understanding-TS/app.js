var combine = function (input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === "as number") {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
};
var cobineAges = combine(30, 26, "as text");
console.log(cobineAges);
var combinedStringAges = combine("30", "26", "as text");
console.log(combinedStringAges);
var combinedNames = combine("Max", "Annna", "as text");
console.log(combinedNames);
