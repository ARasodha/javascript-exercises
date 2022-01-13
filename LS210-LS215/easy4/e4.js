// Exercise 4: Find the Duplicate
/*
input: array
output: number
Rules
- given an unordered array and the information that exactly one value in the array occurs twice
(every other value occurs exactly once), determine which value occurs twice
- write a function that will find and return the duplicate value that is in the array
Examples / Test Cases
- [1, 5, 3, 1] => 1
- [18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58] => 73
Data Structure
- object
Algorithm
- create count empty object
- iterate over input array and on each round of iteration:
  - if the number exists as a key in the array, increment its value by 1
  - if the number does not exist as a key, set it as a key with the value of 1
- once the loop has terminated, obtain the keys from the object
- iterate over the object keys and on each round of iteration:
  - check if the keys value is equal 2, if so return the key as a number
  - otherwise do nothing
*/
// My Solution
function findDup(array) {
  let count = {};
  array.forEach(val => {
    count[val] ? count[val]++ : count[val] = 1;
  });

  let keys = Object.keys(count);

  for (let idx = 0; idx < keys.length; idx++) {
    if (count[keys[idx]] === 2) return Number(keys[idx]);
  }
}

// Exercise Solution
function findDup(array) {
  const seen = {};

  for (let i = 0; i < array.length; i += 1) {
    if (seen[array[i]]) {
      return array[i];
    } else {
      seen[array[i]] = true;
    }
  }
}

// Test Cases
console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73