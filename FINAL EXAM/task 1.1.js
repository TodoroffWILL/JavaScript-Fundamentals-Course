function wildZoo(input) {
  let obejctZoo = {};

  let line = input.shift();
  while (line !== "EndDay") {
    let [command, ...rest] = line.split(":");

    switch (command) {
      case "Add":
        let [animal, neededFood, area] = rest.join().split("-");
        neededFood = Number(neededFood);
        if (!obejctZoo.hasOwnProperty(animal)) {
          obejctZoo[animal] = { neededFood, area };
        } else {
          obejctZoo[animal].neededFood += neededFood;
        } 
        break;
      case "Feed":
        let [animalToFeed, foodGiven] = rest.join().split("-");
        if (obejctZoo.hasOwnProperty(animalToFeed)) {
          obejctZoo[animalToFeed].neededFood -= foodGiven;
          if (obejctZoo[animalToFeed].neededFood <= 0) {
            console.log(`${animalToFeed} was successfully fed`);
            delete obejctZoo[animalToFeed];
          }
        }
        break;
    }

    line = input.shift();
  }
  console.log(obejctZoo);
}
wildZoo([
  "Add: Adam-4500-ByTheCreek",
  "Add: Maya-7600-WaterfallArea",
  "Add: Maya-1230-WaterfallArea",
  "Feed: Jamie-2000",
  "EndDay",
]);
