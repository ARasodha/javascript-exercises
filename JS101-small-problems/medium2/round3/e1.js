// Ex1 Lettercase Percentage Ratio:
/*
Input: string
Output: object
Rules
- return an object with three properties
  - percentage of characters that are uppercase
  - percentage of characters that are lowercase
  - percentage of neither
- may assume that the string will always be at least one character long

Algorithm
- create an object with three properties
  - lowercase, uppercase, neither (all with the inital value of 0)
- iterate over each character in the input string
  - if the string is not a letter
    - use a isLetter helper function
      - increase neither += 1
  - if the letter is uppercase
    - increse uppercase by +=1
  - if the letter is lowercase
    - increase lowercase by += 1
- convert each property value to percentage
  - iterating over the object and for each value divide it by the string input's
  length property and round it to 2
*/

function letterPercentages(string) {
  let object = {lowercase: 0, uppercase: 0, neither: 0};
  for (let idx = 0; idx < string.length; idx++) {
    if (!isLetter(string[idx])) {
      object.neither++;
    } else if (string[idx] === string[idx].toLowerCase()) {
      object.lowercase++;
    } else {
      object.uppercase++;
    }
  }

  for (let key in object) {
    object[key] = ((object[key] / string.length) * 100).toFixed(2);
  }

  return object;
}

function isLetter(char) {
  char = char.toLowerCase();
  return char >= 'a' && char <= 'z';
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
