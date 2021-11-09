// Exercise 3: Multiply All Pairs
/*
Input: two arrays
Output: one array
Rules
- write a function that takes two array arguments, each containing a list of numbers
- return a new array containing the products of all combinations of number
pairs that exists between the two arrays
- returned array should be sorted numerically
- may assume that neither arguments will be an empty array
Algorithm
- create result empty array
- iterate over first array and on each round of iteration:
  - iterate over second array
    - multiply the current value of the first array and the second array and push
     the product into the result array
- after the outer loop has terminated, return the result array sorted in ascending order

*/

function multiplyAllPairs(array1, array2) {
  let result = [];

  array1.forEach(value1 => {
    array2.forEach(value2 => {
      result.push(value1 * value2);
    });
  });

  return result.sort((num1, num2) => num1 - num2);
}

// Test Case
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));  // [2, 4, 4, 6, 8, 8, 12, 16]