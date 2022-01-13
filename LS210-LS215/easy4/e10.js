// Exercise 10: Array Average
/*
input: array
output: number
Rules
- write a function that takes one argument, an array and returns the average of all the integers 
in the array, rounded down to the integer component of the average
- the array will never be empty and the numbers will always be positive
Examples / Test Cases
- [1, 5, 87, 45, 8, 8] => 25
- [9, 47, 23, 95, 16, 52] => 40
Data Structure
- numbers
Algorithm
- reduce the array into a sum and divide it by the length of the input array and round down to
the closest whole number
*/
function average(array) {
  return Math.floor(array.reduce((sum, val) => sum + val) / array.length);
}

// Test Cases
console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40