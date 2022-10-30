let fruits = ["banana", "onion", "apple", "orange"];

fruits.forEach((eachElementOfIndexInTheArray) => {
  console.log(eachElementOfIndexInTheArray);
});

let movie = [];

let x = "addMovie Fast and Furious";
let y = x.split("addMovie ");
console.log(x);

let arr = [
  { name: "Doncho", age: 26 },
  { name: "Adelin", age: 33 },
  { name: "Evgini", age: 51 },
];

let found = arr.find((el) => el.age === 33);

found.weigth = 125;
console.log(found);
