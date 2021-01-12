// VARIABLE SCOPE
// E1 What's my value? (Part 1):
// console.log(greeting);
//
// const greeting = 'Hello world!';
// CONSOLE WILL LOG UNDEFINED
//BECAUSE ITS 'VAR' THE ABOVE CODE BEHAVES LIKE THIS::
// var greeting;
//
// console.log(greeting);
//
// greeting = 'Hello world!'
// UNDEFINED

//E2 What's my value? (Part 2):
// console.log(greeting);
//
// let greeting = 'Hello world!';
//REFERENCE ERROR: cannot access 'greeting' before initialization

//E3 What's my value? (Part 3):
// if (true) {
//   let myValue = 20;
// }
//
// console.log(myValue); // REFERENCE ERROR: myValue is not defined

//E4 What's my value? (Part 4):
// function myFunction() {
//   let a = 1;
//
//   if (true) {
//     console.log(a);
//   }
// }
// myFunction(); // 1

//E5 What's my value? (Part 5):
// function myFunction() {
//   let a = 1;
//
//   if (true) {
//     console.log(a);
//     let a = 2;
//     console.log(a);
//   }
// }
// myFunction(); //  REFERENCE ERROR: cannot access 'a' before initialization
              //Neither will log bc its the same variable being initialized in
              // both scopes. The local scope takes over the if statement block
              //and crashes bc its called before being declared
