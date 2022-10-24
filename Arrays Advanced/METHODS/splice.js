let cars = ["bmw", "mercedes", "audi", "lada"];


// Remove elements in the middle of  ARRAY
let removedCars = cars.splice(1,2); // [1] and [2] elemts are now cut AND CHANGES THE ORIGINAL ARRAY;

console.log(cars);
console.log(removedCars);

//Add elements in ARRAY
cars = ["bmw", "mercedes", "audi", "lada"]
cars.splice (1,2,"trabant"); // REMOVES [1] and [2] elements of an array and REPLACE it with the new STRING/NUMBER !;
console.log(cars);
