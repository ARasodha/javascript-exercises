// Exercise 9: Clean Up the Words
/*
input: string
output: string
Rules
- given a string that consists of some words and assortment of non-alphabetic characters, write
a function that returns that string with all of the non-alphabetic characters replaced by space
- if one or more non-alphabetic characters occur in a row, you should only have on space in the
result (i.e., the result string should never have consecutive spaces)
Examples / Test Cases
- "---what's my +*& line?"
Data Structure
- string
Algorithm
- use regex to replace any group of one or more non-alphabetical characters with a single space
and return the new string
*/

function cleanUp(string) {
  return string.replace(/[^a-z]+/g, ' ');
}
// Test Cases
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "