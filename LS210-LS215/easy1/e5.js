// Exercise 5: Sum or Product of Consecutive Integers
/*
Input: 
Output:
Rules
- write a program that asks the user to enter an integer greater than 0, then asks if the user
wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive
Examples/ Test Cases
- Please enter an integer greater than 0: 5
  Enter "s" to compute the sum, or "p" to compute the product. s

  The sum of the integers between 1 and 5 is 15.
- Please enter an integer greater than 0: 6
  Enter "s" to compute the sum, or "p" to compute the product. p

  The product of the integers between 1 and 6 is 720.
Data Structure
- 
Algorithm
- create function `getIntegers` that takes the userInteger and returns an array of all the 
integers between 1 and the specified integer, inclusive
- ask the user to enter an integer greater than 0 save it in the `integer` var
- ask the user if they want to compute the sum or product
- if the user chooses sum
  - create a function `sum` that takes the integer
    - obtain the integers between 1 and the integer in an array
    - calculate and return the sum of those integers
- if the user chooses product
  - same steps as sum but calculate and return the sum of those integers
- include result in a statement that mentions 1 and the user provided integer and the sum/product
*/
const readlineSync = require("readline-sync");

console.log('Please enter an integer greater than 0:');
let integer = Number(readlineSync.prompt());

console.log('Enter "s" to compute the sum, or "p" to compute the product. ');
let choice = readlineSync.prompt().toLowerCase();

function getIntegers(integer) {
  let integers = [];
  let num = 1;
  while (num <= integer) {
    integers.push(num);
    num++;
  }
  
  return integers;
}

if (choice === "s") {
  let sum = getIntegers(integer).reduce((sum, val) => sum + val, 0);
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else if (choice === "p") {
  let product = getIntegers(integer).reduce((prod, val) => prod * val, 1);
  console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
}