let numbers = [2, 5, 6, 7, 11, 8, 12];

// Filtering even or odd numbers !
let evenNum = numbers.filter((x) => x % 2 === 0);
let oddNum = numbers.filter((x) => x % 2 !== 0);
console.log(evenNum);
console.log(oddNum);

// Filtering with strings
let names = ["Pesho", "Doncho", "Adelin"];
let shortNames = names.filter((x) => x.length <= 5);
console.log(shortNames);

// Take numbers on even positions of index of array !
let evenPositionNum = numbers.filter((x, i) => i % 2 === 0);
console.log(evenPositionNum);
