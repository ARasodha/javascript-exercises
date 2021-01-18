// E10 Letter Swap:
// My Solution:
function swap(string) {
  let wordArray = string.split(' ');
  let newWordArray = [];
  for (let idx = 0; idx < wordArray.length; idx++) {

    let word = swapFirstAndLast(wordArray[idx]);
    newWordArray.push(word)
  }
  return newWordArray.join(' ');
}

function swapFirstAndLast(word) {
  if (word.length < 2) {
    return word;
  }

  let first = word.charAt(0);
  let last = word.charAt(word.length - 1);
  let middle = word.slice(1, word.length - 1)
  return last + middle + first;
}

// Book Version of Swapping First and Last:
// function swapFirstAndLastCharacters(word){
//   if (word.length === 1){
//     return word;
//   }
//   return word[word.length-1] + word.slice(1, -1) + word[0];
// }

// Change above function call to use Book verision.

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));
