// E7 Octal:
/*
Input: number
Output: number
Rules
- implement octal to decimal conversion.
- treat invalid inputs as octal 0
- don't use built-in or library methods that perform thj necessary conversions for you
- decimal is a base-10 system. A number 233 in base 10 notation can be understood as a linear
combination of powers of 10

Test Cases: on octal.test.js

Algorithm
- create Octal class, constructor takes 1 argument (numString), set as octalNumber property
- create instance method: toDecimal()
   - convert this.octalNumber to decimal
   - split the numString into individual numbers
   - iterate over
   - create exponent and set it to the number of individual numbers in numString
   - each round of iteration sum each number times the sum of (2 ** (exponent (decrements on each number)))
*/

class Octal {
  constructor(numString) {
    this.octalNumber = numString;
  }

  toDecimal() {
    if (this.isValid(this.octalNumber)) return 0;

    let exponent = this.octalNumber.split('').length - 1;
    let decimalNum = 0;
    this.octalNumber.split('').forEach(number => {
      decimalNum += (number * Math.pow(8, exponent));
      exponent -= 1;
    });

    return decimalNum;
  }

  isValid(inputNum) {
    return isNaN(inputNum) || [0, 8, 9].includes(Number(inputNum)) || inputNum.includes(8 || 9);
  }
}
let oct = new Octal('6789'); 
module.exports = Octal;

console.log(oct.toDecimal())