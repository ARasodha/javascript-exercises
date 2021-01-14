// E1 ddaaiillyy ddoouubbllee:
// My bSolution§:
function crunch(string) {
  let lettersArray = string.split('');
  let crunchedArray = [];
  lettersArray.forEach(letter => {
    if (crunchedArray[crunchedArray.length - 1] !== letter) {
      crunchedArray.push(letter);;
    }
  })
  return crunchedArray.join('');
}

// Book Solution:
// function crunch(string){
//   let index = 0;
//   let crunchString = '';
//   while (index <= string.length-1){
//     if (string[index] !== string[index + 1]){
//       crunchString += string[index];
//     }
//     index+=1;
//   }
//   return crunchString;
// }

crunch('ddaaiillyy ddoouubbllee'); // "daily double"
crunch('4444abcabccba'); // "4abcabcba"
crunch('ggggggggggggggg'); // "g"
crunch('a'); // "a"
crunch(''); // ""h()

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));
