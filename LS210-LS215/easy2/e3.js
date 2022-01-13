// Exercise 3: Stringy Strings
/*
input: number
output: string
Rules
- write a function that takes one argument. a positive integer and returns a string of alternating
1's and 0's 
- always starting with a 1
- the length of the string should match the given integer
Examples / Test Case
- 6 => "101010"
- 9 => "101010101"
- 4 => "1010"
- 7 => "1010101"
Data Structures
- string
Algorithm
- create result empty string
- create a loop that iterates start at 1 to the input number (inclusive). On each round of iteration:
  - if the current index is odd, append a 1 to the result string
  - if the current index is even, append a 0 to the result string
- once the loop has terminated, return the result string
*/

function stringy(number) {
  let result = '';

  for (let idx = 1; idx <= number; idx++) {
    if (idx % 2 === 1) {
      result += '1';
    } else {
      result += '0';
    }
  }

  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"