/* E5 All Substrings:
Explicit Requirements:
- Input: string
- Output: array of strings
- Return all the possible substrings from the string in an array
- Strings should be returned from shortest to longest at a given index
- Substrings can range from 1 char to the entire word
- Can use `leadingSubstrings()` function from previous exercise

Data Structure
- Array, since is holding all the substrings and a list if being returned

// With `leadingSubstrings()`
Algorithm
- create `result` empty array
- start a loop to iterate the starting position for the substring, starting at 0
until 1 less than the length of the string
- start a second nested loop to iterate the second point starting from 1, to the
length of the string
- during each round of iteration push the current substring to the result array
- return the result array at the end of the function

// Without `leadingSubstrings()`
Algorithm
- create `result` empty array
- start loop to iterate the starting position for the substrings, starting at 0
until 1 less than length of string
- Call `leadingSubstrings()` on every iteration with the starting point of the string increasing
- Return `result` array at the end
*/
function leadingSubstrings(string) {
  let result = [];
  for (let idx = 1; idx <= string.length; idx++) {
    result.push(string.slice(0, idx));
  }
  return result;
}

function substrings(string) {
  let result = [];
  for (let idx = 0; idx <= string.length; idx++) {
    let substring = string.slice(idx);
    result.push(...leadingSubstrings(substring));
  }
  return result;
}

console.log(substrings('abcde'));
// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
