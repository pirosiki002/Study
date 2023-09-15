// export is to avoid conflictions
export const add = (
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
) => {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
};

let num1: number;
num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPhrase = "Result";

add(num1, num2, printResult, resultPhrase);