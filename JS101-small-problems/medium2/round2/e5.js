/*E5 Next Featured Number Higher than a Given Value:
Input: number
Output: number
- A featured number is an odd number that is a multiple of 7, with all of its digits
occuring only once (ex: 49 not 133 or 98)
- return the next featured numberr
- issue an error message of there is no next featured number possible
- the largest possible featured number is: 9876543201

Data Structure
- working with numbers

Algorithm
- Increment number by 14, starting at 7
- If number is greater than input number and a featured number, return the number
  - use help function `isFeatured` to check if the number has digits that occur only once
    - turn number into string, split it, check if each number occurs once
    - return boolean
- if its not featured continue loop to next number
*/

// My Solution:
const MAX_FEATURED = 9876543201
function featured(startNum) {
  let number = 7;
  while (true) {
    number += 14;
    if (number > startNum && isFeatured(number)) break;
    if (number > MAX_FEATURED) {
      return "There is no possible number that fulfills those requirements.";
    }
  }
  return number;
}

function isFeatured(number) {
  let numbers = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
  let numbersArray = String(number).split('');
  numbersArray.forEach(number => numbers[number]++);
  return !Object.values(numbers).some(number => number > 1);
}

// LS Solution:
function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
