// E6 The End is Near but Not Here:
function penultimate(string) {
  let array = string.split(' ')
  return array[array.length - 2];
}
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true


//Further Exploration:
// let string = 'I am going to the grocery store.';
// let string2 = 'Hello';
//
// function middleWord(string){
//
//   let array = string.split(' ');
//   if (array.length > 2) {
//     let middle = (array.length - 1) / 2;
//     let middleWord = array[middle];
//     return 'The middle word is ' + middleWord + '.';
//   } else {
//     return 'Enter a string longer than 2 words.'
//   }
// }


// console.log(middleWord(string))
// console.log(middleWord(string2));;
