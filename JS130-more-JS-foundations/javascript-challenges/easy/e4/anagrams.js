// E4 Anagrams:
/*
Input: string, array of strings
Output: array of strings
Rules
- take a word and a list of possible anagrams and return and array with only the words from
the original list that were anagrams
- anagram is a word that has the exact same letters as another word

Test Cases: on anagrams.test.js

Data Structures
- working with arrays and strings

Algorithm
- create Anagrams class
  - take one argument in constructor
  - create matchWord property set to word argument
- Instance methods:
  - match() - returns an array of all the anagrams of the matchWord in the inputList
    - create keyWord and set it to the matchWord sorted alphabetically
    - create anagrams empty array
    - iterate over inputList (argument passed to match), for each word sort it alphabetically
      - if it is strictly equal to the keyWord, push it into the anagrams array
    - after iteration has terminated return the anagrams array
*/

class Anagram {
  constructor(word) {
    this.matchWord = word;
  }

  match(inputList) {
    let sortedMatchWord = this.sort(this.matchWord);
    return inputList.filter(item => {
      if (sortedMatchWord === this.sort(item) && this.matchWord.toLowerCase() !== item.toLowerCase()) {
        return item;
      }
    
    });
  }

  sort(string) {
    return string.toLowerCase().split('').sort().join('');
  }
}


let detector = new Anagram('Orchestra');
let anagrams = detector.match(['cashregister', 'Carthorse', 'radishes']);
console.log(anagrams);


module.exports = Anagram;

// Alternative Solution:
// class Anagram {
//   constructor(word) {
//     this.matchWord = word.toLowerCase();
//   }

//   match(wordList) {
//     return wordList.filter(word => {
//       return word.toLowerCase() !== this.matchWord &&
//              this.isAnagram(word, this.matchWord);
//     });
//   }

//   sortedChars(word) {
//     return word.toLowerCase().split('').sort();
//   }

//   isAnagram(word1, word2) {
//     word1 = this.sortedChars(word1).join();
//     word2 = this.sortedChars(word2).join();
//     return word1 === word2;
//   }
// }

// module.exports = Anagram;