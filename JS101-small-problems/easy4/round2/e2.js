// E2 Searching 101:
const readline = require('readline-sync');
let entries = [];

let first = readline.question('Enter the 1st number: ');
entries.push(first);
let second = readline.question('Enter the 2nd number: ');
entries.push(second);
let third = readline.question('Enter the 3rd number: ');
entries.push(third);
let fourth = readline.question('Enter the 4th number: ');
entries.push(fourth);
let fifth = readline.question('Enter the 5th numner: ');
entries.push(fifth);

let last = readline.question('Enter the last number: ');

if (entries.includes(last)) {
  console.log(`The number ${last} appears in ${entries.join(',')}.`);
} else {
  console.log(`The number ${last} does not appear in ${entries.join(',')}.`);
}
