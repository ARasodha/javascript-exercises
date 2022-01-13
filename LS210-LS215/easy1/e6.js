// Exercise 6: Short Long Short
/*
Input: two strings
Output: string
Rules
- write a function that takes two strings as arguments, determine the length of two strings,
and then returns the result of concatenating the shorter string, the longer string and the shorter
string again
- you may assume that the strings are of different lengths
Examples / Test Cases
- abc, defgh => abcdefghabc
- abcde, fgh => fghabcdefgh
- ''. xyz => xyz
Data Structures
- strings
Algorithm
- create function shortLongShort that takes two string inputs, string1, string2
- create shortString and longString and set the shorter string to the shortString and the longer
string to longString
- return a string with the shortString concatenated to the longString and the shortString again
*/

function shortLongShort(string1, string2) {
  let longString = string1.length >= string2.length ? string1 : string2;
  let shortString = string1.length >= string2.length ? string2 : string1;
  return `${shortString}${longString}${shortString}`;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));     // "xyz"
