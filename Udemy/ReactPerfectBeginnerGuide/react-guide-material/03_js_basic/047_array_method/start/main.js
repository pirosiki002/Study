const arry = [10, 20, 30, 40];
const newArry = [];

for(i = 0; i < arry.length; i++){
    newArry.push(arry[i] * 2);
}

console.log(newArry);

// const newArry2 = arry.map(val => val * 3);
const newArry2 = arry.map((val, i, arry) => {
    console.log(val, i, arry);
    return val * 2;
})

console.log(newArry2);