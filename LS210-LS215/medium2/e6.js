// Exercise 6: Sum Square - Square Sum
/*
input: number
output: number
Rules
- write a function that computes the difference between the square of the sum of the first `n`
positive integers and the sum of the squares of the first `n` positive integers
Examples / Test Cases
- 3 => 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
Data Structure
- numbers
Algorithm
- create sum and initialize it 0
- create sumOfSquares and initialize it to 0
- create a loop that iterates from 1 to and including the input number. One each round of iteration:
  - at the current number in the loop to sum
  - square the current number in the loop and add it to sumOfSquares
- once the loop has terminated:
  - return the difference between `sum` square and sumOfSquares
*/
function sumSquareDifference(number) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let num = 1; num <= number; num++) {
    sum += num;
    sumOfSquares += Math.pow(num, 2);
  }

  return Math.pow(sum, 2) - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150