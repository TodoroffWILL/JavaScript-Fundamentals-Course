let personInfos = {
  firstName: "Todorov",
  lastName: "Todorov",
  age: 20,
  eyeColor: "brown",
};

// FOR OF ITTERATE THROUGH

for (const key of Object.keys(personInfos)) {
  console.log(`${key} -${personInfos[key]}`);
}
