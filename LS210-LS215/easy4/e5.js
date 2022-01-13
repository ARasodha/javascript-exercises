// Exercise 5: Combining Two Lists
/*
input: two arrays
output: array
Rules
- write a function that combines two arrays passed as arguments, and returns a new array that
contains all elements from both array arguments, with each element taken in alternation
- you may assume that both input array are non-empty and that they have the same number of elements
Examples / Test Cases
- [1, 2, 3], ['a', 'b', 'c'] => [1, "a", 2, "b", 3, "c"]
Data Structure
- array
Algorithm
- create result empty array
- iterate over array one and during each round of iteration:
  - push the value at the current index from array1 and array2 to the result array'
- when the loop is terminated, return the result array
*/
function interleave(array1, array2) {
  let result = [];
  
  for (let idx = 0; idx < array1.length; idx++) {
    result.push(array1[idx], array2[idx]);
  }

  return result;
}

// Test Case
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]