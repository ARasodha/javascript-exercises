// E2 Double Char (Part 2):
// My Solution:
function doubleConsonants(string) {
  let result = [];
  let vowels = ['a', 'e', 'i', 'o', 'u']
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  for (let idx = 0; idx < string.length; idx++) {
    if (vowels.includes(string[idx]) || (isNumber(string[idx])) || format.test(string[idx]) || string[idx] === ' ') {
      result.push(string[idx])
    } else if (isLetter(string[idx]) || string[idx] !== ' ') {
      result.push(string[idx], string[idx])
    }
  }
  return result.join('');
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}


function isLetter(char) {
  return char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z';
}

// Book Solution:
// function doubleConsonants(string) {
//   const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
//     'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'
//   ];
//   let stringArray = [];
//   for (let idx = 0; idx < string.length; idx++) {
//     stringArray.push(string[idx]);
//     if (CONSONANTS.indexOf(string[idx].toLowerCase()) >= 0) {
//       stringArray.push(string[idx]);
//     }
//   }
//   return stringArray.join('');
// }
console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));


// doubleConsonants('String');          // "SSttrrinngg"
// doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
// doubleConsonants('July 4th');        // "JJullyy 4tthh"
// doubleConsonants('');                // ""
