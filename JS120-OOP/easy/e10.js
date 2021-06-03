// E10 Pet Shelter:
class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.adopted = [];
  }

  numberOfPets() {
    return this.adopted.length;
  }
}

class Shelter {
  constructor() {
    this.adopters = [];
  }

  adopt(owner, pet) {
    if (!this.adopters.includes(owner)) this.adopters.push(owner);
    owner.adopted.push(pet)
  }
  
  printAdoptions() {
    this.adopters.forEach(owner => {
      console.log(owner.name + ' has adopted the following pets: ');
      owner.adopted.forEach(pet => {
        console.log(`a ${pet.species} named ${pet.name}`);
      })
      console.log('');
    })
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');


let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
