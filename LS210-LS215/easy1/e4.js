// Exercise 4: Tip Calculator
/*
Input: number
Output: number
Rules
- create a tip calculator 
- the program should prompt for a bill amount and tip rate
- the program must compute the tip and then log both the total amount of the bill and tip amount
to the console
- you can ignore input validation and assume that the user will put in numbers
Examples / Test Cases
- 200 bill, 15 percent => "The tip is $30.00", "The total is $230.00"
- 150 bill, 30 percent => "The tip is $45.00", "The total is $195.00"
- 80.75 bill, 13 percent => "The tip is $10.50", "The total is $91.25"
Data Structure
- numbers and string
Algorithm
- prompt the user for the bill amount and save it into `billAmount` var
- prompt the user for the tip amount and save it into `tipPercent` divided by 100
- create tip and initialize it to the billAmount multiplied by tipPercent, round to two decimal points
- output the tip amount in a statement in dollars
- create total and initialize it to the billAmount added to the tipPercent
- output the total in statement in dollars
*/

const readlineSync = require('readline-sync');

console.log('What is the bill?');
let billAmount = Number(readlineSync.prompt());
console.log('What the tip percentage?');
let percentage = Number(readlineSync.prompt());

let tip = billAmount * (percentage / 100).toFixed(2);
console.log(`The tip is $${tip.toFixed(2)}`)

let total = (billAmount + tip).toFixed(2);
console.log(`The total is $${total}`);
