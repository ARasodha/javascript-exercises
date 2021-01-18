// E9 Letter Counter (Part 2):
function wordSizes(string) {
  let count = {};
  let wordsArray = string.split(' ');
  for (let idx = 0; idx < wordsArray.length; idx++) {
    let cleanWordSize = removeNonLetters(wordsArray[idx].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;

  }
  return count;
}

function removeNonLetters(array) {
  let results = '';
  for (let idx = 0; idx < array.length; idx++) {
    if (isLetter(array[idx])) {
      results += array[idx];
    }
  }
  return results;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}



console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));
