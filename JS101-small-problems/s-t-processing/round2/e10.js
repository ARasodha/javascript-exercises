/* E10 Search Word (Part 2):
Explicit Requirements
- Input: word of text(string), text(string) -
  Ouput: updated text (string)
- locate every insance of the input `word` and highlight it with ** and capitalize
all of its Words
Implicit Requirements (Questions)
- Will the input always be a word in the text

Data Structure
- Working with strings

Algorithm
- Create `textWords` array of all the words in the text
- Create a helper function to filter the word for  capitals or ending with punctuation
  - create `filterSearch` word function
- Iterate over all of the words in `textWords` if any word matches the filtered
search word, edit that word to be highlighted and capitalized and replaced
- return updated textWords array joined back to a string
*/

function searchWord(word, text) {
  let textWords = text.split(' ');
  for (let idx = 0; idx < textWords.length; idx++) {
    if (filterWord(textWords[idx]) === word) {
      textWords[idx] = `**${word.toUpperCase()}**`;
    }
  }
  return textWords.join(' ');
}

function filterWord(word) {
  word = word.toLowerCase();
  if (word[word.length - 1] === ',' ||
    word[word.length - 1 === '.']) {
    return word.slice(0, word.length - 1);
  }
  return word;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? blasedbla"
