let personInfos = {
  firstName: "Doncho",
  lastName: "Todorov",
  age: 20,
  eyeColor: "brown",
};

personInfos.isMale = true; // ADD DYNAMIC PROPERTIES

delete personInfos.isMale; // DELETE PROPERTIE

console.log(personInfos);

let dog = {
  name: "Balkan",
  bark: function () {
    console.log("wof wof"); // FUNCTION EXPRESSION SYNTAX
  },
  eat: () => console.log("yum yum"), // ARROW SYNTAX

  play() {
    console.log("Playing");
    // OBJECT METHOD NOTATION SYNTAX
  },
};
console.log(dog.name);
dog.bark();
dog.eat();
dog.play();
