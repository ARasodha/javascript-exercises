// E5 Tip Calculator:
// My Solution:
const readline = require('readline-sync');

console.log('Welcome to the Tip Calculator!');
let billAmount = Number(readline.question('What is the bill amount? '));
let tipPercentage = Number(readline.question('What is the tip percentage? ') / 100);

let tipAmount = billAmount * tipPercentage
let total = billAmount + tipAmount;
console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

// LS Solution:
// let readline = require('readline-sync');
//
// let bill = parseFloat(readline.question('What is the bill?\n'));
//
// let percentage = parseFloat(readline.question('What is the tip percentage?\n'));
//
// let tip = bill * (percentage / 100);
//
// let total = bill + tip;
//
// console.log(`This tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);
