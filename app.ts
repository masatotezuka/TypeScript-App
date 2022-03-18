function add(num1: number, num2: number) {
  return num1 + num2;
}

//void型はundefinedを返す。
function printResult(num: number): void {
  console.log(`Result:${num}`);
}

printResult(add(1, 3));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(7, 7));

// function printResult(num: number) {
//   return num;
// }

// console.log(printResult(add(1, 3)));

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

addAndHandle(10, 20, (num) => {
  console.log(`Result:${num}`);
});
