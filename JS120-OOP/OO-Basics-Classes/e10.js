// E10 Generic Greeting (part 2):
class Cat {
  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }

  constructor(name) {
    this.name = name;
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting();