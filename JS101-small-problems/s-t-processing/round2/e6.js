/*E6 Staggered Caps (Part 1):
Explicit Requirements
- Input: string
- Output: string
- Transform the string so that every other character is capitalized.
- Non alphabetical characters should not be changed but they should be counted
as characters when determining when to switch between upper and lowercase

Data Structure
- Working with strings

Alghorithm
- Iterate through the string
- If the index is an even number, uppercase the character in the string and if
is an uneven index number then lowercase the character at that point
*/

function staggeredCase(string) {
  return string.split('').map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!')); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS')); // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers')); // "IgNoRe 77 ThE 4444 nUmBeRs"
