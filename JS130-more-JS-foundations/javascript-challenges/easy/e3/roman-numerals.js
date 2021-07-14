// E3 Roman Numerals:
/*
Input: number
Output: string
Rules
- covert a modern decimal number into its Roman number equivalent
- no need to convert numbers higher than 3000
- modern Roman numerals are written by expressing each digit separately starting with the
left most digit and skipping any digit with a value of zero
- Romans wrote number using letters - I (1), V (5), X (10), L (50), C (100), D (500), M (1000)

Data Structures
- working with strings

Algorithm
- create RomanNumeral class
  - take argument number, create instance property decimalNumber set to the argument number
- instance methods:
  - toRoman() - converts decimalNumber instance property to Roman numeral equivalent

  - count the characters in a number
  - if 1 character, modulo by 1 
*/

class RomanNumeral {
  static ROMAN_NUMERALS = {
    M: 1000,
   CM: 900,
    D: 500,
   CD: 400,
    C: 100,
   XC: 90,
    L: 50,
   XL: 40,
    X: 10,
   IX: 9,
    V: 5,
   IV: 4,
    I: 1
 }

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let romanVersion = '';
    let toConvert = this.number;
    Object.keys(RomanNumeral.ROMAN_NUMERALS).forEach(numeral => {
      let value = RomanNumeral.ROMAN_NUMERALS[numeral];
      let multiplier = Math.floor(toConvert / value);
      let remainder = toConvert % value;

      if (multiplier > 0) {
        romanVersion += numeral.repeat(multiplier);
      }

      toConvert = remainder;
    })

    return romanVersion;
  }
}

module.exports = RomanNumeral