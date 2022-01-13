// Exercise 5: Double Char Part 1
/*
input: string
output: string
Rules
- write a function that takes a string, doubles every character in the string and returns as a new
string
Examples / Test Cases
- 'Hello' => 'HHeelloo'
- 'Good job!' => 'GGoooodd  jjoobb!'
- '' => ''
Data Structure
- string
Algorithm
- create a result empty string
- iterate over the characters in the string and on each round of iteration append the current 
character twice to the result string
- when the loop has terminated, return the result string
*/
function repeater(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx++) {
    result += `${string[idx]}${string[idx]}`;
  }

  return result;
}

// Test Cases
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""