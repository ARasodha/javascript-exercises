// Exercise 5: Palindrome Strings Part 2
/*
input: string
output: boolean
Rules
- write another function that returns true if the string passed as an argument is a palindrome
or false otherwise
- this time, however, your function should be case insensitive, and should ignore all non-alphanumeric
characters
- if you wish, you may simply things by calling the isPalindrome function you wrote in the previous
exercise
Examples / Test Cases
- madam => true
- Madam => true (case does not matter)
- Madam, I'm Adam => true (only alphanumeric characters matter)
- 356653 => true 
- 356a653 => true
- 123ab321 => false
Data Structure
- string manipulation
Algorithm
- create cleanLowerString, replace and non-alphanumeric characters in the string with empty strings
and lowercase the string
- reverse the cleanLowerString and compare it to the original cleanLowerString
*/
function isRealPalindrome(string) {
  let cleanLowerString = string.replace(/[^0-9a-z]/gi, '').toLowerCase();
  return cleanLowerString === cleanLowerString.split('').reverse().join('');
}

// Test Cases
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false