// Exercise 5: Word to Digit
/*
input: string
output: string
Rules
- write a function that takes a sentence string as an argument and returns that string
with every occurrences of a "number word" - 'zero', 'one', 'two', 'three', 'four', 'five', 'six',
'seven', 'eight', 'nine' -- converted to its corresponding digit character
Examples / Test Cases
- 'Please call me at five five five one two three four. Thanks.' => 
  "Please call me at 5 5 5 1 2 3 4. Thanks."
Data Structure
- string, object (for look up)
Algorithm
- create numbers object with the keys from zero, to nine and the values their corresponding digit
- split the input string into an array of words and iterate over each word
  - if the current word excluding a potential punctuation mark, is a key in the numbers object,
  replace it with its digit equivalent (use RegExp)
- once the loop has terminated, join the words back into a string sentence and return it
*/
// My Solution:
function wordToDigit(sentence) {
  let numbers = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6,
                  seven: 7, eight: 8, nine: 9};

  return sentence.split(' ').map(word => {
    let regex = /[a-z]+/gi;
    if (numbers[word.match(regex)[0]]) {
      return word.replace(regex, numbers[word.match(regex)[0]]);
    } else return word;
  }).join(' ');
}

// Exercise Solution:
const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp(word, 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}

// Test Cases
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."