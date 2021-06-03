/* E1 Lettercase Percentage Ratio:
Input: string
Output: object
Rules:
- return an object containing the percentage of the following:
  - percentage of lowercase letters in the string
  - percentage of uppercase letters in the string
  - percentage of characters that are neither
- may assume that the input string will contain at least 1 character

Data Structure
- Object with three properties (which will be returned)

Algorithm
- Create object with three properties: lowercase, uppercase, neither - all with
the value of 0
- Iterate of characters in input string
  - if character is not a letter increase the neither property by one
    - create isLetter helper function
  - if the character is uppercase increase the corresponding by one and same for
  lowercase
  - iterate over object and reassign each property value with that particular
  property value divided by the input string length
  - return the object
*/

function letterPercentages(string) {
  let object = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  string.split('').forEach(char => {
    if (!isLetter(char.toLowerCase())) {
      object['neither']++;
    } else if (char === char.toLowerCase()) {
      object['lowercase']++;
    } else {
      object['uppercase']++;
    }
  });

  for (let key in object) {
    object[key] = ((object[key] / string.length) * 100).toFixed(2);
  }

  return object;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
