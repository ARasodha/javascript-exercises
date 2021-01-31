// E12 Matching Parentheses?:
// My Attempt:
// function isBalanced(string){
//   let stringArray = string.split('');
//   let countOpen = 0;
//   let countClose = 0;
//   for (let idx = 0; idx < stringArray.length; idx++){
//     if (stringArray[idx] === '('){
//       countOpen++;
//     } else if (stringArray[idx] === ')'){
//       countClose++;
//     }
//   }
//   return countOpen === countClose;
// }

// Book Solution:
function isBalanced(string) {
  let count = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === '(') {
      count++;
    } else if (string[idx] === ')') {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
