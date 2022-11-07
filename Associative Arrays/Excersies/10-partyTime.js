function partying(input) {
  let vipList = [];
  let regularList = [];

  let currentCommand = input.shift();

  while (currentCommand !== "PARTY") {
    const isVip = !isNaN(currentCommand[0]);

    if (isVip) {
      vipList.push(currentCommand);
    } else {
      regularList.push(currentCommand);
    }
    currentCommand = input.shift();
  }
  let allGuest = vipList.concat(regularList);
  //
  input.forEach((el) => {
    allGuest.splice(allGuest.indexOf(el), 1);
  });
  console.log(allGuest.length);
  allGuest.forEach((g) => console.log(g));
}
partying([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
