let phoneBookMap = new Map();

phoneBookMap.set("Doncho", "681382423"); // ADD KEY,VALUES TO MAP
phoneBookMap.set("Adelin", "4385384");
phoneBookMap.set("Eva", "61512524");

console.log(phoneBookMap);
console.log(phoneBookMap.get("Adelin")); // Brings the value of the Adelin
console.log(phoneBookMap.size); // Size of the map

phoneBookMap.delete("Eva"); // Deletes the property in the map
if (phoneBookMap.has("Eva")) {
  console.log(`Eva e prase`);
}
// Iterate map

for (const iterator of phoneBookMap) {
  console.log(iterator);
}

phoneBookMap.forEach(value,key)
