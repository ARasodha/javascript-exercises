// Exercise 6: Multiplicative Average
/*
input: array
output: string
Rules
- write a function that takes an array of integers as input
  - multiplies all of the integers together
  - divides the result by the number of entries in the array
  - returns the result as a string with the value rounded to three decimal places
Examples / Test Cases
- [3, 5] => "7.500"
- [2, 5, 7, 11, 13, 17] => "28361.667"
Data Structure
- array
Algorithm
- return the array reduce into a single product, divide that number by the length of the input array,
round it to three decimal places and return it as a string
*/
function showMultiplicativeAverage(array) {
  return String((array.reduce((prod, val) => prod * val) / array.length).toFixed(3));
}

// Test Cases
console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
