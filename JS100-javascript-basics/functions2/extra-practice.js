let array = [1, 2, 4, 5];

//FOREACH
array.forEach(value => {
  console.log(value); //log all values
})
// FILTER
let x = [];
array.filter(value => {
  if (value % 2 !==0){
    x.push(value); //log all odd values
  }
})
console.log(x);

// REDUCE
let arraySum = array.reduce((accumulator, currentValue) => {
  accumulator += currentValue;
  return accumulator;
})
console.log(arraySum); //12

// MAP
array.map((value, index) => {
  console.log(index + ': ' + value);
});

// INDEXOF
array.findIndex(value => {
  if (value < 3){
    console.log(value);
  }
})
