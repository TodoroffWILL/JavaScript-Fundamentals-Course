let personInfos = {
  firstName: "Doncho",
  lastName: "Todorov",
  age: 20,
  eyeColor: "brown",
};

let objectTurnToJSON = JSON.stringify(personInfos); // Turns OBJECT into JSON string format !
console.log(objectTurnToJSON.firstName); // Става прост стринг и не може да достъпим "property-to" му защото го НЯМА вече !

let fromJSONtoObject = JSON.parse(objectTurnToJSON); // Turns JSON string format into OBJECT !
console.log(fromJSONtoObject.firstName);
