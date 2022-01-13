// Exercise 8: Grade Book
/*
input: 3 numbers
output: string
Rules
- write a function that determines the mean (average) of the three scores passed to it and returns
the letter associated with that grade
- numerical score letter grade list:
  - 90 <= score <= 100: 'A'
  - 80 <= score < 90: 'B'
  - 70 <= score < 80: 'C'
  - 60 <= score < 70: 'D'
  - 0 <= score < 60: 'F
- tested values are all between 0 and 100. There is no need to check for negative values or values
over 100
Examples / Test Cases
- 95, 90, 93  => "A"
- 50, 50, 95 => "D"
Data Structure
- numbers/string
Algorithm
- create average and set it to the three input numbers added and divided by 3 then rounded to an 
even number
- if the average is less than or equal to 90 AND less than or equal to 100 return 'A'
- if the average is less than or equal to 80 AND less than 90, return 'B'
  - repeat the last statement for:
    - 70-80 => return 'C'
    - 60-70 => return 'D'
    - 0-60 => return 'F'
*/

function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

// Test Cases
console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"