// Vigenere Cipher
/*
input: 2 strings
output: string
Rules / Requirements
- the Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution
- it uses a series of Caesar Ciphers based on the letters of a keyword
- each letter of the keyword is treated as a shift value
- for instance, the letter "B" corresponds to a shift value of "1", and the letter
"d" corresponds to a shift value of 3
- in other words, the shift value for a letter is equal to its index value in the
alphabet
- this means that letters "a"-"z" are equivalent to the numbers 0-25
- the uppercase letters are also 0-25
- applying the Vigenere Cipher is done sequentially for each character by applying 
the current shift value to a Ceasar Cipher for the particular character
- to make this more concrete look at the examples:

  plaintext: Pineapples don't go on pizzas!
  keyword: meat

  Applying the Vigenere Cipher for each alphabetic character:
  plaintext : Pine appl esdo ntgo onpi zzas
  shift     : meat meat meat meat meat meat
  ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

  result: Bmnxmtpeqw dhz'x gh ar pbldal!

- notice in the example, the key isn't moved forward if the character isn't in the alphabet
- like the Caesar Cipher, the Vigenere Cipher encrypts only alphabetic characters

- write a function that implements the Vigenere Cipher 
- the case of the keyword doesn't matter -- in other words, the resulting encryption won't
change depending on the case of the keyword's letter (e.g "MEat" === "mEaT")
Questions / Implicit
- will the input string and keyword always be provided? -- yes
- will the input string ever be an empty string? -- could be
- will the words in the input string be only separated by one space? -- yes

Data Structure
- string -- regex
- array -- iteration methods, HOF
Algorithm
1. create a result empty string
- create inputLetterLength and init it to the amount of characters in the input string that are
letters (regex)
- create shiftValues and init it to the invocation of getShiftValues -- takes key string and 
inputLetterLength as arguments
- create resultString empty string
- create shiftIndex and init to 0
- iterate over input string an on each round of iteration:
  - if the current character is a letter
    - create newLetter and init to the invocation of getNewLetter and pass in the current letter
    and shift number -- this will return the new letter in the right case
    - append newLetter to the resultString
    - increment shiftIndex by 1
  - if the current character is not a letter
    - append it to resultString

2. create shiftValues HF - takes keystring and letterCount num and returns array of each shift num
- create shiftNums empty array
- create count and init to 0
- create alphabetString - lowercase
- create keyWordLetterArr and init getKeyString that takes the keyword and shiftNum as an argument
and returns an array of each letter in the keyString until the count equals shiftNum
- create a loop while count is less than or equal to shiftNum input and on each round of iteration:
  - create index and init it to the index of the current letter (lowercased) in alphabet
  - push index to shiftNums empty array
- once the loop has terminated, return shiftNums array

3. create getkeyString HF - takes keyStringInput and number input
- create keyString empty string
- create count and init to 0 
- while count is less than or equal to the number input
  - iterate over the characters in the keyStringInput and append it to keyString empty string
    - increment count on each round 
    - if count is less than or equal to inputNum break both loops
- once the loop has terminated, return keyString

4. create getNewLetter HF - takes a letter and a shiftNumber and returns a letter
- create alphabet and init to all the letters in the alphabet lowercase
- create index and init to the input letters index (lowercased)
- create newIndex and init to the index + shiftNumber
- while shiftNumber is greater than 25
  - reassign shiftNumber to itself subtracted by 25
- return the alphabet string at newIndex passed to getCase -- and the original string (2 args)

5. create getCase HF - it takes two string, original and new
- if the original string === original string to lowercase
  - return the new string
- otherwise return the newString to upper case
*/
function getCase(original, newLetter) {
  return original === original.toLowerCase() ? newLetter : newLetter.toUpperCase();
}

function getNewLetter(letter, shiftNum) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let index = alphabet.indexOf(letter.toLowerCase());
  let newIndex = index + shiftNum;
  while (newIndex > alphabet.length - 1) {
    newIndex -= alphabet.length;
  }

  return getCase(letter, alphabet[newIndex]);
}

function getKeyString(keyStr, inputLetterLength) {
  let keyString = '';
  let count = 0;
  while (true) {
    for (let idx = 0; idx < keyStr.length; idx++) {
      if (count === inputLetterLength) break;
      count++;
      keyString += keyStr[idx];
    }

    if (count === inputLetterLength) break;
  }

  return keyString.toLowerCase();
}

function getShiftValues(keyStr, inputLetterLength) {
  let shiftNums = [];
  let count = 0;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let keyWordLetterStr = getKeyString(keyStr, inputLetterLength);
  while (count < inputLetterLength) {
    let index = alphabet.indexOf(keyWordLetterStr[count]);
    shiftNums.push(index);
    count++;
  }
  return shiftNums;
}

function vigenereCipher(mainString, keyString) {
  let result = '';
  let inputLetterLength = mainString.match(/[a-z]/gi) ? mainString.match(/[a-z]/gi).length : 0;
  let shiftValues = getShiftValues(keyString, inputLetterLength);
  let shiftIndex = 0;
  for (let idx = 0; idx < mainString.length; idx++) {
    if (/[a-z]/gi.test(mainString[idx])) {
      let newLetter = getNewLetter(mainString[idx], shiftValues[shiftIndex]);
      result += newLetter;
      shiftIndex++;
    } else {
      result += mainString[idx];
    }
  }
  return result;
}

// Examples / Test Cases
// Happy Path
console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat")); 
// Bmnxmtpeqw dhz'x gh ar pbldal!

// Edge Cases
console.log(vigenereCipher("Pineapples don't go on pizzas!", "mEAt")); // --  different case keyword
// Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereCipher("!,.", "meat")); // -- string with only punctuation
// "!,."
console.log(vigenereCipher("", "meat")); // -- empty string
// ""
console.log(vigenereCipher('Dog', 'Rabbit')); // Uoh