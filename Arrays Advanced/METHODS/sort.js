let numbers = [2, 4, 1, 6, 3, 5];
let cars = ["bmw", "mercedes", "audi", "Lada"];

// Using default sort

let sortedNumbs = numbers.sort(); // Sort the array and MUTATE THE ARRAY: changes the array and return the changed array.

// Default sort limitation
console.log("---Default Sort Limitation---");
numbers = [2, 4, 1, 6, 2, 100];
cars = ["bmw", "mercedes", "audi", "Lada"];
numbers.sort();
cars.sort();
console.log(numbers);
console.log(cars);
// SORT NUMBERS
console.log("---Sort Numbers---");
numbers = [2, 4, 1, 6, 2, 100];
numbers.sort((a, b) => a - b); // b - a for descending order "reversed kinda";
//How it works !
 // if (a < b) { // a - b = negative
 //   return -1;
 // } else if (a > b) { // a - b = possitive 
 //   return 1;
 // } else { // a - b == zero
 //   return 0;
 // }
console.log(numbers);

console.log ("---Sort strings---");
cars = ["bmw", "mercedes", "audi", "Lada"];
cars.sort ((a,b)=> a.localeCompare(b));
console.log(cars);

