// E5 Dot Notation vs Bracket Notation:
//SNIPPET 1 :
// let ocean = {};
// let prefix = 'Indian';
//
// ocean.prefix = 'Pacific';
// console.log(ocean); //  {prefix: 'Pacific'}

// SNIPPET 2 :
// let ocean = {};
// let prefix = 'Indian';
//
// ocean[prefix] = 'Pacific';
//
// console.log(ocean); //  {'Indian': 'Pacific'}  //bc there are not quote around prefix

//E6 IS IT TRUE?
// let obj = {
//   num: 42,
//   'property name': 'string value',
//   true: false,
//   fun: function() {
//     console.log('Harr Harr!');
//   },
// };
//
// for (let prop in obj) {
//   if (prop === true) {
//     console.log("It's true!");
//   }
// }
//what i thought - IT WONT LOG TRUE BECAUSE THE VALUE OF TRUE IS SET TO FALSE
//reason - ALL KEYS ARE STRINGS, SO 'TRUE' IN THE IF STATEMENT NEEDED QUOTES
