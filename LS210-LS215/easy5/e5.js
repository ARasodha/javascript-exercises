// Exercise 5: Always Return Negative
/*
input: number
output: number
Rules
- write a function that takes a number as an argument 
- if the argument is a positive number, return the negative of that number
- if the argument is a negative number, return the positive of that number
Examples / Test Cases
- 5 => -5
- -3 => 3
- 0 => -0
Data Structure
- number
Algorithm
- if the number passed into math.sign is -0 or -1, return the number passed to the math.abs
- if the number passed into math.sign is 0 or the equal to the input number return the number
with a negative sign appended to it then converted into a number
*/

// My Solution
function negative(number) {
  if (Math.sign(number) === 0) return Number(`-${number}`);

  if (Math.sign(number) === -0 || Math.sign(number) === -1) {
    return number;
  } else if (Math.sign(number) === 1) {
    return Number(`-${number}`);
  }
}

// Exercise Solution 
function negative(number) {
  return Math.abs(number) * -1;
}

// Further Explorations
function negative(number) {
  return Math.abs(number) === number ? number * -1 : number;
}
// Test Cases
console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0