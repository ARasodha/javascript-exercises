// Exercise 3: Lettercase Counter
/*
Input: string
Output: object
Rule
- write a function that takes a string and returns an object containing three properties: one 
representing the number of characters in the string that are lowercase letters, one representing 
the number of characters that are uppercase letters, and one representing the number of characters
that are neither. 
Algorith, 
- create count object with properties `lowercase`, `uppercase` and `neither` all with the value 0
- iterate over the input string and if the current character is: 
  - a lowercase letter, increment the `lowercase` property in count by 1 
  - a uppercase letter, increment the `uppercase` property in the count by 1
  - neither, uppercase the `neither` property by 1
- once the loop has terminated, return the count object
*/
// My Solution
function letterCaseCount(string) {
  let count = { lowercase: 0, uppercase: 0, neither: 0}; 
  string.split('').forEach(char => {
    if (/[a-z]/i.test(char)) {
      if (/[a-z]/.test(char)) {
        count['lowercase']++;
      } else if (/[A-Z]/.test(char)) {
        count['uppercase']++;
      }
    } else {
      count['neither']++;
    }
  });

  return count;
}

// Exercise Solution:
function letterCaseCount(string) {
  const lowerArray = string.match(/[a-z]/g) || [];
  const upperArray = string.match(/[A-Z]/g) || [];
  const neither = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerArray.length,
    upperArray: upperArray.length,
    neither: neither.length,
  }
}

// Test Cases
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }