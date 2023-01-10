function heroes(input) {
  let numOfHeroes = input.shift();
  let heroesObject = {};

  while (numOfHeroes > 0) {
    let [heroName, hp, mana] = input.shift().split(" ");
    hp = Number(hp);
    mana = Number(mana);
    if (!heroesObject.hasOwnProperty(heroName)) {
      heroesObject[heroName] = { hp, mana };
    }
    numOfHeroes--;
  }
  let commands = input.shift();

  while (commands !== "End") {
    let [command, ...rest] = commands.split(" - ");

    switch (command) {
      case "Heal":
        {
          let [hero, hpAmount] = rest;
          hpAmount = Number(hpAmount);
          if (heroesObject[hero].hp + hpAmount >= 100) {
            let remainder = 100 - heroesObject[hero].hp;
            console.log(`${hero} healed for ${remainder} HP!`);
            heroesObject[hero].hp = 100;
          } else {
            console.log(`${hero} healed for ${hpAmount} HP!`);
            heroesObject[hero].hp += hpAmount;
          }
        }
        break;
      case "Recharge":
        {
          let [hero, mpAmount] = rest;
          mpAmount = Number(mpAmount);
          if (heroesObject[hero].mana + mpAmount >= 200) {
            let remainder = 200 - heroesObject[hero].mana;
            console.log(`${hero} recharged for ${remainder} MP!`);
            heroesObject[hero].mana = 200;
          } else {
            heroesObject[hero].mana += mpAmount;
            console.log(`${hero} recharged for ${mpAmount} MP!`);
          }
        }
        break;
      case "TakeDamage":
        let [hero, damage, attacker] = rest;
        heroesObject[hero].hp -= damage;
        if (heroesObject[hero].hp > 0) {
          console.log(
            `${hero} was hit for ${damage} HP by ${attacker} and now has ${heroesObject[hero].hp} HP left!`
          );
        } else {
          delete heroesObject[hero];
          console.log(`${hero} has been killed by ${attacker}!`);
        }
        break;
      case "CastSpell": {
        let [hero, mana, spellName] = rest;
        if (heroesObject[hero].mana >= mana) {
          heroesObject[hero].mana -= mana;
          console.log(
            `${hero} has successfully cast ${spellName} and now has ${heroesObject[hero].mana} MP!`
          );
        } else {
          console.log(`${hero} does not have enough MP to cast ${spellName}!`);
        }
        break;
      }
    }

    commands = input.shift();
  }
  let heroes = Object.entries(heroesObject);
  heroes.forEach((el) => {
    console.log(`${el[0]}`);
    console.log(`  HP: ${el[1].hp}`);
    console.log(`  MP: ${el[1].mana}`);
  });
}
heroes([
  2,
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
// heroes([
//   4,
//   "Adela 90 150",
//   "SirMullich 70 40",
//   "Ivor 1 111",
//   "Tyris 94 61",
//   "Heal - SirMullich - 50",
//   "Recharge - Adela - 100",
//   "CastSpell - Tyris - 1000 - Fireball",
//   "TakeDamage - Tyris - 99 - Fireball",
//   "TakeDamage - Ivor - 3 - Mosquito",
//   "End",
// ]);
