// E4 How big is the room?:
//My Solution:
let rlSync = require('readline-sync');

function roomSize() {
  let length = rlSync.question('Enter the length of the room in meters: ');
  let width = rlSync.question('Enter the width of the room in meters: ')
  let inMeters = length * width;
  let inFeet = inMeters * 10.7639;

  return `The area of the room is ${inMeters} square meters (${inFeet.toFixed(2)} square feet).`
}

console.log(roomSize());



//Book Solution:
// let readlineSync = require("readline-sync");
//
// const SQMETERS_TO_SQFEET = 10.7639;
//
// console.log("Enter the length of the room in meters:");
// let length = readlineSync.prompt();
// length = parseInt(length, 10);
//
// console.log("Enter the width of the room in meters:");
// let width = readlineSync.prompt();
// width = parseInt(width, 10);
//
// let areaInMeters = (length * width);
// let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);
//
// console.log(
//   `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
// );

//Further Exploration Solution:
// let rlSync = require('readline-sync');
//
// function roomSize() {
//   let inputType = rlSync.question('Enter the input type (meters or feet): ');
//   let length = rlSync.question('Enter the length of the room: ');
//   let width = rlSync.question('Enter the width of the room: ')
//   let area = length * width;
//
//   if (inputType === 'meters') {
//     return `The area of the room is ${area.toFixed(2)} square meters.`
//   } else if (inputType = 'feet') {
//     return `The area of the room is ${area.toFixed(2)} square feet.`
//   }
// }
//
// console.log(roomSize());

// Additonal Notes:
// 1 meter === 3.28084 feet
// 1 square meter === 10.7639 square feet
