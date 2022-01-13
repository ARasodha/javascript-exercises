// Exercise 4: Fibonacci Number Location by Length
/*
input:
output:
Rules
- the fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first
two numbers are 1 by definition, and each subsequent number is the sum of the previous two numbers
- fibonacci numbers often appear in math and nature
- the fibonacci series grows at an incredible rate for example: the 100th fibonacci number is 27
figures
- write a function that calculates and returns the index of the first fibonacci number that has the
number of digits specified by the argument 
- the first fibonacci number has an index of 1
- you may assume that the argument is always an integer greater than or equal to 2
Examples / Test Cases
- 2n => 7n
1 1 2 3 5 8 13 (7n = 7 numbers)
- 3n => 12n
1 1 2 3 5 8 13 21 34 55 89 144
Data Structure
- numbers
Algorithm
- create array fibonacci with the first two numbers already in it [1. 1]
- create a generic loop that runs unconditionally and on each round of iteration:
  - push the last two indexes sum to the array
  - if the length of the digits in the last number is equivalent to the input number,
  break the loop and return the length of the array
*/
// My Solution
// function findFibonacciIndexByLength(index) {
//   let fibonacci = [1n, 1n];
//   while (true) {
//     let nextNum = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
//     fibonacci.push(nextNum);

//     if (String(nextNum).length === Number(index)) break;
//   }

//   return fibonacci.length;
// }

// Exercise Solution
function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}

// Test Cases
console.log(findFibonacciIndexByLength(2n));  // === 7n;    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n));  // === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n)); //  === 45n;
console.log(findFibonacciIndexByLength(16n)); // === 74n;
console.log(findFibonacciIndexByLength(100n)); // === 476n;
console.log(findFibonacciIndexByLength(1000n)); // === 4782n;
console.log(findFibonacciIndexByLength(10000n)); // === 47847n;

// The last example may take a minute or so to run.