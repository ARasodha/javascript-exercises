// E9 What's my value? (Part 9):
const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a); // TYPE ERROR: Reassignment to a const.

// E10 What's my value? (Part 10):
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a); // Jane Doe
