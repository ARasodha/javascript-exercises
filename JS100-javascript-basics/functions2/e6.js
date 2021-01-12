// E6 Remove Last Char:
//MY SOLUTUION SLICE METHOD:
// function removeLastChar(string){
//    let removed = string.slice(0, string.length-1);
//    return removed;
// }
//BOOK SOLUTION SUBSTRING METHOD:
// function removeLastChar(string){
//   return string.substring(0, string.length-1);
// }
// console.log(removeLastChar('ciao!'));
//  // 'ciao'
// console.log(removeLastChar('hello')); // 'hell'

// //E7 ARROW FUNCTIONS (PART 1):
// const template = 'I VERB NOUN.';
//
// const sentence = (verb, noun) => template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);
//
// console.log(sentence('like', 'birds'));
// // logs: I like birds.

//E8 ARROW FUNCTIONS (PART 2):
// let initGame = () => {
//   return {
//     level: 1,
//     score: 0
//   }
// };
//
//
// let game = initGame();
//
// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);
