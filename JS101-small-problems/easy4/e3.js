// E3 When Will I Retire?:
let rlSync = require('readline-sync');

function retirement() {
  let age = Number(rlSync.question('What is your age?\n'));
  let retireAge = Number(rlSync.question('At what age would you like to retire?\n'));
  let date = new Date();
  let year = date.getFullYear();
  let retireYear = year - age + retireAge;
  let yearsTillRetire = retireYear - year;


  return `It is ${year}. You will retire in ${retireYear}.
  You have only ${yearsTillRetire} years of work to go!`;
}

console.log(retirement());
