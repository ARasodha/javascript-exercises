// E4 Capitalize Words:
// My Solution:
function wordCap(string) {
  let words = string.split(' ');
  let newWords = [];
  for (let idx = 0; idx < words.length; idx++) {
    word = words[idx].slice(0, 1).toUpperCase() + words[idx].slice(1).toLowerCase();
    newWords.push(word);
  }
  return newWords.join(' ');
}

// Lesson Solution:
function wordCap(string) {
  return string.split(' ').map(word => word.slice(0, 1).toUpperCase() +
    word.slice(1).toLowerCase()).join(' ');
}

wordCap('four score and seven'); // "Four Score And Seven"
// wordCap('the javaScript language');    // "The Javascript Language"
// wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));
