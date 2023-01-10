function manOWar(input) {
  let pirateShip = input.shift().split(">").map(Number);
  let warShip = input.shift().split(">").map(Number);
  let maxHealthOfShip = Number(input.shift());

  let line = input.shift();
  while (line !== "Retire") {
    let [command, ...rest] = line.split(" ");

    switch (command) {
      case "Fire":
        let [indexToAttack, damage] = rest;
        indexToAttack = Number(indexToAttack);
        damage = Number(damage);
        if (indexToAttack > 0 && indexToAttack < warShip.length) {
          warShip[indexToAttack] -= damage;
          if (warShip[indexToAttack] <= 0) {
            console.log("You won! The enemy ship has sunken.");
            return;
          }
        }
        break;
      case "Defend":
        let [startIndex, endIndex, damageBack] = rest.map(Number);

        if (
          startIndex >= 0 &&
          startIndex < pirateShip.length &&
          endIndex >= 0 &&
          endIndex < pirateShip.length
        ) {
          for (let i = startIndex; i <= endIndex; i++) {
            pirateShip[i] -= damageBack;
            if (pirateShip[i] <= 0) {
              console.log("You lost! The pirate ship has sunken.");
              return;
            }
          }
        }
        break;
      case "Repair":
        let [indexTo, healthBack] = rest.map(Number);
        if (indexTo >= 0 && indexTo <= pirateShip.length - 1) {
          pirateShip[indexTo] += healthBack;
          if (pirateShip[indexTo] > maxHealthOfShip) {
            pirateShip[indexTo] = maxHealthOfShip;
          }
        }
        break;
      case "Status":
        // let counter = pirateShip.filter(function (x) {
        //   if (x < 0.2 * maxHealthOfShip) return x;
        // });
        let counter = pirateShip.filter(
          (x) => x < 0.2 * maxHealthOfShip
        ).length;
        console.log(`${counter} sections need repair.`);
        break;
    }

    line = input.shift();
  }
  let sumOfPirate = pirateShip.reduce((acc, each) => acc + each, 0);
  let sumOfwarShip = warShip.reduce((acc, each) => acc + each, 0);
  console.log(`Pirate ship status: ${sumOfPirate}`);
  console.log(`Warship status: ${sumOfwarShip}`);
}
manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
