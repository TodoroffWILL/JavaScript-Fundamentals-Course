function shoppingList(array) {
  let productList = array.shift().split("!"); // Turns index [0] to string than with .split turns it to ARRAY []
  let commands = array.slice(); // COPYES THE ARRAY
  let currentInstruction = commands.shift();
  // while loop
  while (currentInstruction != "Go Shopping!") {
    let splitedLine = currentInstruction.split(" ");
    let command = splitedLine[0];
    let firstItem = splitedLine[1];
    let secondItem = splitedLine[2];
    switch (command) {
      case "Urgent":
        if (!productList.includes(firstItem)) {
          productList.unshift(firstItem);
        }
        break;
      case "Unnecessary":
        productList = productList.filter((x) => x != firstItem);
        break;
      case "Correct":
        let updatedIndex = productList.indexOf(firstItem);
        if (updatedIndex > -1) {
          productList[updatedIndex] = secondItem;
        }
        break;
      case "Rearrange":
        let removedIndex = productList.indexOf(firstItem);
        if (removedIndex > -1) {
          let element = productList[removedIndex];
          productList.splice(removedIndex, 1);
          productList.push(element);
        }
        break;
    }

    currentInstruction = commands.shift();
  }
  console.log(productList.join(", "));
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
