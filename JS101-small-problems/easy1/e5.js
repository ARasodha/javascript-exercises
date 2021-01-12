// E5 Tip Calculator:
//My Solution:
let rlSync = require('readline-sync');

function tipCalculator() {
  let billAmount = rlSync.question('What is the bill? ');
  let tipPercentage = rlSync.question('What is the tip percentage? ');
  let tip = billAmount * (tipPercentage / 100);
  let billTotal = parseInt(billAmount) + parseInt(tip);
  return `The tip is $${tip.toFixed(2)}. The total is $${billTotal.toFixed(2)}.`;
}
console.log(tipCalculator());

//NOTE: -, /, * coerce a string into a number whereas, + concats the strings
