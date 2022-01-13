// Exercise 7: Double Doubles
/*
input: number
output: number
Rules
- a double number is an even-length number whose left-side digits are exactly the same as its 
right-side digits
- write a function that returns the number provided as an argument multiplied by two, unless the
argument is a double number, otherwise return the double number as-is
Examples / Test Cases:
- for example: 44, 3333, 103103, 7676
- 37 => 74
- 44 => 44
- 334433 => 668866
- 444 => 888
- 107 => 214
- 103103 => 103103
- 3333 => 3333
- 7676 => 7676
Data Structures
- numbers, math operations
Algorithm
- create stringNum and initialize it to the input number converted to a string
- if the stringNum is an even length, split it into two halves
  - if both halves are identical, return the input number
- otherwise, return the input number multiplied by two
*/

function twice(number) {
  let stringNum = String(number);
  if (stringNum.length % 2 === 0) {
    let half = stringNum.length / 2;
    let firstHalf = stringNum.slice(0, half);
    let secondHalf = stringNum.slice(half);
    
    if (firstHalf === secondHalf) return number;
  }

  return number * 2;
}

// Test Cases
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676