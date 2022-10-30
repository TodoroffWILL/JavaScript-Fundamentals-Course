function converttoOBJ(jsonSTR) {
  let person = JSON.parse(jsonSTR);

  for (const key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`);
  }
}
converttoOBJ('{"name": "George", "age": 40, "town": "Sofia"}');
