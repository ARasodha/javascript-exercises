/* E3 Rotation (Part 3):
Rules:
- Input: number
- Output: number
- rotate the number by one digit to the left
- now keep the first digit in place and rotate the remaining digits to the left by 1
- now keep the firt two digits in place and rotate the reamining digits to the left by 1
- now keep the firt three digits in place and rotate the reamining digits to the left by 1
- now keep the firt four digits in place and rotate the reamining digits to the left by 1
- return the maxium rotation of the original numebr (the number you end up with after this)
- use the `rotateRightmostDigits` function from the previous exercise

Data Structure
- convert number to string then back to number when done being transformed

Algorithm
1. Convert input number to a string
2. Do initial rotation (all numbers one to the left) - use `rotateRightmostDigits`
3. slice the first number off and rotate the rest of the numbers
4. reattach both numbers
5. repeat steps 3 - 4 with the first numbers  increasing by 1 until the number is 4, that
is the last Rotation
6. Return final number
*/

// My Solution:
// function maxRotation(number) {
//   let initialRotation = rotateRightmostDigits(number, number.length);
//   let numString = String(initialRotation);
//   for (let idx = 1; idx < numString.length; idx++) {
//     let rotateString = numString.slice(idx);
//     let secondHalf = rotateRightmostDigits(rotateString, rotateString.length);
//     numString = numString.slice(0, idx) + secondHalf;
//   }
//   return Number(numString);
// }


// LS Solution:
function maxRotation(number) {
  let numberDigits = String(number).length;
  for (let count = numberDigits; count >= 2; count--) {
    number = rotateRightmostDigits(number, count);
  }
  return Number(number);
}

function rotateRightmostDigits(count, number) {
  count = String(count);
  let numbersToRotate = count.slice(-number);
  let rotatedNumstring = rotate(numbersToRotate);

  return count.slice(0, -number) + rotatedNumstring;
}

function rotate(numString) {
  let numStringArr = numString.split('');
  return numStringArr.slice(1).concat(numStringArr[0]).join('');
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
