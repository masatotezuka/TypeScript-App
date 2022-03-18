//なるべく型推論させる
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "ryota",
//   age: 30,
// };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "ryota",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

//pushはできる
// person.role.push("aaa");
// person.role[1] = 10;

let animals: string[];
animals = ["dog", "cat"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
