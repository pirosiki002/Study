var add = function (n1, n2, showResult, phrase) {
    // console.log(typeof n1);
    // if (typeof n1 !== "number" || typeof n2 !== "number") {
    //   console.log(`n1 or n2 is not type of number`);
    // }
    var result = n1 + n2;
    if (showResult) {
        // console.log(phrase + n1 + n2);
        console.log(phrase + result);
    }
    else {
        // return n1 + n2;
        return result;
    }
};
var num1 = 5;
var num2 = 2.8;
var printResult = true;
var resultPhrase = "Result";
add(num1, num2, printResult, resultPhrase);
