var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
// const button = document.querySelector("button");
// const input1 = document.getElementById("num1") as HTMLInputElement | null;
// const input2 = document.getElementById("num2") as HTMLInputElement | null;
// function add(num1: string, num2: string): number {
//   return +num1 + +num2; // 文字列を数値に変換して加算
// }
// if (button && input1 && input2) {
//   button.addEventListener("click", function () {
//     console.log(add(input1.value, input2.value));
//   });
// } else {
//   console.warn("Some elements are missing!");
// }
