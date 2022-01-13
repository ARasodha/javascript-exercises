// Exercise 10: UTF-16 String Value
/*
input: string
output: number
Rules
- write a function that determines and returns UTF-16 string value of a string passed in as an 
argument
- the UTF-16 string value is the sum of the UTF-16 values of every character in teh string
- you may use `String.prototype.charCodeAt()` to determine the UTF-16 value of a character
- charCodeAt - returns NAN for a space
Examples / Test Cases
- 'Four score` = 984
- 'Launch School' = 1251
- 'a' = 97
- '' = 0
- OMEGA = "\u03A9"
  - OMEGA = 937
  - OMEGA + OMEGA + OMEGA = 2811
Data Structure
- array - split string in to an array of characters to iterate over and replace with charCode 
Algorithm
- create charArray and initialize it to the input string split up into an array of characters
- if the charArray's length is 0 return 0
- reduce the charArray into a sum of the charCode of each character
- return the sum
*/

function utf16Value(charString) {
  let charArray = charString.split('');
  if (charArray.length === 0) return 0;
  return charArray.reduce((sum, char) => sum + char.charCodeAt(), 0);
}

// Test Cases
console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811