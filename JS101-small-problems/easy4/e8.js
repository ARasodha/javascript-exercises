// E8 Letter Counter (Part 1):
function wordSizes(string) {
  let count = {};
  let wordsArray = string.split(' ');
  for (let idx = 0; idx < wordsArray.length; idx++) {
    let wordSize = wordsArray[idx].length;
    if (wordSize === 0) {
      continue;
    }
    if (!count[wordSize]) {
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
// { "3": 1, "4": 1, "5": 1, "6": 1 }
// { "3": 5, "6": 1, "7": 2 }
// { "2": 1, "4": 1, "6": 1 }
// {}
