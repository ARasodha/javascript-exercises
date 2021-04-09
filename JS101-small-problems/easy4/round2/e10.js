/// E10 Letter Swap:
// My Solution:
function swap(sentence) {
  let wordsArray = sentence.split(' ');
  return wordsArray.map(word => {
    if (word.length > 1) {
      return word = word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
    } else {
      return word;
    }
  }).join(' ');
}

// LS Solution:
// function swap(words) {
//   let wordsArray = words.split(' ');
//
//   for (let idx = 0; idx < wordsArray.length; idx++) {
//     wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
//   }
//   return wordsArray.join(' ');
// }
//
// function swapFirstLastCharacters(word) {
//   if (word.length === 1) {
//     return word;
//   }
//
//   return word[word.length - 1] + word.slice(1, -1) + word[0];
// }

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
