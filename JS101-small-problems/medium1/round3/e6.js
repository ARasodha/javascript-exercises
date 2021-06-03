// Ex6 Fibonacci(Recursion):
/*
Input: number
Output: number
Rules
- A good recursive function does the following three things:
  - it calls itself atleast once
  - it has an ending condition
  - the results of each recursion are used in each step
- write a recursive function that computes the nth fibonacci number where nth
is an argument passed to the function

Algorithm
- create stopping condition --> if nth <= 2 return 1
- call itself
*/

function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
