// Exercise 2: Combining Arrays
/*
input: two arrays
output: array
Rules
- write a function that takes two arrays as arguments and returns an array containing the union
if the values from the two
- there should be no duplication of values in the returned array, even if there are duplicates in
the original arrays
- you may assume that both arguments will always be arrays
Examples / Test Cases
- [1, 3, 5], [3, 6, 9] => [1, 3, 5, 6, 9]
Data Structure
- array
Algorithm
- create result array and concat all of the values from array1 into there
- iterate over the second array, if the value at the current round of iteration is not in the 
result array, push it in
- return the result array
*/
function union(array1, array2) {
  let result = [...array1];
  array2.forEach(val => {
    if (!result.includes(val)) {
      result.push(val);
    }
  });
  
  return result;
}

// Test Case
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]