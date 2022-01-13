// Exercise 2: Rotation Part 2
/*
input: 2 numbers
output: number
Rules
- write a function that rotates the last `n` digits of a number
- for the rotation, rotate by one digit to the left, moving the first digit to the end
Examples / Test Cases
- 735291, 1 => 735291
- 735291, 2 => 735219
- 735291, 3 => 735912
- 735291, 4 => 732915
- 735291, 5 => 752913
- 735291, 6 => 352917
Data Structure
- numbers and strings
Algorithm
- create helper function called `rotate`
  - take number and 
  of the number and returns it as a string
- create numString and set the input number to a string
- create firstHalf and initialize it to the input string slice from 0 to the length of the string 
subtracted by the second argument number
- create secondHalf and initialize it to the input string slice from the length subtracted by the
second argument, passed into the `count` function
- return firstHalf appended to secondHalf and converted into a number
*/

function rotateRightmostDigits(number, n) {
  let numString = String(number);
  let firstHalf = numString.slice(0, numString.length - n);
  let secondHalf = rotate(numString.slice(numString.length - n))
  return Number(firstHalf + secondHalf);
}

function rotate(string) {
  return string.slice(1) + string[0];
}


// Test Cases
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917