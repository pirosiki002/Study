let data: string | boolean;
data = 'hoge';    // OK
data = 'false';   // OK
//data = 1;         // error

let arryData:(string | number)[]=['hoge', 108, 'hogehoge'];

console.log(arryData[0]);
console.log(arryData[1])