// E6 Perfect Number:
/*
Input: number
Output: string
Rules 
- Aliquot sum is the numbers that can be evenly divided into the target number with no remainder
excluding the number itself. For 15, the positive divisors are 1, 3 and 5
- Perfect numbers have an Aliquot sum that is equal to the original number
- Abundant numbers have an Aliquot sum that is greater than the original number
- Deficient numbers have an Aliquot sum that is less than the original number

Test Cases: on perfect-number.test.js

Algorithm
- create PerfectNumber class
- instance method:
  - classify() - takes 1 number as an argument and returns a string based on what type
  of number it is (perfect, abundant or deficient)
    - create helper function findDivisors() - returns an arrays of the revisors of a number
*/

class PerfectNumber {
  static classify(number) {
    if (number < 0) throw new Error('Invalid number. Must be greater than 0.');

    let divisors = PerfectNumber.findDivisors(number);
    let sum = divisors.reduce((accum, sum) => accum + sum, 0);
    if (sum === number) {
      return 'perfect';
    } else if (sum > number) {
      return 'abundant';
    } else return 'deficient';
  }

  static findDivisors(number) {
    let divisors = [];
    for (let count = 1; count <= Math.floor(number / 2); count++) {
      if (Number.isInteger(number / count)) {
        divisors.push(count);
      }
    }
  
    return divisors;
  }
}

module.exports = PerfectNumber;

// Alternative Solution:
// class PerfectNumber {
//   static classify(number) {
//     if (number < 1) {
//       throw new Error("Number must be greater than or equal to 1.");
//     }

//     let sum = this.sumOfFactors(number);

//     if (sum === number) {
//       return 'perfect';
//     } else if (sum > number) {
//       return 'abundant';
//     } else {
//       return 'deficient';
//     }
//   }

//   static sumOfFactors(number) {
//     let sum = 0;

//     for (let divisor = 1; divisor < number; divisor++) {
//       if (number % divisor === 0) {
//         sum += divisor;
//       }
//     }

//     return sum;
//   }
// }

// module.exports = PerfectNumber;