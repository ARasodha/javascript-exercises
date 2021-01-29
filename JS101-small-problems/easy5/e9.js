// E9 How Many?:
function countOccurrences(elements) {
  let occurrences = {};
  for (let idx = 0; idx < elements.length; idx++) {
    occurrences[elements[idx]] = occurrences[elements[idx]] || 0;
    occurrences[elements[idx]]++;
  }
  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (item in occurrences) {
    console.log(item + ' => ' + occurrences[item]);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
];
console.log(countOccurrences(vehicles));

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
