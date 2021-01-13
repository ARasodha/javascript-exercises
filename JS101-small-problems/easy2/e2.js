// E2 Greeting a user:
let rlSync = require('readline-sync');

function greet() {
  let name = rlSync.question('What is your name?\n');
  let lastChar = name[name.length - 1];
  if (lastChar === '!') {
    name = name.slice(0, -1)
    return `HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`;
  } else {

    return `Hello ${name}.`
  }
}
console.log(greet());
