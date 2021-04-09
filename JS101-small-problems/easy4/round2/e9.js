// E9 Letter Counter (Part 2):
// My Solution:
function wordSizes(sentence) {
  let wordsArray = sentence.toLowerCase().split('').filter(char =>
    isLetter(char) || char === ' ').join('').split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx++) {
    let wordSize = wordsArray[idx].length;
    if (wordSize === 0) continue;

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }

    count[wordSize]++;
  }

  return count;
}

function isLetter(char) {
  return 'a' <= char && 'z' >= char;
}

// LS Solution:
// function wordSizes(sentence) {
//   let wordsArray = sentence.split(' ');
//   let count = {};
//
//   for (let idx = 0; idx < wordsArray.length; idx++) {
//     let cleanWordSize = removeNonLetter(wordsArray[idx].toLowerCase()).length;
//     if (cleanWordSize === 0) continue;
//
//     count[cleanWordSize] = count[cleanWordSize] || 0;
//     count[cleanWordSize]++;
//
//   }
//   return count;
// }
//
// function removeNonLetter(string) {
//   let result = '';
//   for (let idx = 0; idx < string.length; idx++) {
//     if (isLetter(string[idx])) {
//       result += string[idx];
//     }
//   }
//   return result;
// }
//
// function isLetter(char) {
//   return char >= 'a' && char <= 'z';
// }

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
