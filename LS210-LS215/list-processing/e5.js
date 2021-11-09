// Exercise 5: Leading Substrings
/*
Input: string
Output: array
Rules
- write a function that takes a string argument and returns a list of substrings of
that string
- each substring should begin with the first letter of the word and the list should
be ordered from shortest to longest 
Algorithm
- create empty result array
- iterate over string (from 1 to the length of the string) and for each round of 
iteration
  - slice the string and push the sliced string into the array
- return the result array
*/

function leadingSubstrings(string) {
  let substrings = [];
  for (let idx = 1; idx <= string.length; idx++) {
    substrings.push(string.slice(0, idx));
  }

  return substrings;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]