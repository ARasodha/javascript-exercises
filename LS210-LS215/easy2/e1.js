// Exercise 1: Ddaaiillyy ddoouubbllee
/*
input: string
output: string
Rule
- write a function that takes a string argument and returns a new string that contains the value
of the original string with all consecutive duplicate characters collapsed into a single character
Examples / Test Cases
- ddaaiillyy ddoouubbllee => daily double
- 4444abcabccba => 4abcabcba
- ggggggggggggggg => g
- a => a
- a => a
Data Structure
- string
Algorithm
- create result and initialize it to an empty string
- iterate over input string and if the index is 0
  - append the current character to the result string
  - if the index is not 0, and the character at the last index is not the same character as the 
  character at the current index, append it to the result string
- once the loop has terminated, return the result string
*/

function crunch(charString) {
  let result = '';

  for (let idx = 0; idx < charString.length; idx++) {
    if (charString[idx + 1] !== charString[idx]) {
      result += charString[idx];
    }
  }

  return result;
}

// Test Cases
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // "" 