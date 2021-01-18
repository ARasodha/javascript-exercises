// E6 Palindromic Numbers:
// My Solution:
function isPalindromicNumber(number) {
  return number == number.toString().split('').reverse().join('');
}

//Book Solution:
// Function from E4:
// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }
// Solution:
// function isPalindromicNumber(number){
//   return isPalindrome(String(number));
// }
console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));
