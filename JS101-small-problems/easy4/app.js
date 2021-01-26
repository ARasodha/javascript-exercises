// // Extra Practice (e4, e8, e9)
// E4 Palindromic Strings (Part1):
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}
console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));

// E8 Letter Counter (Part1):
function wordSizes(string){
  let count = {};
  let wordArray = string.split(' ');
  for (let idx = 0; idx < wordArray.length; idx++){
    let wordSize = wordArray[idx].length;
    if (wordSize === 0){
      continue;
    }
    if (!count[wordSize]){
      count[wordSize] = 0;
    }
      count[wordSize]++;
  }
  return count;
}


console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));

// // E9 Letter Counter (Part2):
function wordSizes(string) {
  let count = {};
  let wordsArray = string.split(' ');
  for (let i = 0; i < wordsArray.length; i++) {
    let cleanWordSize = removeNonLetters(wordsArray[i].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }
    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize]++;
  }
  return count;
}

function removeNonLetters(word) {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    if (isLetter(word[i])) {
      result += word[i];
    }
  }
  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}
console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));

// BONUS E10 Letter Swap:
function swap(word) {
  let wordArray = word.split(' ');
  for (let idx = 0; idx < wordArray.length; idx++) {
    wordArray[idx] = firstAndLast(wordArray[idx]);
  }
  return wordArray.join(' ');
}

function firstAndLast(string) {
  if (string.length < 2) {
    return string;
  }
  return string[string.length - 1] + string.slice(1, string.length - 1) + string[0];
}
// console.log(firstAndLast('apple is the best'));
console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));
