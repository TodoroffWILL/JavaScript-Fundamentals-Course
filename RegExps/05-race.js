function race(raceDataArray) {
  let racersArr = raceDataArray.shift().split(", ");

  let raceObj = {};
  let namePattern = /[A-Za-z]+/g;
  let distancePattern = /\d/g;

  let command = raceDataArray.shift();

  while (command !== "end of race") {
    const currentName = command.match(namePattern).join("");
    const currentDistance = command.match(distancePattern);

    if (racersArr.includes(currentName)) {
      let distance = 0;

      currentDistance.forEach((el) => {
        distance += Number(el);
      });

      if (!raceObj.hasOwnProperty(currentName)) {
        raceObj[currentName] = distance;
      } else {
        raceObj[currentName] += distance;
      }
    }

    command = raceDataArray.shift();
  }
  let sorted = Object.entries(raceObj).sort((a, b) => b[1] - a[1]);

  const firstPlace = sorted[0][0];
  const secondPlace = sorted[1][0];
  const thirdPlace = sorted[2][0];
  console.log(`1st place: ${firstPlace}`);
  console.log(`2nd place: ${secondPlace}`);
  console.log(`3rd place: ${thirdPlace}`);
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
