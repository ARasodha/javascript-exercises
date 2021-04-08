// E9 Clean up the words:
// My Solution:
function cleanUp(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (isLowerCaseLetter(string[idx]) || isUpperCaseLetter(string[idx])) {
      result += string[idx];
    } else if (result[result.length - 1] !== ' ') {
      result += ' ';
    }
  }
  return result;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

// LS Solution:
// function cleanUp(text) {
//   let cleanText = '';
//
//   for (let idx = 0; idx < text.length; idx++) {
//     if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
//       cleanText += text[idx];
//     } else if (cleanText[cleanText.length - 1] !== ' ') {
//       cleanText += ' ';
//     }
//   }
//
//   return cleanText;
// }
//
// function isLowerCaseLetter(char) {
//   return char >= 'a' && char <= 'z';
// }
//
// function isUpperCaseLetter(char) {
//   return char >= 'A' && char <= 'Z';
// }

console.log(cleanUp("---what's my +*& line?")); // " what s my line "
