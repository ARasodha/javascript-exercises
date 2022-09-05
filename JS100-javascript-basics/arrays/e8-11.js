// E8 TYPE:
let input = [0, 1, 0, 0, 1];
let x = 'I am going to the gym.';
function filter(input) {
  // Is input an array?
  console.log(Array.isArray(input)); // TRUE
}

filter(input); // TRUE
filter(x); // FALSE
console.log(typeof input); // OBJECT  - THIS IS WHY WE USE ARRAY.ISARRAY()

// E9 TRAVEL:
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(search, array){
  for (let i = 0; i < array.length; i++){
    if (array[i] === search){
      return true;
    }
  }
  return false;
}

// INDEX OF ALTERNATIVE OPTION:
function contains (search, array){
  return array.indexOf(search) >=0;
}
console.log(contains('Barcelona', destinations));  // true
console.log(contains('Nashville', destinations)); // false

//E10 PASSCODE:
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'
let joint = passcode.join('-');
console.log(joint);

//E11 Checking items off the grocery list:
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0){
  let checkedItem = groceryList.shift();
  console.log(checkedItem);
  console.log(groceryList);
}

console.log(groceryList);
// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

// groceryList; // []
