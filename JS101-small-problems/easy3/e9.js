// E9 Clean up the words
// My Solution:
function cleanUp(string) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let stringArray = string.split('');
  let result = [];
  let space = ' ';
  for (let i = 0; i <= alphabet.length; i++) {
    if (alphabet.includes(stringArray[i])) {
      result.push(stringArray[i])
    } else if (result[result.length - 1] !== ' ') {
      result.push(space);
    }
  }
  return result.join('');
}


console.log(cleanUp("---what's my +*& line?")); // " what s my line "

// Book Solution:
// function cleanUp(text) {
//   let cleanText = ' ';
//   for (let idx = 0; idx < text.length; idx++) {
//     if (isUpperCaseLetter(text[idx]) || isLowerCaseLetter(text[idx])) {
//       cleanText += text[idx];
//     } else if (cleanText[cleanText.length - 1] !== ' ') {
//       cleanText += ' ';
//     }
//   }
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
// console.log(cleanUp("---what's my +*&line?")); // " what s my line "
