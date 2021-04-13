# PEDAC FOR EXRTA PRACTICE QUESTIONS IN extraPrac.js

# Question: Easy 2.9 Convert a String to a Number!

## Understanding the Problem
- Explicit Requirements
  - Input: string of number characters
  - Output: number
  - Cannot use built in JavaScript methods like Number() & parseInt()
  - Assume all characters will be numeric
  - Don't worry about any signs (+/-)

- Implicit Requirements (Questions)
  - Can we use the unary '+' operator - No

# Examples/ Test Cases
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

# Data Structure
- Use an object to hold digit's
- Use an array to access each character individually for conversion

# Algorithm
1. Create collection of digits from 0-9
2. Check if each character matches a key in the collection of digits
3. If it does add the number and multiply by 10 each time
  - If number matches a number from the collection save it to a variable.
  - Each time a new number matches from the collection, multiply the current number by 10 and add the new number to the product
4. Repeat step 3 for every character in input string
5. Return resulting number after all characters in the string have been iterated on

Example:
'123';
number = 1;
number = 1 * 10 + 2;
number = 12;
number = 12 * 10 + 3;
number = 123;

# Implementing a solution in Code
```JavaScript
function stringToInteger(string) {
  const DIGITS = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9};
  let value = 0;
  for (let idx = 0; idx < string.length; idx++) {
    value = value * 10 + DIGITS[string[idx]];
  }
  return value;
}
```
_________________________________________________________________________

# Question: Easy 2.11 Convert a Number to a String!

# Understand the Problem
- Explicit Requirements
  - Input: number
  - Output: String version of inputed number
  - Cannot use JavaScript conversion functions or methods like String() or toString() or an expression such as '' + number

- Implicit Requirements
  - The input will always be a number with at least 1 digit

# Examples/ Test Cases
integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"

# Data Structure
- An array of digits that are strings

# Algorithm
1. Create an array with digits from 0-9 that are strings
2. Create a variable called result and set it to an empty string
3. Modulo the input number save it to a variable called remainder.
4. Reassign result to the element in the digits array at the 'remainder' index position with the current result added to the end
5. Reassign the integer to the integer divided by 10 to remove 1 number (round the result down)
6. Repeat steps 3 and 5 until each digit in the input number has been iterated over
7. If the integer entered is the number '0' then return the string '0'
8. Return result

# Implementing a solution in Code
```JavaScript
function integerToString(integer) {
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  let remainder = 0;
  if (integer === 0) return '0';
  while (integer > 0) {
    remainder = integer % 10;
    result = digits[remainder] + result;
    integer = Math.floor(integer / 10);
  }

  return result
}
```
_________________________________________________________________________

# Question: Easy 2.12 Convert a Signed Number to a String!

# Understand the Problem
- Explicit Requirements
  - Input: integer (can be signed (+/-))
  - Output: string version of integer with sign
  - No built in JavaScript conversion methods like `String()` or `toString()`
  - Can use `integerToString()` function from previous exercise
  - Might want to use `Math.sign()`method

- Implicit Requirements
  - Input will always be a number

# Example/ Test Cases
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

# Data Structure

# Algorithm
1.  Check `Math.sign()` value for integer
2. If it equals '1' return integerToString(integer)
3. If it equals '-1' return -integerToString(-integer). Make sure to make the integer passed in a positive integer

# Implementing a solution in Code

```JavaScript
function signedIntegerToString(integer) {
  switch (Math.sign(integer)) {
    case 1: return `+${integerToString(integer)}`;
    case -1: return `-${integerToString(-integer)}`;
    default: return integerToString(integer);
  }
}
```
_________________________________________________________________________

# Question 3.10 What Century is That?

# Understand the Problem
- Explicit Requirements
  - Input: number
  - Output: string
  - Convert year into according century with prefix
  - New centuries begin in years that end 01
- Implicit Requirements
  - Are all inputs going to be an integer - Yes

# Example/ Test Cases

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

# Data Structures

# Algorithm
1. Extract century number from year. Divide by 100 and round up
2. Depending on century number ending digit(s) concatenate prefix
  - If ending two digits are 11, 12, 13 use prefix 'th'
  - If ending is none of the above and last digit is 1, 2, 3 create according prefixes, the rest default to 'th'

```JavaScript
function century(year) {
  let century = Math.ceil(year / 100);
  let lastTwo = century % 100;

  if (lastTwo === 11 || lastTwo === 12 || lastTwo === 13) {
    return century + 'th';
  }

  switch (century % 10) {
    case 1: return century + 'st';
    case 2: return century + 'nd';
    case 3: return century + 'rd';
    default: return century + 'th';
  }

}
```
___________________________________________________________________________

# Question: Write a function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2. Otherwise return false. For example:
rkqodlw ==> world
cedewaraaossoqqyt ==> codewars
katas ==> steak

# Understand the Problem
- Explicit Requirements
  - Input: string (all lower case letters)
  - Output: boolean
  - If first string argument has all the characters to make the second string then return true, otherwise return false
  - All characters will be lowercase and no punctuation will be used
  - Letters do not have to be in order to make the word in the first string
- Implicit requirements
  - only strings lowercase with no punctuation will be passed in as arguments

# Examples/ Test Cases

# Data Structure
console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));

# Algorithm
1. Split sr2 into individual characters in an array and save it to a new variable (searchedWordArray)
2. Iterate over letters in first string and check if any letter if all letters from searchWordArray are in includede in str2. If so return true if not return false
