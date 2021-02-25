// E5 All Substrings:
// My Solution:
function substrings(string) {
  let result = [];
  let firstLetterIndex = 0;
  while (firstLetterIndex < string.length) {
    for (let idx = 1; idx <= string.length; idx++) {
      let substring = string.slice(firstLetterIndex, [idx]);
      if (substring === '') continue;
      result.push(substring);
    }
    firstLetterIndex++;
  }
  return result;
}

// Lesson Solution:
function substrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex++) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }
  return substrings;
}



function leadingSubstrings(string) {
  let substrings = [];
  for (let idx = 1; idx <= string.length; idx++) {
    substrings.push(string.slice(0, idx));
  }
  return substrings;
}
console.log(substrings('abcde'));
