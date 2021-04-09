// E3 When Will i Retire?:
const readline = require('readline-sync');

let age = Number(readline.question('What is your age? '));
let retireAge = Number(readline.question('At what age would you like to retire? '));
let year = new Date().getFullYear();
let yearsToGo = retireAge - age;
let retireYear = year + yearsToGo;
console.log(`It's now ${year} you will retire in ${retireYear}.`)
console.log(`You only have ${yearsToGo} years of work to go!`);
