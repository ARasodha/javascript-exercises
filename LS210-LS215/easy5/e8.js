// Exercise 8: Sequence Count
/*
input: two numbers
output: array
Rules
- create a function that takes two integers as arguments 
- the first argument is a `count`, and the second is a starting number of a sequence that your
function will create
- the function should return an array containing the same number of elements as the `count` argument
- the value of each element should be a multiple of the starting number
- you may assume that the `count` argument will always be an integer greater than or equal to 0
- the starting number can be any integer 
- if the `count` is 0, the function should return an empty array
Examples / Test Cases
- 5, 1 => [1, 2, 3, 4, 5]
- 4, -7 => [-7, -14, -21, -28]
- 3, 0 => [0, 0, 0]
- 0. 1000000 => []
Data Structure
- array and numbers
Algorithm
- create a result empty array
- create round and initialize it to 1
- create value and initialize it to the second argument
- create a loop that iterates while count is less than or equal to the first argument and
on each round of iteration:
  - increment round by 1
  - push value to the result array
  - increment value by the second argument
- once the loop has terminated, return the result array
*/
function sequence(count, increment) {
  let result = [];
  let round = 1;
  let value = increment;

  while (round <= count) {
    round += 1;
    result.push(value);
    value += increment;
  }

  return result;
}

// Test Cases
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []