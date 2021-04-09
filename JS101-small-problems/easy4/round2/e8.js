// E8 Letter Count (Part 1):
// My Solution:
function wordSizes(sentence) {
  let wordsArray = sentence.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx++) {
    let wordSize = String(wordsArray[idx].length);

    if (Object.keys(count).includes(wordSize)) {
      count[wordSize] += 1;
    } else if (wordSize === 0) {
      continue;
    } else {
      count[wordSize] = 1;
    }
  }

  return count;
}

// LS Solution:
// function wordSizes(sentence) {
//   let wordsArray = sentence.split(' ');
//   let count = {};
//
//   for (let idx = 0; idx < wordsArray.length; idx++) {
//     let wordSize = wordsArray[idx].length;
//     if (wordSize === 0) continue;
//
//     if (!count[wordSize]) {
//       count[wordSize] = 0;
//     }
//
//     count[wordSize]++;
//   }
//
//   return count;
// }


console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes('')); // {}
