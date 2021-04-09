// E5 Palindromic Strings (Part 2):
function isRealPalindrome(string) {
  string = string.toLowerCase();
  let filteredString = string.split('').filter(char => {
    if (isNum(char) || isLetter(char)) {
      return char;
    }
  }).join('');

  return isPalindrome(filteredString);
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isNum(char) {
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return numbers.includes(char);
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}
console.log(isRealPalindrome('madam')); // true
console.log(isRealPalindrome('Madam')); // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
console.log(isRealPalindrome('356653')); // true
console.log(isRealPalindrome('356a653')); // true
console.log(isRealPalindrome('123ab321')); // false
