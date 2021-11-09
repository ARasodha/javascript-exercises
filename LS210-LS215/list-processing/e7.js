// Exercise 7: Palindromic String
/*
Input: string
Output: array
Rules
- write a function that returns all of the substrings of a string that are 
palindromic
- each substring must consist of the same sequence of characters forwards
and backwards
- the substrings in the returned list should be sorted by their order of 
appearance in the input string
- duplicate substrings should be included multiple times
- use the `substrings` function from the previous exercise
- case maters when checking if a string is a palindrome
- assume single characters are not palindromes
Algorithm
- write `isPalindromic` helper function that returns a boolean
  - takes a string, reverses one copy to check if both strings are equal
  - if either string length is 0 return false
- write palindromes
- create palindromes empty array
- iterate over input string and use `substrings` to check if the current substring
substring is a palindrome, if so add it to the `palindromes` array
- once the loop has terminated, return palindromes array
*/

function palindromes(string) {
  let substringsList = substrings(string)
  return substringsList.filter(isPalindrome);
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('') && string.length > 1;
}

function substrings(string) {
  let substrings = [];
  for (let idx = 0; idx < string.length; idx++) {
    for (let jdx = idx + 1; jdx <= string.length; jdx ++) {
      substrings.push(string.slice(idx, jdx));
    }
  }

  return substrings;
}

// Test Cases
console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]