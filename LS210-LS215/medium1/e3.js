// Exercise 3: Rotation Part 3
/*
input: number
output: number
Rules
- take the number `735291` and rotate it by one digit to the left, getting `352917` 
- next, keep the first digit fixed in place and rotate again to get `321759` 
- keep the first two digits fixed in place and rotate it again to get `321759`
- finally, keep the first four digits in place and rotate the final two digits to get `321579`
- the resulting number is called the maximum rotation of the original number
- write a function that takes an integer as an argument and returns the maximum rotation of that
integer
- you can (and probably should) use the rotateRightmostDigit function from the previous exercise
Examples / Test Cases
- 735291 => 321579
- 3 => 3
- 35 => 53
- 105 => 15 -- the leading zero gets dropped
- 8703529146 => 7321609845
Data Structure
- string
Algorithm
- create count and set it to the length of the input number if it was a string
- create result
- create a loop that iterates while count is greater than 0 and on each round of iteration:
  - pass the input number and count to rotateRightmostDigits and assign the return value to result
  - decrement count by 1
- once the loop has terminated, return the result value
*/
function maxRotation(number) {
  let count = String(number).length;
  let result = number;
  while (count > 0) {
    result = rotateRightmostDigits(result, count);
    count--;
  }

  return result;
}

function rotateRightmostDigits(number, n) {
  let numString = String(number);
  let firstHalf = numString.slice(0, numString.length - n);
  let secondHalf = numString.slice(numString.length - n);
  return Number(firstHalf + rotate(secondHalf));
}

function rotate(string) {
  return string.slice(1) + string[0];
}

// Test Cases
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845