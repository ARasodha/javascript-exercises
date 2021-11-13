// Exercise 5: Swap Case
/*
Input: string
Output: string
Rules
- write a function that takes a string as an argument and returns that string with every lowercase
letter changed to uppercase and vice-versa. Leave all other characters unchanged.
Algorithm
- split string in an array of characters and map over
- on each round of iteration:
  - check if the character is a letter
    - if it is a letter, check its case, and apply the opposite
    - if its not a letter then return it as is
- join the array of characters and return it
*/

function swapCase(string) {
  return string.split('').map(char => {
    if(/[a-z]/i.test(char)) {
      if (/[a-z]/.test(char)) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"