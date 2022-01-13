// Exercise 7: Running Totals
/*
input: array
output: array
Rules
- write a function that takes an array of numbers and returns an array with the same number of 
elements, but with each elements value being the running total from the original array
- an empty array should return an empty array
Examples / Test Cases
- [2, 5, 13] => [2, 7, 20]
- [14, 11, 7, 15, 20] => [14, 25, 32, 47, 67]
- [3] => [3]
- [] => []
Data Structure
- array 
Algorithm
- create sum and initialize it to 0
- map over the input array and for each value, at the current value to the sum and return the sum
- return the new array
*/
function runningTotal(array) {
  let sum = 0;
  return array.map(val => sum += val);
}

// Test Cases
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []