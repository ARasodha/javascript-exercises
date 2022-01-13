// Exercise 9: Multiples of 3 and 5
/*
input: number
output: number
Rules
- write a function that computes the sum of all numbers between 1 and some other number, inclusive
that are multiples of 3 and 5
- you may assume that the number is an integer greater than 1
implicit:
- common multiples of 3 and 5 are excluded from the sum calculation
Examples / Test Cases
- if we supplied the number 20, the result should be 98
  - 3 + 5 + 6 + 9 + 10 + 12 + 15 + 19 + 20
- input 3 should return an output of 3
  - 3 = 3
- input 5 should return an output of 8
  - 3 + 5 = 8
- input of 10 should return an output of 33
  - 3 + 5 + 6 + 9 + 10 = 33
Data Structure
- numbers, math operations
- array to hold multiples
Algorithm
- create multiples empty array
- create a loop that iterates from 1 to the input number (inclusive) 
  - increment the number by 1 on each round of iteration:
    - check if the current number is a multiple of 3 or 5
      - if the number is not already in the multiples array, push it into the multiples array
- once the loop has terminated, return the sum of the multiples array
*/
function multisum(integer) {
  let multiples = [];
  
  for (let num = 1; num <= integer; num++) {
    if ((num % 3 === 0 || num % 5 === 0) && !multiples.includes(num)) {
      multiples.push(num);
    }
  }

  return multiples.reduce((sum, val) => sum + val);
}

// Test Cases
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168