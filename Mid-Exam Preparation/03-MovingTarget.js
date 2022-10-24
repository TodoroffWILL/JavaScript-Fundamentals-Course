function movingTarget(array) {
  let targetLife = array.shift().split(" ").map(Number);
  let currentInstruction = array.shift();

  while (currentInstruction != "End") {
    let splitedCommands = currentInstruction.split(" ");
    let command = splitedCommands[0];
    let indexToShoot = Number(splitedCommands[1]);
    let power = Number(splitedCommands[2]);

    switch (command) {
      case "Shoot":
        // shoot at target
        if (targetLife[indexToShoot]) {
          targetLife[indexToShoot] -= power;
          // remove target if shot and below 0
          if (targetLife[indexToShoot] <= 0) {
            targetLife.splice(indexToShoot, 1);
          }
        }
        break;
      case "Add":
        if (targetLife[indexToShoot]) {
          targetLife.splice(indexToShoot, 0, power);
        } else {
          console.log("Invalid placement!");
        }
        break;
      case "Strike":
        const radius = power;
        const lowerIndex = indexToShoot - radius;
        const upperIndex = indexToShoot + radius;

        if (targetLife[lowerIndex] && targetLife[upperIndex]) {
          targetLife.splice(lowerIndex, radius * 2 + 1);
        } else {
          console.log("Strike missed!");
        }

        // let firstPart = targetLife.slice(0,indexToShoot - power) // power = radius
        // let secondPart = targetLife.slice(indexToShoot + power);
        // targetLife = firstPart.concat(secondPart);
        break;
    }

    currentInstruction = array.shift();
  }
  console.log(targetLife.join("|"));
}
movingTarget([
  "52 74 23 44 96 110",

  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
