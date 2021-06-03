// Ex3 Rotation (Part 3):
/*
Input: number
Output: number
Rules
- take the input number and rotate it to the left
- keep the first digit in place, rotate the rest -- > continue until
last two digits have been rotated
- return the maximum rotation number

Algorithm
- convert input number to a string
- create loop that iterates through entire numString
  - left number --> slice the numString from 0 to idx
  - right number --> slice from idx
  - numString = leftNumber + rotate(rightNumber)
    - create a rotate helper function
- after loop is done iterating return numString as a number
*/

function maxRotation(number) {
  let numString = String(number);
  for (let idx = 0; idx < numString.length; idx++) {
    let leftNumber = numString.slice(0, idx);
    let rightNumber = numString.slice(idx);
    numString = leftNumber + rotate(rightNumber);
  }

  return Number(numString);
}

function rotate(numString) {
  return numString.slice(1) + numString[0];
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
