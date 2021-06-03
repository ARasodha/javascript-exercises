/*E8 Staggered Caps (Part 2):
Explicit Requirements
- Input: string
- Output: string
- Return a function that makes every other character uppercased but skips over
non letters
- Non letters should still be present in the return value

Data Structure
- Strings are being used

Algorithm
- Check if character is letter
  - use a helper function `isLetter`
- Create count variable. Only incremeent count if the character is a letter. If
count is even then convert the character to uppercase. If count is uneven then
convert the character to lowercase
*/

function staggeredCase(string) {
  let count = 0;
  return string.split('').map(char => {
    char = char.toLowerCase();
    if (isLetter(char) && count % 2 === 0){
      count++;
      return char.toUpperCase();
    } else if (isLetter(char)) {
      count++;
      return char;
    } else {
      return char;
    }
  }).join('');
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
