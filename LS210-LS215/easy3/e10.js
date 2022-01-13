// Exercise 10: Letter Count Part 2
/*
input: string 
output: object
Rules
- modify the wordSizes function from the previous exercise to exclude non-letters when determining
word sizes 
- for instance, the word "it's" is 3 not 4
Examples / Test Cases
- Four score and seven. => { "3": 1, "4": 1, "5": 2 }
- Hey diddle diddle, the cat and the fiddle! => { "3": 5, "6": 3 }
- What's up doc? => { "3": 5, "6": 3 }
- '' => {}
Data Structure
- object
Algorithm
- create cleanWordsArray and initialize it to the input string with any non-word characters removed
and split into an array of words
- create result empty object
- if the cleanWordsArray's length is 1, return the result object
- iterate over the cleanWordsArray and on each round of iteration
  - if the current words length is a key in the result object increment its value by 1
  - otherwise create a key in the result object with the current words length and value set to 1
- once the loop has terminated, return the result object
*/

function wordSizes(sentence) {
  let cleanWordsArray = sentence.split(' ').map(word => word.replace(/[^a-z]/gi, ''));
  let result = {};
  if (cleanWordsArray.length === 1) return result;

  for (let idx = 0; idx < cleanWordsArray.length; idx++) {
    let word = cleanWordsArray[idx];
    result[word.length] ? result[word.length]++ : result[word.length] = 1;
  }

  return result;
}

// Test Cases
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}