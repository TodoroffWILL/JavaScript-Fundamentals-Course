function animal(commands) {
  let animals = [];
  let cmd = commands.shift();

  while (cmd !== "EndDay") {
    let [cd, opt] = cmd.split(" ");
    switch (cd) {
      case "Add:":
        let [animalName, neededFoodQuantity, area] = opt.split("-");

        if (animals[animalName] === undefined) {
          animals[animalName] = [];
          animals[animalName]["neededFoodQuantity"] =
            Number(neededFoodQuantity);
          animals[animalName]["area"] = area;
        } else {
          animals[animalName]["neededFoodQuantity"] +=
            Number(neededFoodQuantity);
        }
        break;
      case "Feed:":
        let [name, food] = opt.split("-");
        if (animals[name] !== undefined) {
          animals[name]["neededFoodQuantity"] -= Number(food);
          if (animals[name]["neededFoodQuantity"] < 1) {
            delete animals[name];
            console.log(`${name} was successfully fed`);
          }
        }
    }
    cmd = commands.shift();
  }

  console.log("Animals:");
  let animalsByArea = [];
  for (let key in animals) {
    console.log(` ${key} -> ${animals[key]["neededFoodQuantity"]}g`);
    if (animalsByArea[animals[key]["area"]] === undefined) {
      animalsByArea[animals[key]["area"]] = 1;
    } else {
      animalsByArea[animals[key]["area"]] += 1;
    }
  }
  console.log("Areas with hungry animals:");
  for (let key in animalsByArea) {
    console.log(`${key}: ${animalsByArea[key]}`);
  }
}
animal([
  "Add: Adam-4500-ByTheCreek",
  "Add: Maya-7600-WaterfallArea",
  "Add: Maya-1230-WaterfallArea",
  "Feed: Jamie-2000",
  "EndDay",
]);
