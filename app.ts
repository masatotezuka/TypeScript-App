function add(
  num1: number,
  num2: number,
  showResult: boolean,
  showPhrase: string
) {
  const result = num1 + num2;

  //TypeScriptでは不用
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("入力値が正しくありません。");
  }

  if (showResult) {
    console.log(showPhrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 3;
const printResult = true;
const resultPhrase = "Result is ";

const result = add(number1, number2, printResult, resultPhrase);
