// const arry = ["配列1", "配列2", "配列3"];
// const [a, , c] = ["配列1", "配列2", "配列3"];
// console.log(a, c);
// // console.log(arry[0]);
// // console.log(arry[2]);

// const {z, x} = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(x);
// console.log(z);

const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

const fnArr = ([country, state, city]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

const fnObj = ({country, state}) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  // console.log(`city: ${city}`);
};

fnArr(arr);
fnObj(objAddress);
