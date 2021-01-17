// E4 Palindromic Strings (Part 1):
// My Solution:
function isPalindrome(string) {
  let forwards = string.split('');
  let backwards = string.split('');
  let reversed = backwards.reverse();
  return forwards.join('') === backwards.join('');
}

// Book Simplified Solution:
// function isPalindrome(string){
//   return string === string.split('').reverse().join('');
// }

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));
