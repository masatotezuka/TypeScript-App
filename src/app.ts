// type AddFun = (a: number, b: number) => number;

interface AddFun {
  (a: number, b: number): number;
}

let add: AddFun;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(add(1, 2));

interface Person {
  name: string;
  age: number;
  greet(text: string): void;
}

let user1: Person;

user1 = {
  name: "Mike",
  age: 23,
  greet(text: string) {
    console.log(`${text}. My name is ${this.name}`);
  },
};

user1.greet("Hello!");

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(text: string): void;
}

//interfaceはマージできる。
// interface Greetable extends Named, AnotherInterface {
//   greet(text: string): void;
// }

class Human implements Greetable {
  name: string;
  age: number = 30;
  constructor(name: string) {
    this.name = name;
    if (name) {
      this.name = name;
    }
  }
  greet(text: string): void {
    if (this.name) {
      console.log(`${text}. My name is ${this.name}`);
    }
  }
}

let user2: Greetable;

user2 = new Human("Anna");
user2.greet("Hello!");
