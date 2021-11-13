// Exercise 7: 
/*
Input: string
Output: string
 Rules
- modify the function from the previous exercise so that it ignore non-alphabetic characters when
determining whether a letter should be upper or lowercase. Non-alphabetic characters should still be 
included in the output string, but should not be counted when determining the appropriate case
Algorithm
- create count variable
- iterate over input string characters
  - if the character is letter and count is an even number, set the character to uppercase
    - increment count by 1
  - if the character is a letter and the count is an odd number, set the character to lowercase
    - increment count by 1
  - if the character is not a letter return it
    - do not change the value of count
- return the new string
*/
// My Solution
function staggeredCase(string) {
  let count = 0;
  return string.split('').map(char => {
    if (/[a-z]/i.test(char)) {
      if (count % 2 === 0) {
        count++;
        return char.toUpperCase();
      } else if (count % 2 === 1) {
        count++;
        return char.toLowerCase();
      }
    } else return char;
  }).join('');
}

// Exercise Solution:
function staggeredCase(string) {
  let needUpper = true;
  let newChar;

  return string.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      if (needUpper) {
        newChar = char.toUpperCase();
      } else {
        newChar = char.toLowerCase();
      }

      needUpper = !needUpper;
      return newChar
    } else {
      return char;
    }
  }).join('');
}

// Test Cases
console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"