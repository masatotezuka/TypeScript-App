//なるべく型推論させる
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "ryota",
//   age: 30,
// };
var person = {
    name: "ryota",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
var animals;
animals = ["dog", "cat"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
