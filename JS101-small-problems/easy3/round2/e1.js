// E1 ddaaiillyy ddoouubbllee:
// My Solution:
function crunch(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx - 1] !== string[idx]) {
      result += string[idx];
    }
  }
  return result;
}

// LS Solution:
// function crunch(text) {
//   let index = 0;
//   let crunchText = '';
//
//   while (index <= text.length - 1) {
//     if (text[index] !== text[index + 1]) {
//       crunchText += text[index];
//     }
//     index += 1;
//   }
//   return crunchText;
// }
console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba"
console.log(crunch('ggggggggggggggg')); // "g"
console.log(crunch('a')); // "a"
console.log(crunch('')); // ""
