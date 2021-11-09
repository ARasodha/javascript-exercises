// Exercise 4: Sum of Sums
/*
Input: array
Output: number
Rules
- write a function that takes an array of numbers and returns the sum of the sums
of each leading subsequence in that array
- you may assume that the array always contains at least one number
Algorithm
- create sum variable initialized to 0
- iterate over array and on each round of iteration:
  - slice the array, get the sum of the values in the array and add it to the sum
  variable
- once the loop has terminated return sum
*/
// My Solution
function sumOfSums(array) {
  let sum = 0;
  for (let idx = 1; idx <= array.length; idx++) {
    sum += array.slice(0, idx).reduce((accum, val) => accum + val);
  }

  return sum;
}

// Lesson Solution
function sumOfSums(numbers) {
  return numbers.map((number, idx) => numbers.slice(0, idx + 1)
                                              .reduce((sum, value) => sum + value))
                                              .reduce((sum, value) => sum + value);
}

// Test Cases
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

