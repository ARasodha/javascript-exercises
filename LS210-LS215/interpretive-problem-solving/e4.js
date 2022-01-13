// Ceasar Cipher
/*
input: string, number
output: string
Rules / Requirements
- write a function that implements the Caesar Cipher 
- the Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a 
message can be transmitted securely
- it is a substitution cipher in which each letter in a plaintext is substituted by the letter
located a given number of positions away in the alphabet 
- for example: if the letter 'A' is right-shifted by 3 positions, it will be substituted with the
letter 'D' 
- this shift value is often referred to as the key
- the encrypted plaintext (cipher text) can be decoded using this key
- the Caesar Cipher only encrypts letters (including both lower and uppercase)
- any other character is left as is
- the substituted letters are in the same letter case as the original letter
- if the key value for shifting exceeds the length of the alphabet, it wraps around from the 
beginning
Questions / Implicit Reqs
- will the input string always be provided? -- yes
- will the input string ever be an empty string? -- no
Examples / Test Cases
// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
Data Structure
- string -- regex
- array -- iteration methods, HOF
Algorithm
1. create chars and init to the input string split into an array of characters
- create result empty string
- iterate over each character and pass it to isLetter -- takes char string and returns boolean
  - if it is a letter: pass the letter to substitute helper function and append its return value
  to result
  - otherwise: append the character to result

2. create isLetter HF - takes a string and returns a boolean
- use regex to determine if the character is a letter, return boolean

3. create substitute HF - takes a string (letter) and key (num) and returns a string char (letter),
shifted in the alphabet according to key
- create alphabet string with all letters lowercase in the alphabet 
- create index and init it to the input string (lowercase) and its index in the alphabet string
- create newIndex and init it to index + key
- while (newIndex > 25) index -= alphabet.length
- return alphabet at new index

4. create getCase takes two strings - original char string and new char string
  - if the original char string is equal to itself lowercased, return it as is
  - otherwise return it uppercased
*/
function getCase(oldChar, newChar) {
  return oldChar === oldChar.toLowerCase() ? newChar : newChar.toUpperCase();
}

function substitute(char, key) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let index = alphabet.indexOf(char.toLowerCase());
  let newIndex = index + key;
  while (newIndex > 25) {
    newIndex -= 26;
  }

  return alphabet[newIndex];
}

function isLetter(char) {
  return /[a-z]/gi.test(char);
}

function caesarEncrypt(string, key) {
  let chars = string.split('');
  let result = "";
  chars.forEach(char => {
    if (isLetter(char)) {
      result += getCase(char, substitute(char, key));
    } else {
      result += char;
    }
  });

  return result;
}


// Test Cases
// Happy Path
// simple shift
console.log(caesarEncrypt('A', 3));       // "D"
console.log(caesarEncrypt('A', 0));       // "A"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// Edge Cases
console.log(caesarEncrypt('.!,', 3));       // ""  .!, -- all non letters
console.log(caesarEncrypt('3A1', 3));       // "3D1" -- numbers
