// Seeing Stars
/*
input: num
output: string
Rules / Requirements
- write a function that displays an 8-pointed star in a n x n grid, where n is an odd integer
that is supplied as an argument to the function
- the smallest star you need to handle is 7 x 7 grid (i.e., when n is 7)
Questions / Implicit Reqs
- will the input number always be provided? -- yes
Notes
- center row = input num length of stars
- next row up and down is always 3 stars (no spaces between) -- 2 side spaces
- following rows are 3 stars as well with 1 space between the stars (increment on each row
  up or down) -- 1 side space and final row is 0 side space

Data Structure
- string
- array -- iteration methods, HOF
Algorithm
- create middleRow and init to "*" repeat with input num as argument
- create topRows and init empty array
- create sideSpace and init to inputNumber - 3 / 2
- create center space and init to 0
- create a loop the iterates while sideSpace > 0 and on each round of iteration
  - create row and init to " " repeat with side space as an argument concatenated with "*"
  ' " repeat (center space), * repeat(center space), *repeat(center space)
  - push row to topRows 
  - decrement sideSpace by 1
  - increment centerSpace by 1
- once the loop has terminated:
- create bottomRows and init to a copy of topRow reverse
- iterate over topRows and log each row to the console
- log middleRow to the console
- iterate over bottomRows log bottomRows to the console
*/
function star(inputNum) {
  let middleRow = "*".repeat(inputNum);
  let bottomRows = [];
  let sideSpace = Math.floor((inputNum - 3) / 2);
  let centerSpace = 0;

  while (sideSpace >= 0) {
    let row = " ".repeat(sideSpace) + "*" + " ".repeat(centerSpace) + "*" + " ".repeat(centerSpace)
    + "*";
    bottomRows.push(row);
    sideSpace--;
    centerSpace++;
  }

  let topRows = bottomRows.slice().reverse();

  topRows.forEach(row => console.log(row));
  console.log(middleRow);
  bottomRows.forEach(row => console.log(row));
}


// Examples / Test Cases 
star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *