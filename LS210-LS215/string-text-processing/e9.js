// Exercise 9: Search Word 1
/*
Input: 2 strings
Output: number
Rules
- write a function that takes two arguments, a word and a string of text and returns an integer
representing the number of times the word appears in that text
- you may assume that the `word` and `text` inputs will always be provided, and that all word breaks are
spaces
- some words will include punctuation such as periods and commas
Algorithm
- create filteredText - filter words in the text to remove punctuation and set word to lowercase
- create count variable and set it to 0
- iterate over the filteredText, if the current word matches the input word increment count by 1
- when the loop has terminated return count
*/
// My Solution:
function searchWord(searchWord, text) {
  let filteredTextArray = filterText(text);
  let count = 0;
  filteredTextArray.forEach(word => {
    if (word === searchWord) {
      count++;
    }
  });

  return count;
}

function filterText(text) {
  return text.split(' ').filter(word => word.replace(/[?.,]/g, ''))
                        .map(word => word.toLowerCase());
}

// Exercise Solution:
function searchWord(word, text) {
  const regex = new RegExp(word, 'gi');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}

// Test Case:
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque' +
' laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae' +
' vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut' +
' fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro' +
' quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non' +
' numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim' +
' ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid' +
' ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam' +
' nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('qui', text));      // 3