function convertToJSON(name, lastName, hairColor) {
  let convertToJSON = { name: name, lastName: lastName, hairColor: hairColor };

  console.log(JSON.stringify(convertToJSON));
}
convertToJSON(
  "George",
  "Jones",

  "Brown"
);
