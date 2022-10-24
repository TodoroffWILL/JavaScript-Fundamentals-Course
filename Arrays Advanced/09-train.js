function train(array) {
  let passengersInWagon = array.shift().split(" ").map(Number);
  let maxCapacity = Number(array.shift());

  let arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    let commandNum = array[i].split(" ");
    if (commandNum[0] == "Add") {
      let addedPassengers = Number(commandNum[1]);
      passengersInWagon.push(addedPassengers);

      // Add 10 passengers;
    } else {
      for (let j = 0; j < passengersInWagon.length; j++) {
        let passengersInCurrentWagon = passengersInWagon[j];
        if (passengersInCurrentWagon + Number(commandNum[0]) <= maxCapacity) {
          passengersInWagon[j] += Number(commandNum[0]);
          break;
        }
      }
    }
  }
  console.log(passengersInWagon.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
