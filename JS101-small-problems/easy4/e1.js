// E1 How Old is Teddy?:
function teddysAge(max, min) {
  let age = Math.floor(Math.random() * (max - min) + min);
  return `Teddy is ${age} years old!`;
}
console.log(teddysAge(120, 20));
