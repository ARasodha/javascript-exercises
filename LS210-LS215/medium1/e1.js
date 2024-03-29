// Exercise 1: Rotation Part 1
/*
input: array
output: array
Rules
- write a function that rotates an array by moving the first element to the end of the array
- do not modify the original array
- if the input is not an array, return `undefined`
- if the input is an empty array, return an empty array
- return `undefined` if the argument is not an array

Examples / Test Cases
- [7, 3, 5, 2, 9, 1] => [3, 5, 2, 9, 1, 7]
- ['a', 'b', 'c'] => ["b", "c", "a"]
- ['a'] => ["a"]
- [1, 'a', 3, 'c'] => ["a", 3, "c", 1]
- [{ a: 2 }, [1, 2], 3] => [[1, 2], 3, { a: 2 }]
- [] => []
- '' => undefined
- 1 => undefined
Data Structure
- array
Algorithm
- if the input is not an array return undefined
- if the array is empty return an empty array
- slice the array from index one, push the first value from the input array into it so its at the 
end and return the new array
*/
function rotateArray(array) {
  if (!array || !Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  return array.slice(1).concat(array[0]);
}

// Test Cases
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
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]