// Exercise 9: Letter Counter Part 1
/*
input: string
output: object
Rules
- write a function that takes a string consisting of one or more space separated words and returns
an object that shows the number of words of difference sizes
- words consist of any sequence of non-space characters
- an empty string should return an empty object
Examples / Test Cases
- Four score and seven. =? { "3" : 1, "4": 1, "5": 1, "6": 1 }
- Hey diddle, diddle, they can and the fiddle! => { "3": 5, "6": 1. "7": 2 }
- What's up doc? => { "2": 1, "4", 1, "6": 1 }
- '' => {}
Data Structure
- object
Algorithm
- create wordsArray and initialize it to the input string split into an array of words
- create result empty object
- iterate over the words array and on each round of iteration
- check if a key with the length of the current word exists 
  - if so increment its value by 1
  - otherwise, create a new key with the value of 1
- once the loop has terminated, return the result object
*/
function wordSizes(sentence) {
  let wordsArray = sentence.split(' ');
  let result = {};
  if (wordsArray.length === 1) return result;

  for (let idx = 0; idx < wordsArray.length; idx++) {
    let word = wordsArray[idx];
    result[word.length] ? result[word.length]++ : result[word.length] = 1;
  }


  return result;
}

// Test Case
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
