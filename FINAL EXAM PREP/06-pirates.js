function pirates(input) {
  let piratesObject = {};
  let data = input.shift();

  while (data !== "Sail") {
    let [cities, population, gold] = data.split("||");
    population = Number(population);
    gold = Number(gold);
    if (!piratesObject.hasOwnProperty(cities)) {
      piratesObject[cities] = { population, gold };
    } else {
      piratesObject[cities].population += population;
      piratesObject[cities].gold += gold;
    }
    data = input.shift();
  }
  data = input.shift();
  while (data !== "End") {
    let [command, ...rest] = data.split("=>");
    let [city, population, gold] = rest;
    population = Number(population);
    gold = Number(gold);

    switch (command) {
      case "Plunder":
        if (piratesObject.hasOwnProperty(city)) {
          piratesObject[city].population -= population;
          piratesObject[city].gold -= gold;
        }
        console.log(
          `${city} plundered! ${gold} gold stolen, ${population} citizens killed.`
        );
        if (
          piratesObject[city].population <= 0 ||
          piratesObject[city].gold <= 0
        ) {
          delete piratesObject[city];
          console.log(`${city} has been wiped off the map!`);
        }
        break;
      case "Prosper":
        gold = Number(rest[1]);
        if (gold < 0) {
          console.log(`Gold added cannot be a negative number!`);
          break;
        } else if (piratesObject.hasOwnProperty(city)) {
          piratesObject[city].gold += gold;
        }
        console.log(
          `${gold} gold added to the city treasury. ${city} now has ${piratesObject[city].gold} gold.`
        );
        break;
    }
    data = input.shift();
  }

  let citiesCount = Object.keys(piratesObject).length;
  let allTowns = Object.entries(piratesObject);
  if (citiesCount == 0) {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${citiesCount} wealthy settlements to go to:`
    );
  }
  allTowns.forEach((el) => {
    console.log(
      `${el[0]} -> Population: ${el[1].population} citizens, Gold: ${el[1].gold} kg`
    );
  });
}
pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
// pirates([
//   "Nassau||95000||1000",
//   "San Juan||930000||1250",
//   "Campeche||270000||690",
//   "Port Royal||320000||1000",
//   "Port Royal||100000||2000",
//   "Sail",
//   "Prosper=>Port Royal=>-200",
//   "Plunder=>Nassau=>94000=>750",
//   "Plunder=>Nassau=>1000=>150",
//   "Plunder=>Campeche=>150000=>690",
//   "End",
// ]);
