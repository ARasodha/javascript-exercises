// E2 Searching 101:
let rlSync = require('readline-sync');

function verify() {
  let numbers = [];
  for (let i = 1; i <= 5; i++) {
    let num = rlSync.question(`Enter number ${i}: `);
    numbers.push(num);
  }
  let lastNum = rlSync.question('Enter the last number: ');
  if (numbers.includes(lastNum)) {
    return `The number ${lastNum} appears in ${numbers}.`;
  } else {
    return `The number ${lastNum} does not appear in ${numbers}.`;
  }
}
console.log(verify());
