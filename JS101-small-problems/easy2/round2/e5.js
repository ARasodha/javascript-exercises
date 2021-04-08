// E5 Arithmetic Integer:
const readline = require('readline-sync');

function prompt(msg) {
  console.log(`==> ${msg}`);
}

prompt('Enter the first number:')
let num1 = parseInt(readline.question());
prompt('Enter the second number:');
let num2 = parseInt(readline.question());

let add = num1 + num2;
let substract = num1 - num2;
let multiply = num1 * num2;
let divide = parseInt(num1 / num2);
let modulo = num1 % num2;
let power = num1 ** num2;

prompt(`${num1} + ${num2} = ${add}`);
prompt(`${num1} - ${num2} = ${substract}`);
prompt(`${num1} * ${num2} = ${multiply}`);
prompt(`${num1} / ${num2} = ${divide}`);
prompt(`${num1} % ${num2} = ${modulo}`);
prompt(`${num1} ** ${num2} = ${power}`);
