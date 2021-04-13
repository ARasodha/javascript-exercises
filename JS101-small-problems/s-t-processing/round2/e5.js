/*E5 Swap Case
Explicit Requirements
- Input: string
- Output: string
- return the same string with every lowercase letter, uppercase and vise vera
Implicit Requirements
- Will a string always be the Input
- Will an empty string be Input

Data Structure
- Working with strings

Algorithm
- Iterate over all the characters in the string and check if they are lowercaser.
If so, convert the character to toUpperCase
- Vice-versa for lowercase character
- return string

*/

function swapCase(string) {
  return string.split('').map(char => {
    if (char === char.toLowerCase()) {
      return char.toUpperCase();
    } else if (char === char.toUpperCase()) {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(swapCase('CamelCase')); // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV')); // "tONIGHT ON xyz-tv"
