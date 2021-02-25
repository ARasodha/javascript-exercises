// E6 Palindromic Substrings:
function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length++) {
    substrings.push(string.slice(0, length));
  }
  return substrings;
}

function substrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex++) {
    let substring = string.slice(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }
  return substrings;
}

function palindromes(string) {
  substrs = substrings(string).filter(string => string.length > 1);
  return substrs.filter(string => string === string.split('').reverse().join(''));
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));
