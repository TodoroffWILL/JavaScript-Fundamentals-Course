let numbers = [2, 5, 6, 7, 1, 9];
console.log(numbers);

let doubleNumbers = numbers.map((x) => x * 2);
console.log(doubleNumbers);

// Solution without map : HOW IT WORKS !

let doubleNumbers2 = [];

for (const i of numbers) {
  doubleNumbers2.push(i * 2);
}
console.log(doubleNumbers2);
