// E5 Scrabble Score:
/*
Input: string
Output: number
Rules
- take the input word and compute the scrabble score for that word
- sum the values of all the tiles used in each word
  - ex: CABBAGE --> 3 pts for C, 1 for A (there are two), 3 for B (there are 2), 2 for G
  and 1 for E. The total is 14 points
  The math: 3 + 2*1 + 2*3 + 2 + 1
=> 3 + 2 + 6 + 3
=> 5 + 9
=> 14

Test Cases: on scrabble-score.js

Data Structures
- the input is a string, will need to convert to array of characters

Algorithm
- create Scrabble class
  - create static points object with all the points per letter
  - constructor takes one argument - word
    - set word argument to word property
  - instance methods: 
    - score() - returns the number score this.word
*/
"use strict";

class Scrabble {
  static POINTS = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  }

  constructor(word) {
    this.word = word;
  }

  score(optionalWordArg) {
    if (this.word === null) return 0;
    let score = 0;

    this.word.toUpperCase().split('').forEach(letter => {
      for (let key in Scrabble.POINTS) {
        if (Scrabble.POINTS[key].includes(letter)) score += Number(key);
      }
    });

    return score;
  }

  static score(word) {
    return new Scrabble(word).score();
  }

}

module.exports = Scrabble;

// Alternative Solution:
// class Scrabble {
//   static POINTS = {
//     'AEIOULNRST': 1,
//     'DG': 2,
//     'BCMP': 3,
//     'FHVWY': 4,
//     'K': 5,
//     'JX': 8,
//     'QZ': 10,
//   };

//   constructor(word) {
//     this.word = word ? word : '';
//   }

//   score() {
//     let letters = this.word.toUpperCase().replace(/[^A-Z]/g, '').split('');
//     let total = 0;

//     letters.forEach(letter => {
//       Object.keys(Scrabble.POINTS).forEach(allLetters => {
//         if (allLetters.includes(letter)) {
//           total += Scrabble.POINTS[allLetters];
//         }
//       });
//     });

//     return total;
//   }

//   static score(word) {
//     return new Scrabble(word).score();
//   }
// }

// module.exports = Scrabble;