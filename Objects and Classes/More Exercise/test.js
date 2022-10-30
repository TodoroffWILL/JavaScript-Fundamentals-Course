function objectDemo() {
  let person = {
    name: "Doncho",
    age: 26,
    isMale: true,
  };

  let personTwo = JSON.parse(JSON.stringify(person)); // COPIES THE OBJECT WITH NEW REFERENCE!

  person.email = "test@test.com";

  console.log(person);
  console.log(personTwo);
}
// objectDemo();

function one() {
  console.log("I was called");
}

one();
