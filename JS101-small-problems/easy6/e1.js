// E1 Double Char (Part 1):
// My Solution:
function repeater(string) {
  let stringArray = string.split('');
  let doubled = stringArray.map(char => [char, char]);
  doubled = String(doubled.join(''));
  let results = '';
  for (idx = 0; idx < doubled.length; idx++) {
    if (doubled.charAt(idx) !== ',') {
      results += doubled.charAt(idx);
    }
  }
  return results;
}

// Book Solution #1:
// function repeater(string){
//   let repeatedString = [];
//   for (let idx = 0; idx < string.length; idx++){
//     repeatedString.push(string[idx], string[idx]);
//   }
//   return repeatedString.join('');
// }

//Book Solution #2 (Shorter):
// function repeater(string){
//   return string.split('').map(char => char + char).join('');
// }
repeater('Hello'); // "HHeelllloo"
repeater('Good job!'); // "GGoooodd  jjoobb!!"
repeater(''); // ""
console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));
