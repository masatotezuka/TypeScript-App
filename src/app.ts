//Interaction型　type = A & B
//Union型　type = A | B
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

//各オブジェクト型で定義されたプロパティ全てを含む新たな型を定義します。
// プロパティに過不足があるとエラーになります。
//オブジェクトのプロパティを結合
const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

//共通部分の型（number型）
//れぞれのUnion型で共通しているプリミティブ型が利用できる。
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

//Type Guard
type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log("Privileges" + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("StartDate" + emp.startDate);
  }
}

printEmployeeInformation({ name: "Mike", startDate: new Date() });

class Car {
  drive() {
    console.log("車を運転中...");
  }
}

class Truck {
  drive() {
    console.log("トラックを運転中...");
  }
  loadCargo(amount: number) {
    console.log("荷物を載せています..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if ("loadCargo" in vehicle) vehicle.loadCargo(1000);
// }

// interfaceはできない。
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

//Discriminated Unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log(animal.type + "移動のスピード:" + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );

const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;
userInputElement.value = "こんにちは";

interface ErrorContainer {
  // id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "メールアドレスが正しくありません。",
  username: "ユーザー名に記号を含めることはできません。",
};
