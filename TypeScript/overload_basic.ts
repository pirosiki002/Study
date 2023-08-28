function show(value:number): void;
function show(value:boolean):void;

function show(value:any):void {
  // case of number type
  if(typeof value === 'number'){
    console.log(value.toFixed(0));
  }
  // case of boolean type
  else{
    console.log(value ? 'true' : 'false');
  }
}

show(10.358); // result 10
show(false);  // result false
// show('hoge'); // error
