// E5 Arithmetic Integer:
let rlSync = require('readline-sync');

function arithmeticInteger() {
  let firstNumber = Number(rlSync.question('Enter the first number: '));
  let secondNumber = Number(rlSync.question('Enter the second number: '));
  console.log(`${firstNumber} + ${secondNumber} = ${parseInt(firstNumber + secondNumber)}`);
  console.log(`${firstNumber} - ${secondNumber} = ${parseInt(firstNumber - secondNumber)}`);
  console.log(`${firstNumber} * ${secondNumber} = ${parseInt(firstNumber * secondNumber)}`);
  console.log(`${firstNumber} / ${secondNumber} = ${parseInt(firstNumber / secondNumber)}`);
  console.log(`${firstNumber} % ${secondNumber} = ${parseInt(firstNumber % secondNumber)}`);
  console.log(`${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`);

}
arithmeticInteger();
