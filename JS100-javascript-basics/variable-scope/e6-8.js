// E6 What's my value? (Part 6):
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b); // false - bc b should be logged in its local scope of the if statement.

// E7 What's my value? (Part 7):
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction(); //1

// E8 What's my value? (Part 8):
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b); //2
