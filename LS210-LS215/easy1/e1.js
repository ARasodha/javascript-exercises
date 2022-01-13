// Exercise 1: Odd Numbers
/*
Input: 
Output:
Rules
- log all the numbers from 1 to 99, inclusive to the console, with each number
on a separate line
Data Structure
- number
Algorithm:
- create `number` init to 1
- create loop that runs while number is less than or equal to 100
  - inside loop log the current value of number to the console
  - increment number by 1 on each round of iteration
*/

// let number = 1;

// while (number <= 99) {
//   console.log(number);
//   number++;
// }

// Further Exploration
function outputCount(number) {
  number = number || 1;
  console.log(number);
  number++;
  if (number <= 99) {
    outputCount(number);
  }
}

outputCount();