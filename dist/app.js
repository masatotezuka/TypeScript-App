"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Mario";
userInput = "maa";
userName = "Anna";
console.log(userInput);
//unknownは型チェックをしないといけない。
if (typeof userInput == "string") {
    userName = userInput;
}
function generateError(message, errorStatus) {
    throw { message: message, status: errorStatus };
}
const errorResult = generateError("ページが存在しません。", 404);
console.log(errorResult);
