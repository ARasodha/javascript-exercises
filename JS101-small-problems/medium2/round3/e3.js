// Ex6 Tri-Angles:
/*
Input: 3 numbers
Output: string
Rules
- take the three arguments that represent a different angle on a triangle and
return the type of triangle it is
- 3 types of triangles
  - right: one angle is a right angle (exactly 90 degrees)
  - acute: all three anlges are less than 90 degrees
  - obtuse: one angle is greater than 90 degrees
- to be a valid triangles
  - the sum of the angles must be exactly 180 degrees
  - every angle must be greater than 0
  - if either of these are not satisifed return the string 'invalid'
- may assume that all angles have integer values
- arguments are in degrees

Algorithm
- create an 'isValid' helper function
  - make sure the sum of the angles is greater than 180
  - every angle must be greater than 0
*/

function isValid(angles) {
  return angles.reduce((accum, val) => accum + val, 0) === 180 &&
  angles.every(angle => angle > 0);
}

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  if (!isValid(angles)) return 'invalid';

  if (angles.filter(angle => angle === 90).length === 1) {
    return 'right';
  } else if (angles.every(angle => angle < 90)) {
    return 'acute';
  } else if (angles.filter(angle => angle > 90).length === 1) {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

// console.log(triangle(90, 60, 0));
