// STRINGS
// E1 LENGTH:
// let string = "These aren't the droids you're looking for.";
// console.log(string.length);
//
// E2 ALL CAPS:
// let string = 'confetti floating everywhere';
// console.log(string.toUpperCase()); //UPPERCASE STRINGS
// console.log(string); //DOES NOT MUTATE THE ORIGIONAL
//
// E3 REPEAT:
//  function repeat(times, string){
//    let repetitionString = '';
//    while (times > 0){
//      repetitionString += string;
//      times --;
//    }
//    return repetitionString;
//  }
// console.log(repeat(3, 'ha')); // 'hahaha'
//
// E4 MULTI-LINE STRING:
// // OPTION 1:
// let multilineString = `A pirate I was meant to be!
// Trim the sails and roam the sea!`;
// console.log(multilineString);
// //OPTION 2:
// let multilineString2 = '\tGlory\nGlory\nManchester\nUnited!';
// console.log(multilineString2); // /t = tab  and  \n = new line
//
// E5 CASE-INSENSITIVE EQUALITY:
// let string1 = 'Polar Bear';
// let string2 = 'Polar bear';
// let string3 = 'Penguin';
//
// console.log(string1.toLowerCase() === string2.toLowerCase()); //true
// console.log(string1.toLowerCase() === string3.toLowerCase()); //false
// A very simple way to check case-insensitive equality of strings is
// to first turn them to all lower or upper case and then compare them.
//
//
// E6 Contains Character:
// MY SOLUTION: (SUCESSFULL W/ REGEX)
// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
// let isX = /x/.test(byteSequence);
// console.log(isX); // true
// BOOK SOLUTION W/ INCLUDES METHOD:
// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
// console.log(byteSequence.includes('x'));
//
// E7 Blank? Version 1:
// MY SOLUTION: (SUCCESSFULL)
// let x = '  ';
// function isBlank(string){
//   let check = string.slice(0,1);
//   if (check === ''){
//     return true;
//   } else {
//     return false;
//   }
// }
//
// BOOK SOLUTION:
// function isBlank(string) {
//   return string.length === 0;
// }
// console.log(isBlank('mars'));
// console.log(isBlank('  '));
// console.log(isBlank(''));
// let x = '  ';
// console.log(x.length); // NOT SURE WHY THEY USED THAT SOLUTION AND HOW IT WORKED
// SINCE X HAS THE LENGTH OF 2 BUT ACTS LIKE IT IS 0 IN THE BOOK SOLUTION ALGO
