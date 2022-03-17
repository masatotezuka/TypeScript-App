function add(num1, num2, showResult, showPhrase) {
    var result = num1 + num2;
    //TypeScriptでは不用
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error("入力値が正しくありません。");
    }
    if (showResult) {
        console.log(showPhrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 3;
var printResult = true;
var resultPhrase = "Result is ";
var result = add(number1, number2, printResult, resultPhrase);
