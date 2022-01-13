// Exercise 2: Searching 101
/*
input:
output:
Rules
- write a program that solicits six numbers from the user and logs a message that describes
whether the sixth number appears among the first five numbers
Examples / Test Cases
- Entered numbers: 25, 15, 20, 17, 23
Sixth Number: 17
Output: "The number 17 appears in [25, 15, 20, 17, 23]"
Data Structure
- array, to hold all the numbers and to check for the sixth number
Algorithm
- create empty numbers array
- ask for 5 numbers one at a time
- each time save the number into a variable and push it into numbers array
- ask for the sixth number
- if the number appears output the statement "The number {sixth} appears in {numbers}".
- if the number does not appear, output the statement "The number {number} does not appear in
{numbers}."
*/
let numbers = [];

let first = prompt('Enter the 1st number: ');
let second = prompt('Enter the 2nd number: ');
let third = prompt('Enter the 3rd number: ');
let fourth = prompt('Enter the 4th number: ');
let fifth = prompt('Enter the 5th number: ');

numbers.push(first, second, third, fourth, fifth);

let last = prompt('Enter the last number: ');

console.log(`The number ${last} ${numbers.includes(last) ? 'appears' : 'does not'} appear in 
[${numbers.join(', ')}].`);

// Test Cases
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].