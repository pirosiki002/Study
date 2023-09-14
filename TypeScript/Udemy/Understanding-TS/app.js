var add = function (n1, n2, showResult, phrase) {
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
var num1;
num1 = 5;
var num2 = 2.8;
var printResult = true;
var resultPhrase = "Result";
add(num1, num2, printResult, resultPhrase);
