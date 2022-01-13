// Exercise 7: Multiply Lists
/*
input: two arrays
output: array
Rules
- write a function that takes two array arguments, each containing a list of numbers and returns a 
new array that contains the product of each pair of numbers from the arguments that have the same
index 
- you may assume that the arguments contain the same number of elements
Examples / Test Cases
- [3, 5, 7], [9, 10, 11] => [27, 50, 77]
Data Structure
- array
Algorithm
- create result empty array
- iterate over the input array1 and multiply with the value in array2 at the same index and push
the product to the result array
*/

function multiplyList(array1, array2) {
  return array1.map((num, idx) => num * array2[idx]);
}

// Test Case
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]