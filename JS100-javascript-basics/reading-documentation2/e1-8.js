// //E1: STYLE GUIDE:
// let iceCreamTaste = 'chocolate';
// let iceCreamDensity = 10;
//
// while (iceCreamDensity > 0);
// {let iceCreamTaste = 'chocolate';
// let iceCreamDensity = 10;
//
// while (iceCreamDensity > 0) {
//     console.log('Drip...');
//     iceCreamDensity -= 1;
// }
//
// console.log('The '+ iceCreamTaste +' ice cream melted.');
//   console.log('Drip...');
//   iceCreamDensity -= 1;
// }
//
// console.log('The ' + iceCreamTaste + ' ice cream melted.');
//
// //E2 DATA TYPES:
// //PRIMITIVE DATA TYPES:
// // - STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, BIGINT, SYMBOL
//
// //E3 LARGEST NUMBER:
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

//E4 ARITHMETIC OPERATOR PRECEDENCE:
//ANSWER:
// console.log((4 * 5) + ((3 ** 2) / 10));
//29  because ** > * and / > +       -BEDMAS

//E5: DATE:
// console.log(Date.now('Today'));

//E6: Which year is this?
// let today = new Date('March 4, 1998');
//
// let a = today.getYear();
// let b = today.getFullYear();
// console.log(a);
// console.log(b);

//E7: ARGUMENT SIGNATURE:
let array = ['Bob', 'Kevin', 'Stuart'];

// separator argument omitted
array.join();                  // 'Bob,Kevin,Stuart'

// single separator argument
array.join(', ');              // 'Bob, Kevin, Stuart'

// excess argument passed in
array.join(' and ', 'also');   // 'Bob and Kevin and Stuart'

//E8: STRING CONCATENTATION:
let string1 = 'Apples';
let string2 = 'Bananas';
// OPTION 1: STRING CONCATENTATION
console.log(string1 + ' ' + string2);
// OPTION 2: TEMPLATE LITERALS
console.log(`${string1} ${string2}`);
//OPTION 3: .CONCAT METHOD
console.log(string1.concat(' ', string2));
