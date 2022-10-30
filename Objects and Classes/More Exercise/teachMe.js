// let cat = {
//   name: "Pishuran",
//   age: 6,
//   breed: "Ulichna",
//   makeSound() {
//     console.log(`${this.name} "Meaoo!"`); // this. ОЗНАЧАВА ТОЗИ ОБЕКТ В КОЙТО СЪМ В МОМЕНТА
//                                          // Вместо ${cat.name} = ${this.name}
//   },
// };

// cat.makeSound();

// Iterrate through object !

let dog = {
  name: "Pishuran",
  age: 6,
  breed: "Ulichna",
};
// ПЪРВИ НАЧИН С ФОР ИН
for (const property in dog) {
  // console.log(property); // Итерира по "KEY" или "Propertyta" на обекта ! Само за ОБЕКТ !
}

// ВТОРИ НАЧИН С Object.values(dog);
let arrayOfValuesofDog = Object.values(dog); // Връща масив с "value-тата" на "dog" под ред!
// console.log(arrayOfValuesofDog);
let arrOfProperties = Object.keys(dog); // Връша масив с "property-тата" на "dog" под ред!
// console.log(arrOfProperties);

function telRegistry(input) {
  let phoneBook = {};

  input.forEach((contact) => {
    let firstSpaceIndex = contact.indexOf(" "); // Намира ИНДЕКСА на "Space" между името и номера
    let name = contact.substring(0, firstSpaceIndex); // Отрязва стринга от 0 индекс до индекса на "Space";
    let callNumber = contact.substring(firstSpaceIndex + 1); // От спейса включително до края на номера на стринта!
    phoneBook[name] = callNumber;
    // Propertyto name s value callNumber
  });
  //console.log(`${phoneBook.Peter}`);
  // for (const name in phoneBook) {
  //   console.log(`${name} -> ${phoneBook[name]}`);
  // }
}
// telRegistry(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"]);

function inClassMates(arr) {
  let students = {};

  arr.forEach((el) => {
    let [firstName, surName, age] = el;

    students = { firstName, surName, age };
    console.log(students);
  });
}
inClassMates([
  ["Ivan", "Ivanov", 12],
  ["Petar", "Petrov", 13],
  ["Maria", "Marinova", 13],
]);
