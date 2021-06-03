// Ex7 Fibonacci Numbers (Procedural):
/*
Input: number
Output: number
Rules
- find the fibonacci number using the procedural apporach

Algorithm
- create an array previousTwo with the first two numbers
- iterate from 3 to and including the input number and incrememnt by 1
  - within the loop reassign previousTwo to an array with previousTwo at index pos
1 and firsTwo at index pos 0  + index pos 1
- after the loop breaks return previousTwo at index position 1
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
