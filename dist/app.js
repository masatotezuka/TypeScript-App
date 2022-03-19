"use strict";
// type AddFun = (a: number, b: number) => number;
var add;
add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(1, 2));
var user1;
user1 = {
    name: "Mike",
    age: 23,
    greet: function (text) {
        console.log("".concat(text, ". My name is ").concat(this.name));
    },
};
user1.greet("Hello!");
//interfaceはマージできる。
// interface Greetable extends Named, AnotherInterface {
//   greet(text: string): void;
// }
var Human = /** @class */ (function () {
    function Human(name) {
        this.age = 30;
        this.name = name;
        if (name) {
            this.name = name;
        }
    }
    Human.prototype.greet = function (text) {
        if (this.name) {
            console.log("".concat(text, ". My name is ").concat(this.name));
        }
    };
    return Human;
}());
var user2;
user2 = new Human("Anna");
user2.greet("Hello!");
