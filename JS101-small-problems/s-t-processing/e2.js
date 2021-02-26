// E2 Delete Vowels:
// My Solution:
function removeVowels(stringArray) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStringArray = [];
  stringArray.forEach(word => {
    let str = '';
    for (let idx = 0; idx < word.length; idx++) {
      if (!vowels.includes(word[idx].toLowerCase())) {
        str += word[idx];
      }
    }
    newStringArray.push(str);
  })
  return newStringArray;
}

// Lesson Solution 1:
function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}

// Lesson Solution 2:
function removeVowels(stringArray) {
  return stringArray.map(string => {
    let chars = string.split('');
    let removedVowels = deleteVowels(chars);
    return removedVowels.join('');
  });
}

function deleteVowels(array) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return array.map(char => {
    if (VOWELS.indexOf(char) >= 0) {
      return '';
    } else {
      return char;
    }
  });
}
console.log(deleteVowels('abcdefghi'.split('')));
// removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
// removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));
