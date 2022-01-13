// Anti Array
// Given two arrays, return whether the two arrays are opposites of each other. That means both 
// arrays are comprised only from elements a and b and the occurrences of these elements are swapped 
// between the two arrays.

// Examples
// isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]) ➞ true
// isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]) ➞ true

/*
input: 2 arrays
output: boolean
Rules
- given two arrays, return whether the two arrays are opposites of each other
- that means both arrays are comprised only from elements a and b and the occurrences of these 
elements are swapped
Questions
- what if both arrays are empty? 
- what if the input is not an array?
- will the elements in the array only be strings? If objects are allowed, approach must be different
because they point to memory spaces
Examples / Test Cases
- ["1", "0", "0", "1"], ["0", "1", "1", "0"] => true
- ["apples", "bananas", "bananas"], ["bananas", "apples", "apples"] => true
Data Structure
- arrays - iterations methods, and higher order functions
Algorithm
- iterate over array1 and on each round of iteration
  - if the item at the current index in array1 equals the item at the same index in array 2,
    return false
- otherwise, if the loop terminates, return true;
*/
function isAntiArray(array1, array2) {
  for (let idx = 0; idx < array1.length; idx++) {
    if (array1[idx] === array2[idx]) return false;
  }

  return true;
}

// Test Cases
console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"])); // ➞ true
console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"])); // ➞ true
console.log(isAntiArray(['1', '2', '1'], ['2', '2', '1'])); // false
// console.log(isAntiArray([], []));