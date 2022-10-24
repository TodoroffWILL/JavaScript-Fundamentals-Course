let cars = ["bmw", "mercedes", "audi", "lada"];

let firstCars = cars.slice(0, 2);
console.log(cars); // ORIGINAL ARRAY DOESNT CHANGE !!!;
console.log(firstCars); //FIRST 2 CREATES NEW ARRAY WITH THE SLICED PEACES;

let lastCars = cars.slice(2); // LAST 2 CARS WITHOUT "END" CUTS TILL THE END OF ARRAY;
let carsCopy = cars.slice(); // COPYING THE ARRAY AND MAKING A NEW EXACT ONE;
console.log(lastCars);
console.log(carsCopy);

let lastCar = cars.slice(-1); //TAKES THE LAST ELEMENT OF ARRAY AND MAKING IT ARRAY ! NOT STRING !!!
console.log(lastCar);

