function decryptEnigma(input) {
  let msgCount = input.shift();
  let attackedPlanets = [];
  let destroyedPlanets = [];
  let pattern =
    /@(?<planetName>[A-Za-z]+)([^@\-:!>]*):[\d]+([^@\-:!>]*)!(?<attackType>[AD])!([^@\-:!>]*)\->[\d]+([^@\-:!>]*)/;

  for (let i = 0; i < msgCount; i++) {
    let line = input[i];
    let decryptKey = line.match(/[star]/gi) && line.match(/[star]/gi).length;
    let decryptMsg = [];

    for (const letter of line) {
      let symbol = letter.charCodeAt();
      symbol -= decryptKey;
      symbol = String.fromCharCode(symbol);
      decryptMsg.push(symbol);
    }

    decryptMsg = decryptMsg.join("");
    decryptMsg = pattern.exec(decryptMsg);

    if (decryptMsg) {
      if (decryptMsg.groups.attackType === "A") {
        attackedPlanets.push(decryptMsg.groups.planetName);
      } else {
        destroyedPlanets.push(decryptMsg.groups.planetName);
      }
    }
  }
  attackedPlanets.sort((a, b) => a.localeCompare(b));
  destroyedPlanets.sort((a, b) => a.localeCompare(b));
  console.log(`Attacked planets: ${attackedPlanets.length}`);
  attackedPlanets.forEach((planet) => console.log(`-> ${planet}`));
  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  destroyedPlanets.forEach((planet) => console.log(`-> ${planet}`));
}
decryptEnigma([
  "2",
  "STCDoghudd4=63333$D$0A53333",
  "EHfsytsnhf?8555&I&2C9555SR",
]);
