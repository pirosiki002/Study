
function print(fn){
  const result = fn(2);
  console.log(result);
}

function fn(number) {
  return number * 2;
}

debugger;
print(fn);
