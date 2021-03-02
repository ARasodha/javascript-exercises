// // E2 Triangle Sides:
// My Solution:
function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3];
  let [longest, middle, shortest] = sides.sort((a, b) => b - a);
  if (shortest === 0 || middle + shortest <= longest) {
    return 'invalid';
  } else if (middle === shortest && middle === longest) {
    return 'eqilateral';
  } else if (middle !== shortest && shortest !== longest && longest !== middle) {
    return 'scalene';
  } else if (middle === longest && middle !== shortest ||
    shortest === longest && shortes !== middle || middle === shortest && middle !==
    longest) {
    return 'isosceles';
  }
}

// Lesson Solution:
function triangle(side1, side2, side3) {
  let perimeter = side1 + side2 + side3;
  let longest = Math.max(side1, side2, side3);
  let shortest = Math.min(side1, side2, side3);
  let middle = perimeter - longest - shortest;

  if (isValid(shortest, middle, longest)) {
    return getTriangleType(shortest, middle, longest);
  } else {
    return 'Inalid';
  }
}

function isValid(shortest, middle, longest) {
  return shortest > 0 && shortest + middle > longest;
}

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    return 'isosceles';
  } else if (side1 !== side2 && side2 !== side3) {
    return 'scalene';
  }
}
console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
