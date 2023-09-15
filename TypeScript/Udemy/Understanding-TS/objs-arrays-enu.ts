// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR = 200,
}

const person = {
  name: "piro",
  age: 41,
  hobbies: ["English", "Programing"],
  role: Role.ADMIN,
};

let favoAct: string[];
favoAct = ["sport"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("Auth user");
}
