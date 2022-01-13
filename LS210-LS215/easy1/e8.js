// Exercise 8: Leap Year Part 2
/*
input: number
output: boolean
Rules
- the Georgian Calendar was adopted by the British Empire in 1752, which was a leap year
- prior to 1752, they used the Julian Calendar
- under the Julian Calendar, leap years occur in any year that is evenly divisible by 4
- using this information, update the function from the previous exercise to determine leap years
both before and after 1752

Examples / Test Cases
- 2016 => true
2016 / 4 === 504
2016 / 100 === 20.16
- 1 => false
1 / 4 === 0.25
- 1752 => true
1752 / 4 === 438
1752 / 100 == 17.52
- 1700 => true
1700 / 4 === 425
Data Structure
- numbers - math operations
Algorithm
- if the number is less than or equal to 0 return false
- if the number is less than 1752 and divisible by 4 evenly return true
- if the number is greater than or equal to 1752
  - check if it is divisible by 400
    - if so return true
  - if the number is divisible by 100 return false
  - if the number is division by 4 return true else return false
*/

function isLeapYear(year) {
  if (year <= 0) return false;
  if (year < 1752 && year % 4 === 0) return true;

  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

// Test Cases
console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true