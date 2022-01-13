// Exercise 4: Unlucky Days
/*
input: number
output: number
Rules
- write a function that takes a year as an argument and returns the number of "Friday the 13ths"
in that year
- you may assume that the year is greater than 1752 - when the Georgian Calendar was adopted by the
United Kingdom
- you may also assume that the same calendar will remain for the foreseeable future
- note date object month starts at 0 (jan) and ends at 11 (dec)
Examples / Test Cases
- 1986 => 1
- 2015 => 3
- 2017 => 2
Data Structure
- number
Algorithm
- create count variable and initialize it to 0 
- create dates empty array
- create a loop that iterate from 0 to and including 11 and on each round of iteration
  - push a date object into array with the argument of the year passed, in the month the 
  incremented variable and the day the 13th
- once the loop has terminated, iterate over the dates array and on each round of iteration
  - if the current day (getDay) === 5, increment count by 1
- once the loop has terminated, return the value of count
*/
function fridayThe13ths(year) {
  let dates = [];
  for (let month = 0; month <= 11; month++) {
    dates.push(new Date(year, month, 13));
  }

  return dates.reduce((count, date) => {
    if (date.getDay() === 5) {
      count++;
    }
    return count;
  }, 0);
}

// Test Cases
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2