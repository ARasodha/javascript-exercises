// Exercise 3: When Will I Retire
/*
input:
output:
Rules
- build a program that logs when the user will retire and how many more years the user has to work
until retirement.
Examples / Test Cases
- What is your age? 30
At what age would you like to retire? 70
"It's 2017. You will retire in 2057."
"You have only 40 years of work to go!"
Data Structure
- numbers, math operation
Algorithm
- create age, ask the user their age and initialize it to this variable
- create year and set it to the current year
- create retirementAge, ask the user what year they would like to retire and initialize it to
this variable
- create yearsToGo and initialize it to the your retirement age - your current age
- create retirement year and initialize yearsToGo added to the currentYear
- output a statement "I's {year}. You will retire in {retirementYear}."
- output a statement "You have only {yearsToGo} years of work to go!"
*/

let age = prompt("What is your age? ");
let year = new Date().getFullYear();
let retirementAge = prompt("At what age would you like to retire? ");
let yearsToGo = Number(retirementAge) - Number(age);
let retirementYear = Number(year) + yearsToGo;
console.log(`It's ${year}. You will retire in ${retirementYear}.`);
console.log(`You only have ${yearsToGo} years of work to go!`);

// Test Case
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!