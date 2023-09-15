var person = {
    name: "piro",
    age: 41,
    hobbies: ["English", "Programing"],
};
var favoAct;
favoAct = ["sport"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
