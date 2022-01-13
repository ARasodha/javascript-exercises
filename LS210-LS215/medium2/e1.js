// Exercise 1: Lettercase Percentage Ratio
/*
input: string
output: object
Rules
- write a function that takes a string and returns an object containing the following three
properties:
  - the percentage of characters in the string that are lowercase letters
  - the percentage of characters that are uppercase letters
  - the percentage of characters that are neither
- you may assume that the string will always contain at least one character
- implicit: empty space counts as neither
Examples / Test Cases
- 'abCdef 123' => { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
- 'AbCd +Ef' => { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
- '123' => { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
Data Structure
- object
Algorithm
- create ratio empty object
- create a property (uppercase, lowercase, or neither) initialize it the value of an array with
all the characters for that corresponding property (if it returns null provide the length of
  an empty array)
  - divided by the length of the input string
  - multiplied by 100
  - set to two decimal points, and convert it to a string
  - use regex match to obtain an object of the valid characters for each property
- return the ratio object after above step is completed for each of the three properties
*/
// My Solution
function letterPercentages(string) {
  let ratio = {};
  ratio['lowercase'] = String(
    (((string.match(/[a-z]/g) ? string.match(/[a-z]/g).length : [].length)
                                      * 100) / string.length).toFixed(2));
  ratio['uppercase'] = String(
    (((string.match(/[A-Z]/g) ? string.match(/[A-Z]/g).length : [].length) 
                                      * 100) / string.length).toFixed(2));
  ratio['neither'] = String(
    (((string.match(/[^a-z]/gi) ? string.match(/[^a-z]/gi).length : [].length)
                                      * 100) / string.length).toFixed(2));
  
    return ratio;
}

// Exercise Solution:
function letterPercentages(string) {
  const count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
  };
}

// Test Cases
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }