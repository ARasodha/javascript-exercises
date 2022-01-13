// Exercise 3: Reverse 
/*
input: number
output: number
Rules
- write a function that takes a positive integer as an argument and returns that number with its 
digits reversed
Examples / Test Cases
- 12345 => 54321
- 12213 => 31221
- 456 => 654
- 12000 =>  21 -- Note that zeros get dropped!
- 1 => 1
Data Structure
- string and number
Algorithm
- turn the input number into a string, split it into an array of characters, reverse it, join it back
into a single string and convert it back into a number
- return the new number
*/
function reverseNumber(number) {
  return Number(String(number).split('').reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1