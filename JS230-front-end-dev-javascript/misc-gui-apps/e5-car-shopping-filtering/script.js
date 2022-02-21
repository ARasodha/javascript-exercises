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
    let makeOptions = Array.from(makeSelect.children);
    let duplicateMake = makeOptions.filter(op => op.value === car.make);
    if (duplicateMake.length === 0) {
      let makeOption = document.createElement("option");
      makeOption.setAttribute("value", car.make);
      makeOption.setAttribute("data-id", car.id);
      makeOption.textContent = car.make;
      makeSelect.appendChild(makeOption);
    }
    
    let modelOptions = Array.from(makeSelect.children);
    let duplicateModel = modelOptions.filter(op => op.value === car.model);
    if (duplicateModel.length === 0) {
      let modelOption = document.createElement('option');
      modelOption.setAttribute("value", car.model);
      modelOption.setAttribute("data-id", car.id);
      modelOption.textContent = car.model;
      modelSelect.appendChild(modelOption);
    }

    let yearOptions = Array.from(yearSelect.children);
    let duplicateYear = yearOptions.filter(op => op.value === car.year);
    if (duplicateYear.length === 0) {
      let yearOption = document.createElement("option");
      yearOption.setAttribute("value", car.year);
      yearOption.setAttribute("data-id", car.id);
      yearOption.textContent = car.year;
      yearSelect.appendChild(yearOption);
    }

    let priceOptions = Array.from(yearSelect.children);
    let duplicatePrice = priceOptions.filter(op => op.value === car.price);
    if (duplicatePrice.length === 0) {
      let priceOption = document.createElement("option");
      priceOption.setAttribute("value", car.price);
      priceOption.setAttribute("data-id", car.id);
      priceOption.textContent = car.price;
      priceSelect.appendChild(priceOption)
    }
  });
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

document.addEventListener("DOMContentLoaded", event => {
  let makeSelect = document.getElementById("make");
  let modelSelect = document.getElementById('model');
  let yearSelect = document.getElementById('year');
  let priceSelect = document.getElementById("price");

  renderNavInfo(makeSelect, modelSelect, yearSelect, priceSelect);
  renderCars(vehicleInventory);
  filterButton();
});

