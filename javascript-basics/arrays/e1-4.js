//ARRAYS
//E1 FIRST ELEMENT:
// function first(array){
//   if (array.length === 0){
//     console.log('Array is empty.');
//   } else {
//     return array[0];
//   }
//
// }
// console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth');
// console.log(first([]));

//E2 LAST ELEMENT:
// function last(array){
//   return array[array.length-1];
// }
// console.log(last(['Earth', 'Moon', 'Mars'])); // 'Mars';
// console.log(last([])); // undefined

//E3 Add + Delete:
// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
// let remove = energy.shift()
// energy.push('geothermal');
// console.log(energy);
// //GOT CARRIED AWAY AND PRACTICED LAST QUESTIONS ALGO
// let caps = [];
// for (let i = 0; i < energy.length; i++){
//   let x = energy[i];
//   caps.push(x[0].toUpperCase() + x.slice(1));
//
// }
// console.log(caps.join(' ')); //Solar Wind Tidal Fusion Geothermal

// // E4: Alphabet
// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// let split = alphabet.split('');
// console.log(split);
