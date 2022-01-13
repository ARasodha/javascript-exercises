// Exercise 6: Fibonacci Numbers (Recursion)
/*
input: number
output: number
Rules
- the fibonacci series is a sequence of numbers in which each number is the sum of the previous 
two numbers
- the first two fibonacci numbers are 1 and 1
- the third number is 1 + 1 = 2
- the four number is 2 + 1 = 3
- the fifth number is 2 + 3 = 5, and so on...
- in math this can be represented as:
  - F(1) = 1
    F(2) = 1
    F(n) = F(n - 1) + F(n - 2) where n > 2
- the simple sequence can easily be computed using a recursive function
- a recursive  function is one in which the function calls itself (example below)
- a good recursive function has three primary qualities:
  - it calls itself at least once
  - it has an ending condition e.g., if (n == 1), in the sum function below
  - the results of each recursion are used in each step -- e.g., n + sum(n - 1) use sum(n - 1)
- write a recursive function that computes the nth fibonacci number, where nth is na argument passed
to the function
- note: this exercise is more on the advanced level of exercises. recursion is tricky.
Examples / Test Cases
- example of a recursive function:
  function sum(n) {
    if (n === 1) {
      return 1;
    } else {
      return n + sum(n + 1);
    }
  }
Data Structure
- numbers 
Algorithm
- if the input number is equal to 1 or 2, return 1
- otherwise
  - create fib and set it to [1, 1]
*/ 
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else {
    return fibonacci(nth - 1) + fibonacci(nth - 2);
  }
}

// Test Cases
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765