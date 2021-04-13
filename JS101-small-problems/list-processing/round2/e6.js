/* Ex 6 Palindromic substrings:
Explicit Requirements
- Input: string
- Output: array of substrings
- find palindromic substrings inside of input string and return them in a list
- palindromic string is a string that reads the same forward and backwards
- duplicate substrings should be included multiple times
- use `substrings` function
- palindromes are case sensitive
- single characters are not palindromic
- return an empty array if there are no palindromic substrings
Implicit Requirements
- a string will always be the input greater than 2 characters

Data Structure
- Array, as array will be returned (list)

Algorithm
- create `substrings` array for all substrings
- check strings for substrings using `substrings` function from previous exercise
  - create `result` array
  - iterate over index position 1 for the substrings
  - On each round of iteration call `leadingSubstring`
    - create `result` array
    - iterate over string by iterating over second index point in substring
    - push substrings to `result` array
  - push results to `result` array
- push all possible substrings to `substrings` array
- create `palindromes` empty array
- iterate over substrings array to find which string `isPalindromic`
  - if the substring reads reads the same frontwards and backwards in a case
  sensitive manner it is a palindromic and push to palindromes array
- do last step until all substrings have been iterated over
- return `palindromes` array
*/

function palindromes(string) {
    let substrings = substring(string);
    let result =  [];
    substrings.forEach(string => {
      if (isPlaindrome(string)) {
        result.push(string);
      }
    })
    return result;
}

// could have also done this
// function palindromes(string) {
//   return substring(string).filter(isPalindrome);
// }

function substring(string) {
  let result = [];
  for (let idx = 0; idx < string.length; idx++) {
    let substring = string.slice(idx);
    result.push(...leadingSubstring(substring));
  }

  return result;
}

function leadingSubstring(string) {
  let result = [];
  for (let idx = 1; idx <= string.length; idx++) {
    result.push(string.slice(0, idx));
  }
  return result;
}

function isPlaindrome(string) {
  return string.length >= 2 && string === string.split('').reverse().join('');
}
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
