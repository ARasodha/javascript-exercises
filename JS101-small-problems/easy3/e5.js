// E5 Right Triangles:
function triangle(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    stars++;
    spaces--;
    height--;
  }
}

triangle(5);
triangle(9);
