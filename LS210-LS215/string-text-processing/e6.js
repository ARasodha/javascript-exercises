// Exercise 6: Staggered Caps Part 1
/*
Input: string
Output: string
Rules
- write a function that takes a string as an argument and returns that string with a staggered
capitalization scheme
- every other character, starting from the first should be capitalized and should be followed
by a lowercase or non-alphabetic character
- non-alphabetic characters should not be changed, but should be counted as characters from determining
when to switch between upper and lower case
Algorithm
- iterate over all of the characters in the input string
  - if the index of the character is even, set that character to uppercase and if it is odd
  set it to lowercase
  - return the new string
*/

function staggeredCase(string) {
  return string.split('').map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"