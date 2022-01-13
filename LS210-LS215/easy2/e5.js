// Exercise 5: Right Triangles 
/*
input: number
output: string
Rules
- write a function that takes a positive integer, n, as an argument and logs a triangle whose
sides each have n stars
- the hypotenuse of the triangle (the diagonal side in the images below) should have one end at the 
lower-left of the triangle, and the other end at the upper-right
Examples / Test Cases
- 5 = 
    *
   **
  ***
 ****
*****
- 9
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
Data Structure
- string
Algorithm
- create spaceCount and initialize it to the input number - 1
- create starCount and initialize it to 1
- create a loop that runs while the starCount is less than or equal to the input number
  - on each round of iteration:
    - log a space repeated with spaceCount as the argument, concatenated to a star repeated with
    starCount as the argument
    - increment starCount by 1 on each round of iteration
    - decrement spaceCount by 1 on each round of iteration
*/
function triangle(stars) {
  let spaceCount = stars - 1;
  let starCount = 1;

  while (starCount <= stars) {
    console.log(' '.repeat(spaceCount) + '*'.repeat(starCount));
    starCount++;
    spaceCount--;
  }
}

// Test Cases
triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********