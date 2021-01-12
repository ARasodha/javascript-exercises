// E6 Three-way comparison:
// function compareByLength(string1, string2){
//   if (string1.length < string2.length){
//     console.log(-1);
//   } else if (string1.length > string2.length){
//     console.log(1);
//   } else {
//     console.log(0);
//   }
// }
// compareByLength('patience', 'perseverance'); // -1
// compareByLength('strength', 'dignity');      //  1
// compareByLength('humor', 'grace');           //  0

//E7 TRANSFORMATION:
// let string = 'Captain Ruby';
// let newString = string.replace('Ruby', 'JavaScript');
// console.log(newString);
// //ALTERNATIVE 1:
// console.log('Captain Ruby'.substring(0, 8) + 'JavaScript');
// //ALTERNATIVE 2:
// console.log('Captain Ruby'.split(' ')[0] + ' JavaScript');

// E8 INTERNALIZATION 1:
//  function greet(lang){
//   switch (lang){
//     case 'en' : return 'Hi!';
//     case 'fr' : return 'Salut!';
//     case 'pt' : return 'Olå!';
//     case 'de' : return 'Hallo!';
//     case 'sv' : return 'Hej!';
//     case 'af' : return 'Haai!';
//   }
// }
// console.log(greet('sv'));
