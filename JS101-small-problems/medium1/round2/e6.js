// Ex 6 Fibonacci Numbers (Recursion):
/*
Input: number
Output: number
Rules:
- the first two Fibonacci numbers are 1 and 1
- the third numbers it 1 + 1 = 2, the fourth is 1 + 2 = 3,  and so on
- every number after the firs two is the sum of the last two number
- A recursive function is a function that calls itself
- a good recursive function does three things:
  - calls itself at least once
  - has an ending condition (ex: if (num === 1) return 1)
  - the results of each recursion are used in each step (ex: num + sum(num - 1)
uses sum(num - 1))
- write a recursive function that computes the nth Fibonacci number, where nth
is an argument pased to the function

Algorithm
- create an ending condition (if n === 1 or n === 2) return 1
- calls the function itself n = fibonacci(n - 1) + fibonacci(n + 2)

*/

function fibonacci(number) {
  if (number === 1 || number === 2) {
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
