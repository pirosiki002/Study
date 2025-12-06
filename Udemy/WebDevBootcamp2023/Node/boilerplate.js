const fs = require('fs');
// console.log(fs);

fs.mkdir('Dogs', { recursive: true }, err => {
  console.log('in callback');
  if (err) throw err;
});

console.log('this is the most below place');
