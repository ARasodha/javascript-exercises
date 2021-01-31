// E7 Name Swapping:
// My Solution:
function swapName(name) {
  return name.split(' ').reverse().join(', ');
}
swapName('Joe Roberts'); // "Roberts, Joe"
console.log(swapName('Joe Roberts'));

// Further Exploration:
function swapName2(name) {
  let nameArray = name.split(' ');
  let lastName = nameArray.pop();
  return lastName + ', ' + nameArray.join(' ');
}
swapName2('Karl Oskar Henriksson Ragvals'); // "Ragvals, Karl Oskar Henriksson"
console.log(swapName2('Karl Oskar Henriksson Ragvals'));
