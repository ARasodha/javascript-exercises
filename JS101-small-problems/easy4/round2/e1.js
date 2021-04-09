// E1 How old is Teddy?:
function generateRandomAge(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomAge = generateRandomAge(120, 20);
console.log(`Teddy is ${randomAge} years old!`);
