// Diamond
/*
Input: string
Output: string
Rules
- create a diamond of letter based on the input letter which is the widest point in the diamond
- the first row and last row contains a single 'A'
- all rows except the first and last have two identical letters
- the diamond is horizontally and vertically symmetrical
- the top half of the letters are in ascending order while the bottom half are in descending order
- we need the preserve the width of the longest row in the shorter rows. Eg., if "E" is the longest row
and is 9 characters long, then "A" must also be 9 characters long

Data Structures
- our input and output are both strings
- an array can be useful to build our diamond because it's built in methods can be useful

Algorithm 
- create a Diamond class 
  - class method - makeDiamond - takes on argument, the letter for the widest point and returns the diamond
  - create alphabet string to determine index of the input letter
  - determine how many characters are in longest line
*/
"use strict";

class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    let range = this.determineRange(letter);
    let widthOfDiamond = this.maxWidth(letter);
    let diamond = [];

    range.forEach(letter => {
      diamond.push(this.center(this.makeRow(letter), widthOfDiamond));
    });

    return `${diamond.join("\n")}\n`;
  }
  
  static makeRow(letter) {
    if (letter === 'A') return 'A';
    if (letter === 'B') return 'B B';
    return letter + this.determineSpaces(letter) + letter;
  }

  static maxWidth(letter) {
    if (letter === 'A') return 1;
    return this.determineSpaces(letter).length + 2;
  }

  static center(content, width) {
    let outerPad = (width - content.length) / 2;
    let padStr = (' ').repeat(outerPad);
    return `${padStr}${content}${padStr}`;``
  }

  static determineSpaces(letter) {
    let currLetterIdx = 1;
    let spaces = 1;
    let currentLetter = this.alphabet[currLetterIdx];

    while (currentLetter !== letter) {
      spaces += 2;
      currLetterIdx++;
      currentLetter = this.alphabet[currLetterIdx];
    }

    return (' ').repeat(spaces);
  }

  static determineRange(letter) {
    let range = [];
    let indexOfLetter = this.alphabet.indexOf(letter);

    for (let idx = 0; idx <= indexOfLetter; idx++) {
      range.push(this.alphabet[idx]);
    }
    
    return [...range, ...range.reverse().slice(1)];
  }
}

  module.exports = Diamond;