// E6 Refactoring Vehicles:
class Vehicles {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicles {
  getWheels() {
    return 4;
  }
}


class Motorcycle extends Vehicles {
  getWheels() {
    return 2;
  }
}


class Truck extends Vehicles {
  getWheels() {
    return 6;
  }
}
