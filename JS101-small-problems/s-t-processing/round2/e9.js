/* E9 Seartch Words (Part 1):
Explicit Requirements
- Input: word of text (string), text (string)
- Output: number
- return a number indicating how many times that word was in the text
- may assume the word and text inptus are always provided
- all word breaks are spaces
- some words my include commas and periods

Data Structure
- Working with strings

Algorithm
- take text and create array of words in textc all `textWords`
- Create `count` and set it to `0` to keep track of how many times the word is
in the text
- Create `filter` helper function to check if a word has upper case letters, or
punctuation at the end of it.
- Iterate through words in text and apply filter to them. See if any of the filtered
words match the input word.
- If they do increment count
- return count.
*/

function searchWord(word, text) {
  let textWords = text.split(' ');
  let count = 0;
  for (let idx = 0; idx < textWords.length; idx++) {
    if (filterWord(textWords[idx]) === word) count++;
  }

  return count;
}

function filterWord(word) {
  word = word.toLowerCase();
  if (word[word.length - 1] === ',' ||
    word[word.length - 1] === '.') {
      word = word.slice(word.length - 1);
    }
  return word;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3

// Further Exploration
console.log(searchWord('qui', text));      // 4
