// Exercise 6: Palindrome Number
/*
input: number
output: boolean
Rules 
- write a function that returns true if its integer argument is palindromic, or false otherwise
- a palindromic number reads the same forwards and backwards
Examples / Test Cases
- 34543 => true
- 123210 => false
- 22 => true
- 5 => true
Data Structure
- string
Algorithm
- convert the input number to a string
- compare the original numString to the numString split into an array, reverse and joined 
*/
function isPalindromicNumber(number) {
  return String(number) === String(number).split('').reverse().join('');
}

// Test Cases
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));        // true
console.log(isPalindromicNumber(5));         // true