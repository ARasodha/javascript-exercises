/*E3 Uppercase Check:
Explicit Requirements
- Input: strings
- Output: boolean
- if all the characters are uppercase return true else if
any are lowercase return false
- empty string should return true
- numbers should remain the same
Implicit Requirements (Questions)
- Punctuation does not matter, neither do spaces

Data Structure
- working with strings

Algorithm
- iterate over characters in string
- check if each character equals itself with the uppercase method on it
- if all are return true else return false
*/

//My Solution:
// function isUppercase(string) {
//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx] !== string[idx].toUpperCase()) return false;
//   }
//
//   return true;
// }

// LS Solution:
function isUppercase(string) {
  return string === string.toUpperCase();
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
