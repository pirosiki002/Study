type Conbinable = number | string;
type ConversionDescriptor = "as number" | "as text";

const combine = (
  input1: Conbinable,
  input2: Conbinable,
  resultConversion: ConversionDescriptor
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
};

const cobineAges = combine(30, 26, "as number");
console.log(cobineAges);

const combinedStringAges = combine("30", "26", "as text");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Annna", "as text");
console.log(combinedNames);
