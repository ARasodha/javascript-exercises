// E3 Tri-Angles:
// My Solution:
function triangle(angle1, angle2, angle3) {
  if (isValid(angle1, angle2, angle3)) {
    if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
      return 'acute';
    } else if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
      return 'obtuse';
    } else if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
      return 'right'
    }
  } else {
    return 'invalid';
  }
}

function isValid(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3 === 180 &&
    Math.min(angle1, angle2, angle3) > 0;
}

// Lesson Solution:
function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3];
  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return 'invalid';
  }
}

function isValid(angles) {
  let totalAngle = angles.reduce((total, val) => total + val);
  let isNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && isNonZero;
}

function getTriangleType(angles) {
  if (angles.some(hasRightAngle)) {
    return 'right';
  } else if (angles.every(isAcuteAngle)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

function hasRightAngle(angle) {
  return angle === 90;
}

function isAcuteAngle(angle) {
  return angle < 90;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
