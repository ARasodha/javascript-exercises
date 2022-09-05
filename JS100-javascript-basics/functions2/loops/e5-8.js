// E5 LOOPING OVER ARRAY ELEMENTS:
let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length){
  console.log(array[index]);
  index++;
}

// E6 Continue:
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
for (let i = 0; i <= cities.length; i++){
  if (cities[i] === null || cities[i] === undefined){continue;}
   console.log(cities[i].length);
}

// E7 And on and on and on:
// OPTION A:
for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}

//OPTION B:
for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}

// E8 THATS ODD:
let i = 0;
while (i <= 40) {
  if (i % 2 === 1){
    console.log(i);
  }
  i++
}
