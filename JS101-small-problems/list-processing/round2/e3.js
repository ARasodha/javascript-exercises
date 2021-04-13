/* E3 Multiply All Pairs:
- Explicit Requirements
  - Input: 2 array arguments with a list of numbers in each
  - Output: array
  - Sum all of the elements in the first array with all the elements in the second array
  - Return all of the sums in a new array sorted in ascending order
Implicit
  - Are the arguments always going to be arrays?
  - Are the elements in the arrays always going to be whole integers?
  - Will there always be elements in the arrays

  Data Structure
    - Array, since we are taking in arrays and returning a new array

  Algorithm
    - Create `result` array
    - Iterate over argument 1 for its entire length
    - Inside of the loop for argument 1, create a loop to iterate over argument 2
    - Inside the second loop add the product of the element being iterated on in the first
    array and each element in the second array
    - Outside of both loops, return the `result` array sorted
*/

function multiplyAllPairs(array1, array2) {
  let result = [];
  for (let idx = 0; idx < array1.length; idx++) {
    for (let jdx = 0; jdx < array2.length; jdx++) {
      result.push(array1[idx] * array2[jdx]);
    }
  }
  return result.sort((a, b) => a - b);
}
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
