// Exercise 3: Halvsies
/*
input: array
output: nested array
Rules
- write a function that takes an array as an argument and returns an array that contains two elements,
each of which is an array
- put the first half of the original array elements in the first element of the return value, and put
the second half in the second element
- if the original array contains an odd number of elements, place the middle element in the first 
half array
- if the input array only has one or zero values, there should still be two nested arrays in the output 
Examples / Test Cases
- [1, 2, 3, 4] => [[1, 2], [3, 4]]
- [1, 5, 2, 4, 3] => [[1, 5, 4], [4, 3]]
- [5] => [[5], []]
- [] => [[], []]
Data Structure
- nested array
Algorithm
- create half and initialize it to the input array's length, divided by two and rounded up 
- create firstHalf and initialize it to the input array slice from 0, to the half point
- create secondHalf and initialize it to the input array sliced from the half point
- return firstHalf and secondHalf in an array
*/

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]