"use strict";
// const add = (a: number, b: number = 5) => a + b;
// console.log(add(1));
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Walking"];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    name: "Max",
    age: 34,
};
console.log(person);
const copiedPerson = Object.assign({ sex: "male" }, person);
console.log("新しくオブジェクトを作成" + copiedPerson);
const add = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};
const addNumbers = add(1, 2, 3, 4);
console.log(addNumbers);
const animals = ["cat", "dog", "bird", "kirin"];
const [animal1, anima2, ...remainingAnimal] = animals;
console.log(animal1, anima2, remainingAnimal, animals);
const profile = {
    firstName: "Yamada",
    age: 24,
};
const { firstName, age } = profile;
console.log(firstName, profile);
