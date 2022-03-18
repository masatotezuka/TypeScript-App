var userInput;
var userName;
userInput = 5;
userInput = "Mario";
userName = "Anna";
//unknownは型チェックをしないといけない。
if (typeof userInput == "string") {
    userName = userInput;
}
function generateError(message, errorStatus) {
    throw { message: message, status: errorStatus };
}
var errorResult = generateError("ページが存在しません。", 404);
console.log(errorResult);
