// E6 Sum Squre - Square Sum:
// My Solution:
function sumSquareDifference(number) {
  let squareOfTheSum = squareOfTheSums(number);
  let sumOfTheSquare = sumOfTheSquares(number);
  return squareOfTheSum - sumOfTheSquare;
}

function squareOfTheSums(number) {
  let count = 0;
  for (let idx = 1; idx <= number; idx++) {
    count += idx;
  }
  return count ** 2;
}

function sumOfTheSquares(number) {
  let count = 0;
  for (let idx = 1; idx <= number; idx++) {
    count += idx ** 2;
  }
  return count;
}

// Lesson Solution:
function sumSquareDifference(count) {
  let sum = 0;
  let sumSquare = 0;
  for (let number = 1; number <= count; number++) {
    sum += number;
    sumSquare += Math.pow(number, 2);
  }
  return Math.pow(sum, 2) - sumSquare;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
