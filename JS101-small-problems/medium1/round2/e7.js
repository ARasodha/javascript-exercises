// Ex7 Fibonacci Numbers (Procedural):
/*
Input: number
Output: number
Rules
- rewrite the Fibonacci function so that it computes its results without using
recurison (the regular procedural way)
- Note: JavaScript can accurately compute integers up to 16 digits long; this
means that fibonacci(78) is the largest Fibonacci number that you can accurately
compute with simple operations in JS
*/

function fibonacci(nth) {
  let previousTwo = [1, 1];
  for (let count = 3; count <= nth; count++) {
    previousTwo = [previousTwo[1], previousTwo[1] + previousTwo[0]];
  }
  return previousTwo[1];
}
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
