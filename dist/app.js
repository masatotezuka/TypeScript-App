"use strict";
//各オブジェクト型で定義されたプロパティ全てを含む新たな型を定義します。
// プロパティに過不足があるとエラーになります。
//オブジェクトのプロパティを結合
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log("荷物を載せています..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if ("loadCargo" in vehicle) vehicle.loadCargo(1000);
// }
// interfaceはできない。
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(1000);
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
const userInputElement = document.getElementById("user-input");
userInputElement.value = "こんにちは";
const errorBag = {
    email: "メールアドレスが正しくありません。",
    username: "ユーザー名に記号を含めることはできません。",
};
