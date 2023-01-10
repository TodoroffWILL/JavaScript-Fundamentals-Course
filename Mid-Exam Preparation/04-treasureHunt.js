function treasureHunt(input) {
  let initialLoot = input.shift().split("|");
  let line = input.shift();

  while (line !== "Yohoho!") {
    let [command, ...rest] = line.split(" ");

    switch (command) {
      case "Loot":
        rest.forEach((el) => {
          if (!initialLoot.includes(el)) {
            initialLoot.unshift(el);
          }
        });
        break;
      case "Drop":
        let numOfIndextoRemove = Number(rest);
        if (numOfIndextoRemove > 0 && numOfIndextoRemove < initialLoot.length) {
          let removedToaddInEnd = initialLoot
            .splice(numOfIndextoRemove, 1)
            .shift();
          initialLoot.push(removedToaddInEnd);
        } else {
          break;
        }
        break;
      case "Steal":
        let toSteal = Number(rest);
        let stolenItems = initialLoot.slice(-toSteal);
        initialLoot.splice(-toSteal);
        console.log(stolenItems.join(", "));
        break;
    }
    line = input.shift();
  }
  let average =
    initialLoot.reduce((acc, each) => acc + each.length, 0) /
    initialLoot.length;
  if (initialLoot.length > 0) {
    console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
  } else {
    console.log(`Failed treasure hunt.`);
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
