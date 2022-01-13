// Exercise 1: How old is Teddy
/*
input: 
output:
Rules
- build a program that generates Teddy's age, and logs it to the console
- have the age be a random number between 20 and 200 (inclusive)
Examples / Test Cases
- "Teddy is 69 years old!"
Data Structure
- number
Algorithm
- create a random integer between 20 and 200 and interpolate it into the string "Teddy is {integer}
years old!"
*/

let randomAge = Math.floor(Math.random() * (200 - 20) + 1 + 20);
console.log(`Teddy is ${randomAge} years old!`);