function add(num1, num2) {
    return num1 + num2;
}
//void型はundefinedを返す。
function printResult(num) {
    console.log("Result:".concat(num));
}
printResult(add(1, 3));
var combineValues;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(7, 7));
// function printResult(num: number) {
//   return num;
// }
// console.log(printResult(add(1, 3)));
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
addAndHandle(10, 20, function (num) {
    console.log("Result:".concat(num));
});
