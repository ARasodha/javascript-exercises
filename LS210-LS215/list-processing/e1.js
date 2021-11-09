// List Processing Questions
// Exercise 1: Sum of Digits
/*
Input: number
Output: number
Rules
- write a function that takes one argument, a positive integer, and returns the 
sum of its digits
- do this without using for, while or do...while loops - instead use a series of
method calls
Algorithm
- convert input number to string
- split the number into an array of characters
- iterate over array and convert each string to a number and add it to the next
number and return the sum
*/

function sum(number) {
  return String(number).split('').reduce((accum, val) => accum + Number(val), 0);
}

// Test Cases
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45