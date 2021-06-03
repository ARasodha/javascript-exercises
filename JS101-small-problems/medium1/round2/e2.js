/* E2 Rotation (Part 2):
Rules:
- Input: number, number
- Output: number
- Rotate the last `count` digits of a `number`
- Move the first of the digits that you want to rotate to the end and shift
the remaining digits to the left

Data Structure
- working with number, converting to string for manipulation

Algorithm
- Convert input number
- Create `numbersToRotate` and Slice numbers that we want to rotatea to assign to
this variable
- take `numbersToRotate` string and rotate one index to the left
  - create and use help `rotate` function
    - Input: numbers string
    - output: numbers string rotated
    - rotate by slicing at index 1 and concat string at index 0
- take rotate part of string and append to non rotated part of string
- return new number string as number
*/

function rotateRightmostDigits(count, number) {
  count = String(count);
  let numbersToRotate = count.slice(-number);
  let rotatedNumstring = rotate(numbersToRotate);

  return Number(count.slice(0, -number) + rotatedNumstring);
}

function rotate(numString) {
  let numStringArr = numString.split('');
  return numStringArr.slice(1).concat(numStringArr[0]).join('');
}

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
