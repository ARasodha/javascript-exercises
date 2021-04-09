// E9 How Many?:
function countOccurrences(array) {
  let occurrences = {};

  for (let idx = 0; idx < array.length; idx++) {
    occurrences[array[idx]] = occurrences[array[idx]] || 0
    occurrences[array[idx]]++;
  }

  for (let vehicle in occurrences) {
    console.log(`${vehicle} => ${occurrences[vehicle]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
];

countOccurrences(vehicles);
