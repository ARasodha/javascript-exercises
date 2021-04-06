// E4 How Big is the Room?
// const readline = require('readline-sync');
// const METERS_PER_SQF = 10.7639;
//
// console.log('Welcome to the room area calculator app!');
//
// while (true) {
//   let length = parseFloat(readline.question(`Enter the length of the room in meters: `));
//   let width = parseFloat(readline.question(`Enter the width of the room in meters: `));
//
//   let areaInM = (length * width).toFixed(2);
//   let areaInSQF = (areaInM * METERS_PER_SQF).toFixed(2);
//
//   console.log(`The area of the room is ${areaInM} square meters (${areaInSQF} square feet).`);
//
//   let answer = readline.question('Would you like to make another calculation? (y/n)');
//   if (answer === 'n') break;
// }

// Further exploration:
const readline = require('readline-sync');
const METERS_PER_SQF = 10.7639;

console.log('Welcome to the room area calcualtor app!');
let metersOrFeet = readline.question('Are you making your calculation in meters or feet?: ');

let length = parseFloat(readline.question('Enter the length of the room: '));
let width = parseFloat(readline.question('Enter the width of the room: '));
console.log(`The area of your room is ${(length * width).toFixed(2)} square ${metersOrFeet}.`);
