// E1 GREET 1:
// function greet(greeting = 'Hello') {
//   console.log(greeting + ', world!');
// }
//
// greet('Salutations'); // logs: Salutations, world!
//
// greet();              // logs: undefined, world!
                      // should log: Hello, world!
//Set a default paramter

// E2 GREET 2:
// function greet(){
//   console.log(greeting() + ', ' + recipient() + '!');
// }
// greet();                                // logs: Hello, world!
// greet('Salutations');                   // logs: Salutations, world!
// greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!
//
// //E3 GREET 3:
// function greeting() {
//   return 'Good morning';
// }
//
// function recipient() {
//   return 'Launch School';
// }

//WORKS WITH E2


//E4 BMI CALC:
//   function calculateBMI(heightInCm, weightInKg){
//   let heightInM = heightInCm / 100;
//   let result = weightInKg / heightInM**2;
//   return result.toFixed(2);
// }
// console.log(calculateBMI(180, 80)); //'24.69'
//


// //E5 Calculate Cat Age MY SOLUTION (SUCCESSFUL FOR LOOP):
// function catAge(human){
//   let count = 0;
//   for (let i = 0; i < human; i++){
//     if (i === 0 ){
//       count += 15;
//     } else if ( i === 1){
//       count += 9;
//     } else if (i > 0 && i > 1) {
//       count +=4;
//     }
//   }
//   return count;

// // BOOK ALTERNATIVE SOLUTION SWITCH STATEMENT:
// function catAge (humanYears){
//   switch (humanYears){
//     case 0:
//       return 0;
//     case 1:
//       return 15;
//     case 2:
//       return 24;
//     default:
//       return 24 + (humanYears - 2) * 4;
//   }
// }
//
// console.log(catAge(0)); // 0
// console.log(catAge(1)); // 15
// console.log(catAge(2)); // 24
// console.log(catAge(3)); // 28
// console.log(catAge(4)); // 32




//
