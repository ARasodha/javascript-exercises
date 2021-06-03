// E1 What is This?
let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName); // NaN
// Explanation: The context here is the global variable, therefore both the firstName and
// lastName that are being accessed are `undefined`. Any math operation on an undefined
// value returns NaN