// let userName = 'Max';

// let age = 30;
// age = 29;

const add = (a: number, b: number = 1) => a+b;

const printOutput : (output: string | number) => void = output =>{
  console.log(output);
}

printOutput(add(2));

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => {
    console.log(event);
  });
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hikingggg'];
// const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  firstName:'Max',
  age: 30
};

// const copiedPerson = person; // this is pointer referense

// this is object copy!
// const copiedPerson = {
//   ...person
// }


const {firstName: userName, age} = person;
console.log(userName, age, person);
