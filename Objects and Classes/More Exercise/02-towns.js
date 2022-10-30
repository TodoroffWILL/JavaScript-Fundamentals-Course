function townS(input) {
  let townInfo = {};

  for (const line of input) {
    // let splitedInfo = line.split(" | ");
    // let townName = splitedInfo[0];
    // let latitude = splitedInfo[1];     THIS IS THE SAME !!
    // let longtitude = splitedInfo[2];
    let [town, latitude, longitude] = line.split(" | "); // LIKE THIS !

    townInfo.town = town;
    townInfo.latitude = Number(latitude).toFixed(2);
    townInfo.longitude = Number(longitude).toFixed(2);
    console.log(townInfo);
  }
}

townS(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
