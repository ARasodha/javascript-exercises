// Exercise 7: Fibonacci Numbers (Procedural)
/*
input: number
output: number
Rules
- in the previous exercise we developed a recursive solution for computing the nth Fibonacci number
- in a language that is not optimized for recursion, some (but not all) recursive functions can be
extremely slow and may require massive quantities of memory and/or stack space
- if you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci
number already takes a significant amount of time
- fortunately, every recursive function can be written as a non-recursive (or procedural) function
- rewrite your recursive fibonacci function so that it computes its results without using recursion
- note: javascript can accurately compute integers up to 16 digits long; this means that 
fibonacci(78) is the largest fibonacci number that you can accurately compute with simple operations
in javascript
Examples / Test Cases
- 20 => 6765
- 50 => 12586269025
- 75 => 2111485077978050
- 1, 1, 2, 3, 5, 8, 13

Data Structure
- number
Algorithm
- create an array fib with 1, 1 in side of it
- create a loop that runs until the length of fib - 1 is equal to the input number
  - on each round of iteration push the last index and the second indexes sum into the fib array
- once the loop has terminated, return the last number in the array
*/

function fibonacci(number) {
  let fib = [1, 1];
  while(fib.length < number) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  return fib.reduce((accum, val) => accum + val, 1);
}

// Test Cases
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
