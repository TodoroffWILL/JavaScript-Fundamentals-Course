function listOfProducts(vegetables) {
  let sortedVegs = vegetables.sort();
  let arrLength = vegetables.length;
  for (let i = 0; i < arrLength; i++) {
    console.log(`${[i + 1]}.${sortedVegs[i]}`);
  }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
