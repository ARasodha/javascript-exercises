// Exercise 8: Digit List
/*
input: number
output: array
Rules
- write a function that takes one argument, a positive integer, and returns a list of the digits
in the number
Examples / Test Cases
- 12345 => [1, 2, 3, 4, 5]
- 7 => [7]
- 375290 => [3, 7, 5, 2, 9, 0]
- 444 => [4, 4, 4]
Data Structure
- array
Algorithm
- convert number to string, split it into characters, map it into numbers and return the array
*/

function digitList(number) {
  return String(number).split('').map(numString => Number(numString));
}


// Test Case
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]