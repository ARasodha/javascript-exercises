// Extra Practice for Easy3:
// E9 Clean Up Words:
// My Solution:
// function cleanUp(string){
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let alphaArray = alphabet.split('');
//   let stringArray = string.split('');
//   let cleanArray = [];
//   let space = ' ';
//   for (let i = 0; i < stringArray.length; i++){
//     if (alphabet.includes(stringArray[i])){
//       cleanArray.push(stringArray[i])
//     } else if (cleanArray[cleanArray.length - 1] !== space){
//       cleanArray.push(space);
//     }
//   }
//   return cleanArray.join('');
// }
// cleanUp("---what's my +*& line?");    // " what s my line "
// console.log(cleanUp("---what's my +*& line?"));

//Book Solution:
//
function cleanUp(text) {
  let cleanText = '';
  for (let idx = 0; idx < text.length; idx++) {
    if (isLowerCase(text[idx]) || isUpperCase(text[idx])) {
      cleanText += text[idx];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }
  return cleanText;
}

function isLowerCase(char) {
  return char >= 'a' && char >= 'z';
}

function isUpperCase(char) {
  return char >= 'A' && char >= 'Z';
}
console.log(cleanUp("---what's my +*& line?"));
