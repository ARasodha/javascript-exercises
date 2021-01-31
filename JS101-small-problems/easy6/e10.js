// E10 Reverse It (Part 2):
// My Solution:
function reverseWords(string) {
  let reversed = [];
  let stringArray = string.split(' ');
  for (let idx = 0; idx < stringArray.length; idx++) {
    if (stringArray[idx].length >= 5) {
      reversed.push(stringArray[idx].split('').reverse().join(''));
    } else {
      reversed.push(stringArray[idx])
    }
  }
  return reversed.join(' ');
}

// Further Exploration (Using Map Method):
// function reverseWords(string) {
//   let stringArray = string.split(' ');
//   let reversed = stringArray.map(word => {
//     if (word.length >= 5) {
//       return word.split('').reverse().join('');
//     } else {
//       return word;
//     }
//   })
//   return reversed.join(' ');
// }

reverseWords('Professional'); // "lanoisseforP"
reverseWords('Walk around the block'); // "Walk dnuora the kcolb"
reverseWords('Launch School'); // "hcnuaL loohcS"
console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));
