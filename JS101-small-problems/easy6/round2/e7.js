// E7 Name Swapping:
function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts')); // "Roberts, Joe"

// Further Exploration:
function swapName2(name) {
  let nameArray = name.split(' ');
  return nameArray.pop() + ', ' + nameArray.join(' ');
}

console.log(swapName2('Karl Oskar Henriksson Ragvals')); // "Ragvals, Karl Oskar Henriksson"
console.log(swapName2('Joe Roberts'));
