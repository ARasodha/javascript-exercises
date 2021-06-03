/* E5 Word to Digit:
Input: string
Output: String with number words convereted to digits
Rules:
- convert number words to digits
- some number words may contain punctuation at the end
Implicit
- Will all number words be lowercased
- will the only punctuation at the end of the number word be a period?

Data Structure
- Using object to create numberWord and number key value pairs to select from

Algorithm
- Create digits object with the numberWord as the key and the corresponding number
as the value
- Convert input string to wordArray
- Iterate over word array and if the current word filtered to be just letters
(no punctuation) is a key in the digits object then replace that word with the
corresponding number value. Also if the current words last index is period then
concat a period to the returned word
  - use `lettesOnly` helper function
- join string back together with replaced number words
- return new string
*/

function wordToDigit(sentence) {
  let digits = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7,
  eight: 8, nine: 9};
  return sentence.split(' ').map(word => {
    if (Object.keys(digits).includes(lettersOnly(word)) && word[word.length -1 ] === '.') {
      return digits[lettersOnly(word)] + '.';
    } else if (Object.keys(digits).includes(lettersOnly(word))) {
      return digits[lettersOnly(word)];
    } else {
      return word;
    }
  }).join(' ');
}

function lettersOnly(word) {
  if (word[word.length - 1] === '.') {
    word = word.slice(0, word.length - 1);
  }
  return word;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
