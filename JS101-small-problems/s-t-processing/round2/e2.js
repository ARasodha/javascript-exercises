/*E2 Delete Vowels:
Explicit Requirements
- Input: array with string(s)
- Output: array with string(s)
- Return an array with the same string values without the Vowels
Implicit Requirements (Questions):
- Will the arrays always have atleast 1 string in it- YES
- Do i return the same array or a new one - NEW

Data Structure
- Array, because it is the input and the Output

Algorithm
- create `VOWELS` array with all the vowels in it
- access each string and split it into characters and reconstruct it without
vowels.
- push each string back into array and return it
*/

function removeVowels(array) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  return array.map(string => {
    return string.split('').filter(char => {
      if (!VOWELS.includes(char.toLowerCase())) return char;
    }).join('')
  })
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz'])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white'])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ'])); // ["BC", "", "XYZ"]
