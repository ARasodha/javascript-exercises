// Ex8 Fibonacci Numbers (Memoization):
/*
Input: number
Output: number
Rules
- memoizaton is an approach that involves saving a computed answer for future
reuse, instead of compuiting it from scratch everytime it is needed. In the case
of our recursive fib func use memoization to save call`
- refactor the recursion fib function to use Memoization

Algorithm
- create memo empty object
- if the number is less than or equal to 2 return 1
- if the numebr is in the memo object return the value for that key`
if it is not then create the memo property in the object and return its value
*/

function fibonacci(nth) {
  let memo = {};
  if (nth <= 2) return 1;
  if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
