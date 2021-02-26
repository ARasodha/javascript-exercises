// E6 Staggered Caps (Part 1):
// My Solution:
function staggeredCase(string) {
  let result = [];
  for (let idx = 0; idx < string.length; idx++) {
    if ([idx] % 2 === 0) {
      result.push(string[idx].toUpperCase());
    } else {
      result.push(string[idx].toLowerCase());
    }
  }
  return result.join('');
}

// Lesson Solution:
function staggeredCase(string) {
  return string.split('').map((char, index) => {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('')
}

// staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
// staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
// staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));
