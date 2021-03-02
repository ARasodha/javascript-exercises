// E7 Bubble Sort:
function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let idx = 1; idx < array.length; idx++) {
      if (array[idx - 1] <= array[idx]) continue;
      [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
      swapped = true;
    }
    if (!swapped) break;
  }
  return array;
}

let array1 = [5, 3];
console.log(bubbleSort(array1));
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
console.log(bubbleSort(array2));
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(bubbleSort(array3));
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
