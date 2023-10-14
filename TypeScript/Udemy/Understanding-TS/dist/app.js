"use strict";
const add = (a, b = 1) => a + b;
const printOutput = output => {
    console.log(output);
};
printOutput(add(2));
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
    firstName: 'Max',
    age: 30
};
const { firstName: userName, age } = person;
console.log(userName, age, person);
//# sourceMappingURL=app.js.map