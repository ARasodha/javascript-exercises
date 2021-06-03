/* E1 Search Word:
Explicit Requirements:
- Input: array
- Output: a new array (cant mutate the original array)
- Return an array with all the same elements but rotated in position
  - first element to the end of the array
- do not modify the original array
- if the input is not an array return `undefined`
- if the input is an empty array, return an empty array

Data Structure
- input and return value is an array

Algorithm
- If the input is not an array return undefined
- if the input is an empty array return the empty array
- Create 'result', an empty array that we will place elements from the original
array in
- Iterate over input array
- create `firstVal` and before the first round of iteration outside of the loop
`pop` the first element from the input array without mutating the original array
- for the iterations in the loop, push each value to the result array
- outside of the loop push `firstVal` to the `result` array
- return `result` array
*/

// My Solution:
// function rotateArray(array) {
//   if (!Array.isArray(array)) return undefined;
//   if (array.length === 0) return array;
//
//   let result = [];
//   let firstVal = array.slice().shift();
//
//   for (let idx = 1; idx < array.length; idx++) {
//     result.push(array[idx]);
//   }
//
//   result.push(firstVal);
//
//   return result;
// }

// LS Solution:
function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];
  return array.slice(1).concat(array[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]

console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
