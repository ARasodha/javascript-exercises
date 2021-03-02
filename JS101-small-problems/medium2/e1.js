// E1 Letter Percentage Ratio:
// My Solution:
function letterPercentages(string) {
  let charCount = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  string.split('').forEach(char => {
    if (isLetter(char)) {
      if (char === char.toLowerCase()) {
        charCount['lowercase']++
      } else if (char === char.toUpperCase()) {
        charCount['uppercase']++;
      }
    } else {
      charCount['neither']++;
    }
  })
  return convertToPercentage(charCount);
}

function isLetter(char) {
  return char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z';
}

function convertToPercentage(object) {
  let totalChars = Object.values(object).reduce((accum, val) => accum + val);
  for (let key in object) {
    object[key] = String(((object[key] / totalChars) * 100).toFixed(2));
  }
  return object;
}

// Lesson Solution 1 (Have not learned Regular Expressions yet)):
function letterPercentages(string) {
  let count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(
      2
    ),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(
      2
    ),
    neither: (((string.match(/[^a-g]/gi) || []).length / count) * 100).toFixed(
      2
    )
  };
}

// Lesson Solution 2 (Have not learned Regular Expressions yet)):
function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither: percentage(/[^a-z]/gi)
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
