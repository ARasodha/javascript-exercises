// Exercise 3: How Big is the Room
/*
Input: 2 numbers
Output: string
Rules
- build a program that asks the user to enter the length and width of a room in meters, and then
logs the area of the room to the console in both square meters and square feet
- note: 1 square meter === 10.7639 square feet
- don't worry about validating the user input at this time
- use readlineSync.prompt method to collect user input
Examples/ Test Cases
- 10 * 7 = The area of the room is 70.00 square meters (753.47 square feet).
- 5 * 5 = The area of the room is 25.00 square meters (269.10).
- 8 * 3 = The area of the room is 24.00 square meters (258.33).
Data Structures
- numbers - calculating the width in both square meters and square feet
Algorithm
- create `lengthMeters` and initialize it to the answer when asking the user to enter the length of 
the room in meters and save it to
- create `widthMeters` and initialize it to the answer when asking the user to enter the width of
the room in meters
- create function `calculateAreaMeters` that takes the length and width in meters
- create function `calculateAreaSqF` that takes the area in meters as an argument and returns it in
square feet
- output a string to the console that read "The area of the room is (areaMeters) square meters
(area square feet)."
*/

const readlineSync = require('readline-sync');

console.log('Enter the length of the room in meters:');
let lengthMeters = Number(readlineSync.prompt());
console.log('Enter the width of the room in meters:');
let widthMeters = Number(readlineSync.prompt());

function calculateAreaMeters(length, width) {
  return (length * width).toFixed(2);
}

function calculateAreaSqF(areaMeters) {
  return (areaMeters * 10.7639).toFixed(2);
}

let areaMeters = calculateAreaMeters(lengthMeters, widthMeters)
console.log(`The area of the room is ${areaMeters} square meters (${calculateAreaSqF(areaMeters)}
square feet).`);

// Further Exploration
console.log('Are you calculating in meters or feet?');
let metric = readlineSync.prompt().toLowerCase();

console.log(`Enter the length of the room in ${metric}:`);
let length = Number(readlineSync.prompt());

console.log(`Enter the length of the room in ${metric}:`);
let width = Number(readlineSync.prompt());

function calculateArea(length, width) {
  return (length * width).toFixed(2);
}

let area = calculateArea(length, width);

if (metric === 'meters') {
  console.log(`The area of the room is ${area} square meters.`)
} else {
  console.log(`The area of the room is ${(area * 10.7639).toFixed(2)} square feet.`)
}