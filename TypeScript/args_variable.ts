function sum(...values:number[]){
  let result = 0;

  // increment of array values
  for (let value of values){
    result += value;
  }

  return result;
}

console.log(sum(1, 5, -8, 10, 300)); // result:308