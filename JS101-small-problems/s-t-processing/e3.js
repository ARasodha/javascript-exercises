// E3 Lettercase Counter:
// My Solution:
function letterCaseCount(string) {
  let count = {lowercase: 0, uppercase: 0, neither: 0};
  let chars = string.split('');
  chars.forEach(char => {
    if (char === char.toUpperCase() && isLetter(char)) {
      count['uppercase']++;
    } else if (char === char.toLowerCase() && isLetter(char)) {
      count['lowercase']++;
    } else {
      count['neither']++;
    }});
  return count;
}
function isLetter(char) {
  return char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z';
}

// Book Solution 1:
function letterCaseCount(string) {
  let count = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (char >= 'a' && char <= 'z') {
      count.lowercase++;
    } else if (char >= 'A' && char <= 'Z') {
      count.uppercase++;
    } else {
      count.neither++;
    }
  }
  return count;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));

// Book Solution 2:
function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}
// letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
