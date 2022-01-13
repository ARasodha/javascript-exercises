// Exercise 6: Counting Up
/*
input: number
output: array
Rules
- write a function that takes an integer and returns an array containing all integers between
1 and the argument (inclusive), in ascending order
Examples / Test Cases
- 5 => [1, 2, 3, 4, 5]
- 3 => [1, 2, 3]
- 1 => [1]
Data Structure
- array
Algorithm
- create result empty array
- iterate from 1 to the input number (inclusive) and on each round of iteration
  - push the current number into the result array
- once the loop has terminated, return the result array
*/
function sequence(number) {
  let result = [];
  for (let num = 1; num <= number; num++) {
    result.push(num);
  }
  
  return result;
}

// Test Cases
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]