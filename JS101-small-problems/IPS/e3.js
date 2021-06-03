// E3 Now I Know My ABCs:
/*
Input: string
Output: boolean
Rules
- the input is a word
- return true if the word can be spelled by following the rules of the block
  - words can be spelled only with the letters in the blocks
  - if a letter is used from the block, the second letter on that block cannot
  be used
  - each block can only be accessed once
- return false if it cannot
- the input word can be considered case-insensitive when rules are applied

Algorithm
- create an nested array `block` with a nested array for each pair
- reassign the string to uppercase
- iterate over string
  - iterate over `block` array
    - the current character in string === the first or second letter in one of
    the nested arrays, reassign the value of the nested array to an empty array
    - if the value is not included return false
- if the outside loop is done iterating return true
*/

function isBlockWord(word) {
  word = word.toUpperCase();
  let block = [
    ['B', 'O'],
    ['X', 'K'],
    ['D', 'Q'],
    ['C', 'P'],
    ['N', 'A'],
    ['G', 'T'],
    ['R', 'E'],
    ['F', 'S'],
    ['J', 'W'],
    ['H', 'U'],
    ['V', 'I'],
    ['L', 'Y'],
    ['Z', 'M']
  ];
  for (let idx = 0; idx < word.length; idx++) {
    let letter = word[idx];
    for (let jdx = 0; jdx < block.length; jdx++) {
      let nest = block[jdx];
      if (nest.includes(letter)) {
        nest.length = 0;
        break;
      }
      if (jdx === block.length - 1) return false;
    }
  }
  return true;
}

console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest')); // true
