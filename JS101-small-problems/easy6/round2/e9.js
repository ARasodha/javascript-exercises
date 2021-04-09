// E9 Reverse It (Part 1):
function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}
console.log(reverseSentence('')); // ""
console.log(reverseSentence('Hello World')); // "World Hello"
console.log(reverseSentence('Reverse these words')); // "words these Reverse"
