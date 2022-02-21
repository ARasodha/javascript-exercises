const vehicleInventory = [
  { id: 1, make: 'Lamborghini', model: 'Aventador SVJ', year: '2021', price: '1978950'},
  {id: 2,  make: 'Ferrari', model: 'La Ferrari', year: '2020', price: '1750000'},
  {id: 3, make: 'Porsche', model: 'GT2 RS', year: '2019', price: '350000'},
  {id: 4, make: 'Ford', model: 'GT', year: '2020', price: '1000000'},
  {id: 5, make: 'McLaren', model: 'P1', year: '2018', price: '1200000'},
  {id: 6, make: 'Pagani', model: 'Huayra', year: '2017', price: '24000000'},
  {id: 7, make: 'Bugatti', model: 'Chiron', year: '2016', price: '15000000'}
];

function renderNavInfo(makeSelect, modelSelect, yearSelect, priceSelect) {
  vehicleInventory.forEach(car => {
    if (checkDuplicates(makeSelect, car, 'make')) {
      let makeOption = document.createElement("option");
      makeOption.setAttribute("value", car.make);
      makeOption.setAttribute("data-id", car.id);
      makeOption.textContent = car.make;
      makeSelect.appendChild(makeOption);
    }
    
    if (checkDuplicates(modelSelect, car, 'model')) {
      let modelOption = document.createElement('option');
      modelOption.setAttribute("value", car.model);
      modelOption.setAttribute("data-id", car.id);
      modelOption.textContent = car.model;
      modelSelect.appendChild(modelOption);
    }


    if (checkDuplicates(yearSelect, car, 'year')) {
      let yearOption = document.createElement("option");
      yearOption.setAttribute("value", car.year);
      yearOption.setAttribute("data-id", car.id);
      yearOption.textContent = car.year;
      yearSelect.appendChild(yearOption);
    }

    if (checkDuplicates(priceSelect, car, 'price')) {
      let priceOption = document.createElement("option");
      priceOption.setAttribute("value", car.price);
      priceOption.setAttribute("data-id", car.id);
      priceOption.textContent = car.price;
      priceSelect.appendChild(priceOption)
    }
  });
}

function checkDuplicates(selectType, car, name) {
  let options = Array.from(selectType.children);
  let duplicate = options.filter(op => op.value === car[name]);
  return duplicate.length === 0;
}

function renderCars(vehicles) {
  let carsSection = document.getElementById("cars");
  let carsTemplate = Handlebars.compile(document.getElementById("carsTemplate").innerHTML);
  carsSection.innerHTML = carsTemplate({vehicles});
}

function filterButton() {
  let filterBtn = document.getElementById("filter");
  filterBtn.addEventListener("click", event => {
    let selects = Array.from(document.querySelectorAll("select"));
    let values = selects.map(select => [select.name, select.value]);
    let filteredValues = values.filter(value => value[1] !== 'all' && value[1] !== 'any');

    let vehicles = vehicleInventory.filter((car, index) => {
      let count = 0;
      for (let idx = 0; idx < filteredValues.length; idx++) {
        if (car[filteredValues[idx][0]] === filteredValues[idx][1]) {
          count++;
        }
      }

      return count === filteredValues.length;
    });

    renderCars(vehicles)
  });
}

function handleMakeSmartSelect(makeSelect, modelSelect) {
  makeSelect.addEventListener("change", event => {
    let value = makeSelect.value;
    let vehicleObjectModels = vehicleInventory.filter(car => car.make === value).map(({model}) => model);
    let modelSelectOptions = Array.from(modelSelect.querySelectorAll("option"));
    modelSelectOptions.forEach(option => option.hidden = false);

    modelSelectOptions.forEach(option => {
      if (option.value === 'all') return;
      if (!vehicleObjectModels.includes(option.value)) {
        option.hidden = true;
      }
    });
  });
}


document.addEventListener("DOMContentLoaded", event => {
  let makeSelect = document.getElementById("make");
  let modelSelect = document.getElementById('model');
  let yearSelect = document.getElementById('year');
  let priceSelect = document.getElementById("price");

  renderNavInfo(makeSelect, modelSelect, yearSelect, priceSelect);
  renderCars(vehicleInventory);
  filterButton();
  handleMakeSmartSelect(makeSelect, modelSelect);
});

