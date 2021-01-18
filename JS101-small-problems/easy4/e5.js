// E5 Palindromic Strings (Part 2):
// Function from Part 1 (E4):
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

// My Solution:
function isRealPalindrome(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      result += string[idx];
    }
  }
  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

// Shorter Alternative:
// function isRealPalindrome(string) {
//   string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
//   return isPalindrome(string);
// }
console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));
