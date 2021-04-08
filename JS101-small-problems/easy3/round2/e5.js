// E5 Right Triangles:
// My Solution:
function triangle(stars) {
  for (let idx = 1; idx <= stars; idx++) {
    console.log(' '.repeat(stars - idx) + '*'.repeat(idx));
  }
}

// LS Solution:
function triangle(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}

triangle(5);
triangle(9);
