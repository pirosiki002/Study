function fn(number) {
  return number * 3;
}

console.log(fn(2));
// const fnArrow = (number) => {
//   return number * 2;
// };

const fnArrow = (number) => number * 3;

const fnArrowObj = (number) => ({ result: number * 2 });

// console.log(fnArrow(2));
console.log(fnArrowObj(2));
