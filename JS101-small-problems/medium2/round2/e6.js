/* E6 Sum Square - Square Sum
Input: number
Output: number
- compute the difference between the square of the sum of the first count
positive integers and the sum of the squares of the first count positive integers

Algorithm
- calculate square of sum
  - increment number by 1, starting at 1 and add it to the previous value saved
  - once the number equal to the input number has been added to the grand total,
  stop iterating and square the overall number
- calculate the sum of squares
  - increment numebr by 1m starting at 1, square it, then add it to the previous
  value saved
  - once the number equal to the input number has been squared and added to the
  grand total stop iterating
  - return the difference btween the square of sum and sum of squares
*/

// My Solution:
function sumSquareDifference(inputNumber) {
  let squareSum = 0;
  for (let number = 1; number <= inputNumber; number++) {
    squareSum += number;
  }
  squareSum = squareSum ** 2;
  let sumSquare = 0;
  for (let number = 1; number <= inputNumber; number++) {
    sumSquare += number ** 2;
  }

  return squareSum - sumSquare;
}

// LS Solution:
function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let number = 1; number <= count; number++) {
    sum += number;
    sumOfSquares += Math.pow(number, 2);
  }
  return Math.pow(sum, 2) - sumOfSquares;
}
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
