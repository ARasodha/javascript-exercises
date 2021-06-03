/* E8 Longest Sentence:
Input: strings
Output: strings
Rules:
- print the longest setnence based on the number of words
- any sequence of characters that are not spaces are words.
- sentences are ended with '.', '!' or '?'
- also print a statement saying 'The longest sentence has __ words.'

Data Structure
- strings

Algorithm
- Create 'sentences' by assigning it an array with all the individual sentences
- Iterate over array of sentences to see how many words in each
- select the largest setentence and print it
- print statement with the length of words in the sentence
*/

/// COME BACK TO 
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';
console.log(longestSentence(longText));
