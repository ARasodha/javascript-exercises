/*E3 Lettercase Count:
Explicit Requirements
- Input: string
- Output: object
- create an object that represents how many uppercase, lowercase and neiter of the two
characters are in the string
- empty string should be `0` for all three properties
Implicit Requirements (Questions)
- Will the input always be a string?

Data Structure
- Object with three properties as thats what needs to be returned

Algorithm
- Create `object` object with three properties: lowercase, uppercase and neither
all with the value of '0'
- iterate over string, if the char is not a letter increment neither property by 1
  a. create seperate function to check if isLetter
 if the character equals that character uppercased increment
the uppercase property by 1.
- if character equals the same character lowercase, incremenet lowercase property by 1
*/

function isLetter(char) {
  char = char.toLowerCase();
  return char >= 'a' && char <= 'z';
}

function letterCaseCount(string) {
  let object = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  for (let idx = 0; idx < string.length; idx++) {
    if (!isLetter(string[idx])) {
      object.neither++;
    } else if (string[idx] === string[idx].toUpperCase()) {
      object.uppercase++;
    } else {
      object.lowercase++;
    }
  }
  return object;
}

console.log(letterCaseCount('abCdef 123')); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef')); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123')); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount('')); // { lowercase: 0, uppercase: 0, neither: 0 }
