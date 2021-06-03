// Ex5 Word to Digit:
/*
Input: string
Output: string
Rules
- take the sentence input and return the same sentence with the words that are
numbers to be switched for the actual coresponding number

Algorithm
- create an numbers object with numbers from 0 - 9. The key should be the english word
and the value should be the object
- create object keys array to search from
- if the word's last character is a '.', search the numbers array for the word
with the last character sliced
  - if it does, return the value with a period appended after it
- iterate over the string and if the word has a value in the numbers object then
return the value for the word.
- other wise return the original word
*/

function wordToDigit(sentence) {
  let numbers = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6,
  seven: 7, eight: 8, nine: 9};
  let numbersKeys = Object.keys(numbers);
  return sentence.split(' ').map(word => {
    let newWord = word.slice(0, word.length - 1);
    if (word[word.length - 1] === '.' &&
     numbersKeys.includes(newWord)) {
       return numbers[newWord] + '.';
     } else if (numbersKeys.includes(word)) {
       return numbers[word];
     } else {
       return word;
     }
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
