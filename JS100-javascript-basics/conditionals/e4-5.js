// E4 Check the Weather, Part 1:
let weather = 'sunny'; // 'rainy', 'snowy'...
if (weather === 'sunny'){
  console.log('Its a beautiful day!');
} else if (weather === 'rainy'){
  console.log('Grab your umbrella!');
} else {
  console.log('Lets stay inside today.');
}

// E5 SWITCH:
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
    // break;
  case 'squirrel':
    console.log('nook nook');
    // break;
  case 'horse':
    console.log('neigh');
    // break;
  case 'bird':
    console.log('tweet tweet');
    // break;
  default:
    console.log('*cricket*');
}
// There if no break keyword so after the desired case, the following cases will
// Also be logged // 'neigh', 'tweet tweet', 'bird'
