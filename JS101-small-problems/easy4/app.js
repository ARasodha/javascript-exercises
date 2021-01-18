// Extra Practice (e4, e8, e9)
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
  let wordsArray = string.split(' ');
  for (let idx = 0; idx < wordsArray.length; idx++){
    let wordSize = wordsArray[idx].length;
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

// E9 Letter Counter (Part2):
function wordSizes(string){
  let count = {};
  let wordsArray = string.split(' ');
  for (let idx = 0; idx < wordsArray.length; idx++){
    let cleanWordSize = removeNonLetters(wordsArray[idx].toLowerCase()).length;
    if (cleanWordSize === 0){
      continue;
    }
    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize]++;
  }
  return count;
}

function removeNonLetters(string){
  let result = '';
  for (let idx = 0; idx < string.length; idx++){
    if (isLetter(string[idx])){
      result += string[idx];
    }
  }
  return result;
}

function isLetter(char){
  return char >= 'a' && char <= 'z';
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));                                          // {}
