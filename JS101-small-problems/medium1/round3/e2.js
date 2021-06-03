// Ex2 Rotation (Part 2):
/*
Input: 2 numbers
Output: number
Rules
- rotat ethe last count digbits of a number
- to perform the rotation, move the first of teh digits that you want to
rotate to the end and shif the remaining digits to the left

Algorithm
- convert input number to string
- create firstHalf by slicing from 0 to the the length - count
- create second half by slicing from count
- rotate the secondHalf
  - create rotate helper function
- append firstHalf and rotated secondHalf and return as a number
*/

function rotateRightmostDigits(numbers, count) {
  let numString = String(numbers);
  let firstHalf = numString.slice(0, numString.length - count);
  let secondHalf = numString.slice(numString.length - count);
  return Number(firstHalf + rotate(secondHalf));
}

function rotate(numString) {
  return numString.slice(1) + numString[0];
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
