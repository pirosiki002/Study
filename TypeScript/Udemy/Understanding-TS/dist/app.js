"use strict";
const userName = 'Max';
let age = 30;
age = 29;
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => {
        console.log(event);
    });
}
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hikingggg'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    name: 'max',
    age: 30
};
const copiedPerson = Object.assign({}, person);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
//# sourceMappingURL=app.js.map