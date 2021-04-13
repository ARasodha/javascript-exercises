// E1 Sum Of Digits:

/*
- Explicit Requirements:
  - Input: positive integer
  - output: positive integer
  - return the sum of the digits in the input integer (could be 1 or more digit)
  - cannot use for, while or do...while loops
  - must use a series of method calls to perform the sum
- Implicit Requirements:
  - input integer could be 1 or more integers

Algorithm
- create 'result' variable and set it to 0 to accumulate the sum
- convert input number to string and split it into individual characters
- iterate over all characters in string, coerce each element to a number while adding it `result`
- return result
*/

// My Solution:
function sum(number) {
  let result = 0;
  String(number).split('').forEach(num => result += Number(num));
  return result;
}

// LS Solution:
function sum(number) {
  return String(number).split('').reduce((accum, val) => accum + Number(val), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
