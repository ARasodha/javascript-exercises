/*E8 Tri-Angles:
Input: 3 individual numbers (representing angles)
Output: string
Rules:
- Right Angle - one angle is exactly 90 degrees
- Acute angle - all three angles are less than 90 degrees
- Obtuse - one angle is greater than 90
- Valid trianges ---> sum of the angles must be exactly 180 degrees and every
 angle must be greater than 0 degrees
- return whether the triangle is `right`, `obtuse`, `acute` or `invalid`
- can assume that all angles have integer values (no floating point values)
- may assume integers are degrees

Data Structure
- working with numbers

Algorithm
- check if the triangle is valid
  - create helper function `isInvalid`
    - check if sum of all angles is 180 degrees
    - check if each angle is greater than 0
- check if any angle is 90 degrees --> right
- check if all three angles < 90 --> Acute
- check if one angle is > 90 --> Obtuse
*/

function triangle(angle1, angle2, angle3) {
  if (isInvalid(angle1, angle2, angle3)) return 'invalid';
  let angles = [angle1, angle2, angle3];

  if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.every(angle => angle < 90)) {
    return 'acute';
  } else if (angles.some(angle => angle > 90)){
    return `obtuse`;
  }
}

function isInvalid(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3 !== 180 || angle1 <= 0 ||
  angle2 <= 0 || angle3 <= 0;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"));
