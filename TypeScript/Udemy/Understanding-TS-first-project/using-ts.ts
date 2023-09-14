const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
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
