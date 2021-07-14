// E8 Sum Of Multiples:
/*
Input: number and array of numbers (1 or more)
Output: number
Rules
- take a natural number and a set of one or more other numbers, and find the sum of all the 
multiples of the numbers in the set that are less than the first number
- if the set of numbers is not given, use a default set of 3 and 5

Test Cases: sumOfMultiples.test.js

Algorithm
- create SumOfMultiples class
  - constructor takes at 2 or more numbers and are used as the multiples, create a multiple
  property that stores the number arguments in an array, if no argument is passed set the
  default of [3, 5]
- instance methods:
  - to() - find the multiples of all the numbers in the this.multiples array (no duplicates)
  and return the sum
  -  isMultiple() helper function
    - takes a number as an argument and returns if that number is a multiple of one of the
    numbers in this.multiples
- create static method to()
*/

"use strict";

class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = multiples.length ? multiples : [3, 5];
  }

  static to(maxNumber) {
    return new SumOfMultiples().to(maxNumber);
  }

  to(maxNumber) {
    let multiples = [];
    for (let num = 1; num < maxNumber; num++) {
      if (this.isMultiple(num)) {
        multiples.push(num);
      }
    }
    return multiples.reduce((accum, val) => accum += val, 0);
  }

  isMultiple(number) {
    return this.multiples.some(multiple => number % multiple === 0);
  }
}

module.exports = SumOfMultiples;

// Alternative Solution:
// class SumOfMultiples {
//   constructor(...multiples) {
//     this.multiples = (multiples.length > 0) ? multiples : [3, 5];
//   }

//   static to(num) {
//     let obj = new SumOfMultiples();
//     return obj.to(num);
//   }

//   to(num) {
//     let addends = [];

//     for (let currentNum = 1; currentNum < num; currentNum++) {
//       if (this.anyMultiple(currentNum)) {
//         addends.push(currentNum);
//       }
//     }

//     return addends.reduce((acc, addend) => acc + addend, 0);
//   }

//   anyMultiple(num) {
//     return this.multiples.some(multiple => {
//       return num % multiple === 0;
//     });
//   }
// }

// module.exports = SumOfMultiples;