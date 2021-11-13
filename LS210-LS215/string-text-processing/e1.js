// String and Text Processing Questions
// Exercise 1: Uppercase Check
/*
Input: string
Output: boolean
Rules
- write a function that takes a string as an argument and returns `true` if all the alphabetic characters
inside the string are uppercase; otherwise return `false`. Ignore characters that are not alphabetic
Algorithm
- create helper function `isLetter` that returns a boolean if the character is a letter
- iterate over the input string and on each round of iteration:
  - if the current character is a letter, check if it is uppercase
    - if so continue to the next character, otherwise return false
- if the loop terminates return true
*/
// My Solution
function isUppercase(string) {
  for (let idx = 0; idx < string.length; idx++) {
    if (isLetter(string[idx])) {
      if (string[idx] != string[idx].toUpperCase()) return false;
    }
  }

  return true;
}

function isLetter(char) {
  char = char.toLowerCase();
  return char >= 'a' && char <= 'z';
}

// Exercise Solution:
function isUppercase(string) {
  return !/[a-z]/.test(string);
}

// Test Cases
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true