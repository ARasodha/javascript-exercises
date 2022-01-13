// Exercise 10: What Century is That
/*
input: number
output: string
Rules
- write a function that takes a year as an input and returns the century
- the return value should be a string that begins with the century number and ends with
"st", "nd", "rd" or "th"
- new centuries begin in years that end with 01
- so the years 1901-2000 comprise of the 20th century
Examples / Test Cases
- 2000 => 20th
2000 / 100 = 20th
- 2001 => 21st
2001 / 100 = 20 + 1
- 1965 => 20th
1965 / 100 = 19 + 1
- 256 => 3rd
256 / 100 = 2 + 1
- 5 => 1st
5 / 100 = 1
- 10103 => 102nd
10103 / 100 = 101 + 1
- 1052 => 11th
1052 / 100 = 10 + 1
- 1127 => 12th
11257 / 100 = 11 + 1
- 11201 => 113th
11201 / 100 = 112 + 1

"st" numbers ending in 1
"nd" numbers ending in 2
"rd" numbers ending in 3
"th" numbers ending in 0, 4, 5, 6, 7, 8, 9 OR the last two digits of the number being 11 - 19
Data Structure
- number
Algorithm
- first goal: figure out the century number
  - take the input number and divide it by 100 and round down to the closest whole number
  - if the last digit in the input number is equal to 1 or greater, add 1 to the century number
- second goal: add suffix
  - create `getSuffix` helper function  
    - take the century number as an input
      - if the last number two number of the century number is:
        - 11 - 19, append "th"
      - if the last number of the century number is:
        - 1 -> "st", 2 -> "nd", 3 -> "rd"
- return the century number concatenated with the according suffix
*/
// My Solution
function century(year) {
  let centuryNumber = getCenturyNumber(year);
  return getSuffix(centuryNumber);
}

function getCenturyNumber(year) {
  let yearString = String(year);
  let centuryNumber = Math.floor(year / 100);
  if (yearString[yearString.length - 1] >= 1) {
    centuryNumber += 1;
  }

  return centuryNumber;
}

function getSuffix(year) {
  let yearString = String(year);
  let lastTwo = Number(yearString.slice(yearString.length - 2));
  let last = Number(yearString.slice(yearString.length - 1));
  if (last === 0 || (lastTwo >= 11 && lastTwo <= 19)) {
    return year + 'th';
  } else if (last === 1) {
    return year + 'st';
  } else if (last === 2) {
    return year + 'nd';
  } else if (last === 3) {
    return year + 'rd';
  }
}

// Exercise Solution
function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

// Test Cases
console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"