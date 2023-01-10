function worldTour(array) {
  let locations = array.shift();

  let line = array.shift();

  while (line !== "Travel") {
    let [command, ...rest] = line.split(":");

    switch (command) {
      case "Add Stop":
        let indexToAdd = Number(rest[0]);
        let toAdd = rest[1];
        if (indexToAdd >= 0 && indexToAdd <= locations.length) {
          locations = locations.split("");
          locations.splice(indexToAdd, 0, toAdd);
          locations = locations.join("");
        }
        break;
      case "Remove Stop":
        let startIndex = Number(rest[0]);
        let endIndex = Number(rest[1]);
        if (
          startIndex >= 0 &&
          startIndex <= locations.length &&
          endIndex >= 0 &&
          endIndex <= locations.length
        ) {
          locations = locations.split("");
          locations.splice(startIndex, endIndex - startIndex + 1);
          locations = locations.join("");
        }
        break;
      case "Switch":
        let oldString = rest[0];
        let newString = rest[1];
        if (oldString !== newString) {
          while (locations.includes(oldString)) {
            locations = locations.replace(oldString, newString);
          }
        }
        break;
    }
    console.log(locations);
    line = array.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${locations}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
