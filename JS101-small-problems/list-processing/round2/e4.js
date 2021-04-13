/* E4 Leading Substrings:
Explicit Requirements:
  - Input: string
  - Output: array with strings
  - return all possible substrings from the first char to the full length of the string
  - return the array in order from shortest to longest
Implicit Requirements:
  - The string can have the length of 1

Data Structure
  - using an array as that is what needs to be returned

Algorithm
  - Create `result` empty array
  - Iterate over string and increment length of substrings until entire string is selected
  - Push each substring into `result` array
  - return `result` array
*/

function leadingSubstrings(string) {
  let result = [];
  for (let idx = 1; idx <= string.length; idx++) {
    result.push(string.slice(0, idx));
  }
  return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
