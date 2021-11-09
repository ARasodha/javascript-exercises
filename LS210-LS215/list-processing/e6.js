// Exercise 6: All Substrings
/*
Input: string
Output: array
Rules
- write a function that returns a list of all substrings of a string
- order the returned list by where in the string the substrings begins
  - this means that all substrings that start at index 0 should come first, then all
  substrings that start at index position 1 and so on
- since multiple substrings will occur at each position, return the substrings
at a given index from shortest to longest
Algorithm
- create substrings empty array
- iterate over input string from index 0 to the length - 1. On each round of iteration:
  - iterate over the input string again from the first index + 1 to the last index of
  the string
    - on each round of iteration of the inner loop, slice the string and push it to the
    substrings array
- after termination of the outer loop, return substrings array
*/

function substrings(string) {
  let substrings = [];
  for (let idx = 0; idx < string.length; idx++) {
    for (let jdx = idx + 1; jdx <= string.length; jdx ++) {
      substrings.push(string.slice(idx, jdx));
    }
  }

  return substrings;
}

// Test Case
console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]