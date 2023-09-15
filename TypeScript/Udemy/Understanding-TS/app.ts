const person = {
  name: "piro",
  age: 41,
  hobbies: ["English", "Programing"],
};

let favoAct: string[];
favoAct = ["sport"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}
