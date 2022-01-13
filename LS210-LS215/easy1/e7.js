// Exercise 7: Leap Years Part 1
/*
Input: number
Output: boolean
Rules
- leap years occur in every year that is evenly divisible by 4, unless the year is also divisible
by 100
- if the year is evenly divisible by 100, then its not a leap year, unless the year is also evenly
divisible by 400
- assume this rule is valid for any year greater than 0
- write a function that takes any year greater than 0 as input and returns `true` if the year is 
a leap year or `false` if it is not a leap year
Examples / Test Cases
- 2016 => true 
2016 / 4 === 504
2016 / 100 === 20.16 
- 2015 => false
2015 / 4 === 503.75
2015 / 100 === 20.15
- 400 => true
400 / 4 === 100
400 / 100 === 4
400 / 400 === 1
- 1 => false
1 / 4 === .25
1 / 100 .001
Data Structures
- numbers, math equations on numbers
Algorithm
- if the input number is less than or equal to 0 return false
- check if the input number is divisible by 4 evenly
  - check if its also divisible by 100
    - if so, check if its also divisible by 400
      - if so return true
      - otherwise return false
    - if not return true
- if the number is not divisible by 4
  - check if its divisible by 100 and 400 evenly
    - if so return true
    - if not return false
*/

// My Solution
function isLeapYear(year) {
  if (year <= 0) return false;

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
    } else {
      return true;
    }
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  }

  return false;
}

// Exercise Solution
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;``
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));     // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));       // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true
console.log(isLeapYear(0));        // false
console.log(isLeapYear(-1));        // false
