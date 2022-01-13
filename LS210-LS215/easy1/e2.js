// Exercise 2: Even Numbers
/*
Input:
Output:
Rules
- log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line
Data Structure
- number
Algorithm
- create a loop that declares number and initializes it to 2, increments it by 2 on each round of 
iteration and loops while the number is less than 99
  - on each round of iteration log the value of number
*/

for (let number = 2; number < 99; number += 2) {
  console.log(number);
}