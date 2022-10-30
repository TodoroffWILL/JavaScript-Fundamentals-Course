let personInfos = {
  firstName: "Doncho",
  lastName: "Todorov",
  age: 20,
  eyeColor: "brown",
};

let objectProperties = Object.keys(personInfos); //ВРЪЩА !ARRAY!Property-to" на променливата "personsInfo" firstName,lastName etc..

let objectValues = Object.values(personInfos); // ВРЪЩА !ARRAY! "Value-to" на променливата "personInfo":Doncho,Todorov etc...

let objectEntries = Object.entries(personInfos); // ВРЪЩА !ARRAY! "Property" И "Value"  НА ЕДНО
console.log(objectEntries);
