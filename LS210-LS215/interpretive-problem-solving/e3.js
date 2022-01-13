// Now I Know My ABCs
/*
input: string
output: boolean
Rules
- a collection of spelling blocks has two letters per block 
- this limits the words you can spell with the blocks to only those words that do not use both
letters from any given block
- you can also only use each block once
Examples / Test Cases
- "BATCH" => true
- "BUTCH" => false
- "jest" => true
Data Structure
- string
- object 
Algorithm
- create `block` object and each key will have two letters from each block and the values will all
be 0
- create blockKeys array of keys from block object
- iterate over the characters in the input string. On each round of iteration:
  - iterate through `blockKeys`
  - if the current character (capitalized) is included in a key from the `block` object, increment
   that key's value by one 
- once the loop has terminated, iterate through the `blockKeys` and if a block has the corresponding
value greater than 1, return false otherwise return true
*/

function isBlockWord(string) {
  let block = {
    BO: 0,
    XK: 0,
    DQ: 0,
    CP: 0,
    NA: 0,
    GT: 0,
    RE: 0,
    FS: 0,
    JW: 0,
    HU: 0,
    VI: 0,
    LY: 0,
    ZM: 0
  };
  let blockKeys = Object.keys(block);

  for (let idx = 0; idx < string.length; idx++) {
    blockKeys.forEach((key) => {
      if (key.includes(string[idx].toUpperCase())) {
        block[key]++;
      }
    });
  }

  return !blockKeys.filter((key) => block[key] > 1).length > 0;
}

// Test Cases
console.log(isBlockWord("BATCH")); // true
console.log(isBlockWord("BUTCH")); // false
console.log(isBlockWord("jest")); // true
