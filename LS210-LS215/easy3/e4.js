// Exercise 4: Palindrome Strings Part 1:
/*
input: string
output: boolean
Rules
- write a function that returns true if the string passed as an argument is a palindrome, or false
otherwise
- a palindrome reads the same forwards and backwards
- for this problem case matters and all characters matter
Example / Test Cases
- madam => true
- Madam => false (case-matters)
- madam i'm adam => false (all characters matter)
- 356653 => true
Data Structure
- string manipulation
Algorithm
- take the input string and compare it to the input string reversed
  - split the comparison string into an array of characters, reverse it, join it back together
*/
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

// Test Cases
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true