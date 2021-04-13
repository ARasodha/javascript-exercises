/*E7 Sum of Sums:
Explicit Requirements:
- Input: array of integers
- Output: number
- may assume the array contains at least 1 number
- sum each number with the next ex

Data Structure
- taking in an array, and returning a number
[3, 5, 2] ==> 3 + (3 + 5) + (3 + 5 + 2) ==> 21

Algorithm
- create `sumTotal` and set it to 0
- iterate from 1 to the length of the input array

*/

function sumOfSums(array) {
  let sumTotal = 0;
  for (let idx = 1; idx <= array.length; idx++) {
    sumTotal += array.slice(0, idx).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}

console.log(sumOfSums([3, 5, 2]));
