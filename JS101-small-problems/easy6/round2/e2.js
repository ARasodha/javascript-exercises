// E2 Double Char (Part 2):
// My Solution:
function doubleConsonants(string) {
  const EXCEPTIONS = ['a', 'e', 'i', 'o', 'u', ' ', '.', '!'];

  return string.split('').map(char => {
    if (EXCEPTIONS.includes(char) || !isLetter(char.toLowerCase())) {
      return char;
    } else {
      return char + char;
    }
  }).join('')
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

// LS Solution:
// function doubleConsonants(string) {
//   const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
//                   'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
//   let stringArray = [];
//
//   for (let idx = 0; idx < string.length; idx++) {
//     stringArray.push(string[idx]);
//     if (CONSONANTS.indexOf(string[idx].toLowerCase()) >= 0) {
//       stringArray.push(string[idx]);
//     }
//   }
//
//   return stringArray.join('');
// }

console.log(doubleConsonants('String')); // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th')); // "JJullyy 4tthh"
console.log(doubleConsonants('')); // ""
