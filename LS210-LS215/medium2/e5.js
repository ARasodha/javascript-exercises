// Exercise 5: Next Featured Number Higher than a Given Value
/*
input: number
output: number
Rules
- a featured number (something unique to this exercise) is an odd number that is a multiple of
7, with all of its digits occurring exactly once each
- write a function that takes an integer as an argument and returns the next featured number greater
than the integer
- issue an error message if there is no next featured number
- note: the largest possible featured number is 9876543201
Examples / Test Cases
- 49 is a featured number, but 98 is not (its it not odd), 97 is not (it is not a multiple of 7),
and 133 is not (the digit 3 appears twice)
Data Structure
- 12 => 21
- 20 => 21
- 21 => 35
- 997 => 1029
- 1029 => 10433
- 999999 => 1023547
- 999999987 => 1023456987
- 9876543186 => 9876543201
- 9876543200 => 9876543201
- 9876543201 => "There is no possible number that fulfills those requirements."
Algorithm
- create `isFeatured` helper function that takes a number as an argument
  - if the input number is an odd number 
  - AND is a multiple of 7
  - AND each number only occurs once, return true
- create uniqueNums that takes an input number and converts it into a string and checks if each
digit is a different number and returns a boolean
- create MAX_NUM and initialize it to 9876543201
- create number and initialize it to the input number
- create a generic loop and on each round of iteration:
  - increment `number` and if the new input number is a unique number, break the loop and return
  it
  - if `number` === MAX_NUM return the error statement 
*/
// My Solution:
function featured(number) {
  const MAX_NUM = 9876543201;

  if (number === MAX_NUM) {
    return "There is no possible number that fulfills those requirements.";
  }

  while(true) {
    number++;
    if (isFeatured(number)) return number;
  }
}

function isFeatured(number) {
  return number % 7 === 0 && number % 2 === 1 && uniqueNums(number);
}

function uniqueNums(number) {
  let count =  {};
  String(number).split('').forEach(digit => {
    count[digit] ? count[digit]++ : count[digit] = 1;
  });

  return !Object.values(count).some(val => val > 1);
}

// Exercise Solution:
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

// Test Cases
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