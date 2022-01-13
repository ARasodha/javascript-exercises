// Exercise 3: Tri-Angles
/*
input: 3 numbers
output: string
Rules
- a triangle is classified as follows:
  - right: one angle is a right angle (exactly 90 degrees)
  - acute: all three angles are less than 90 degrees
  - obtuse: one angle is greater than 90 degrees
- valid triangle:
  - the sum of the angles must be exactly 180 degrees
  - every angle must be greater than 0 
  - if either of these conditions are not satisfied, the triangle is invalid
- write a function that takes the three angles of a triangle as arguments and returns one of the
following four strings representing the triangle's classification: "right", "acute", "obtuse" or
"invalid"
- you may assume that all angles have integer values, so you do not have to worry about floating
point errors
- you may also assume that the arguments are in degrees
Examples / Test Cases
- 60, 70, 50 => "acute"
- 30, 90, 60 => "right"
- 120, 50, 10 => "obtuse"
- 0, 90, 90 => "invalid"
- 50, 50, 50 => "invalid"
Data Structure
- array
Algorithm
- create angles array and insert all three argument angles
- create helper function `isValid` and pass the angles array as an argument
  - if all angles are greater than 0 and the sum of all angles equals 180 return true
- if the isValid function returns valid, return "invalid"
- if one angle is equal to 90 degrees, return "right"
- if one angle is greater than 90 degrees, return "obtuse"
- if all angles are less than 90 degrees, return "acute"
*/
function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  if (!isValid(angles)) return "invalid";

  if (angles.some(angle => angle === 90)) {
    return "right";
  } else if (angles.some(angle => angle > 90)) {
    return "obtuse";
  } else {
    return "acute";
  }
}

function isValid(angles) {
  return angles.every(angle => angle > 0) && angles.reduce((sum, angle) => sum + angle, 0) === 180;
}

// Test Cases
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"