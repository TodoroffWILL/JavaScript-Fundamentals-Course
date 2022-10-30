class Dog {
  constructor(dogName, dogBreed) {
    this.name = dogName;
    this.dogBreed = dogBreed;
  }
  bark() {
    console.log(`${this.name}: wof wof`);
  }
}

let firstDog = new Dog("Sharo", "Nemska Ovcharka");
let secondDog = new Dog("Balkan", "BulgarianSheperd");

firstDog.bark();
secondDog.bark();
