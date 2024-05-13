const h1Element = document.querySelector('h1');
console.dir(h1Element);
console.log(h1Element.textContent);

h1Element.textContent = 'changed title';

const btnEl = document.querySelector('button');
// btnEl.addEventListener('click', (e) => {
//     console.dir(e.target.textContent);
//     console.log('hello')
// });

const helloFn = (e) => {
    console.dir(e.target.textContent);
    console.log('good evening!');
}

btnEl.addEventListener('click', helloFn);