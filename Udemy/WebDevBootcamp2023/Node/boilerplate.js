const fs = require('fs');
const dirName = process.argv[2] || 'Project';
// console.log(fs);

// fs.mkdir('Dogs', { recursive: true }, err => {
//   console.log('in callback');
//   if (err) throw err;
// });

// fs.mkdirSync('Cats');

try {
  fs.mkdirSync(dirName);
  fs.writeFileSync(`${dirName}/index.html`, '');
  fs.writeFileSync(`${dirName}/app.js`, '');
  fs.writeFileSync(`${dirName}/style.css`, '');
} catch (e) {
  console.log('error occured!!!', e);
}

// console.log('this is the most below place');
