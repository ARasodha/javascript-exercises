// E6 Selection Filters:
// My Solution:
const animalClassifications = {
  Vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  Mammal: ['Bear', 'Whale'],
  Bird: ['Ostrich'],
}

let classifications = document.querySelector('#animal-classifications');
let animals = document.getElementById('animals');

classifications.addEventListener('change', event => {
  let classification = event.target.value;
  
  if (classification === 'Classifications') return;

  let animalOptions = Array.from(document.querySelectorAll('#animals > option'));

  let first = true;
  animalOptions.forEach((animal, idx) => {
    if (animalClassifications[classification].includes(animal.value)) {
      animal.classList.remove('hide');

      if (first) {
        animal.selected = true;
        first = false;
      }
    } else {
      animal.classList.add('hide');
    }
  });
});

animals.addEventListener('change', event => {
  let animal = event.target.value;
  let animalClasses = Array.from(document.querySelectorAll('#animal-classifications > option'))
                      .filter(animal => animal.value !== 'Classifications');

  let first = true;
  animalClasses.forEach((animalClass) => {
    if (animalClassifications[animalClass.value].includes(animal)) {
      animalClass.classList.remove('hide');
      if (first) {
        animalClass.selected = true;
        first = false;
      }
    } else {
      animalClass.classList.add('hide');
    }
  })
})

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', event => {
  event.preventDefault();
  Array.from(classifications).forEach(classification => classification.classList.remove('hide'));
  Array.from(animals).forEach(animal => animal.classList.remove('hide'));
  classifications[0].selected = true;
  animals[0].selected = true;
});

// Lesson Solution:
const linkedOptions = {
  classifications: {
    Vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
    'Cold-blooded': ['Salmon', 'Turtle'],
    Mammal: ['Bear', 'Whale'],
    Bird: ['Ostrich'],
    Classifications: ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  },
  animals: {
    Bear: ['Vertebrate', 'Warm-blooded', 'Mammal'],
    Turtle: ['Vertebrate', 'Cold-blooded'],
    Whale: ['Vertebrate', 'Warm-blooded', 'Mammal'],
    Salmon: ['Vertebrate', 'Cold-blooded'],
    Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
    Animals: ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'],
  },
};

const animalClassifications = document.querySelector('#animal-classifications');
const animals = document.querySelector('#animals');
const clearFiltersBtn = document.querySelector('#clear');
let animalClassificationsValue;
let animalsValue;

function setOptions({options}, filters) {
  options.length = 0;
  filters.forEach((value, index) => {
    options[index] = new Option(value)
  });å
}

function setDefault(event) {
  event.preventDefault();
  setOptions(animalClassifications, ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird']);
  setOptions(animals,  ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich']);  
}

animalClassifications.addEventListener('change', event => {
  animalClassificationsValue = animalClassifications.options[animalClassifications.selectedIndex].value
  setOptions(animals, linkedOptions['classifications'][animalClassificationsValue])
});

animals.addEventListener('change', event => {
  animalsValue = animals.options[animals.selectedIndex].value
  setOptions(animalClassifications, linkedOptions['animals'][animalsValue])
});

clearFiltersBtn.addEventListener('click', setDefault);

