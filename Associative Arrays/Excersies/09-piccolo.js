function parkingInAndOut(list) {
  let parkingList = new Map();

  let inAndOutCars = list.map((el) => el.split(", ")); // МАПВАШ МАСИВЪТ ПО ТОЗИ НАЧИН!

  inAndOutCars.forEach((element) => {
    const command = element[0];
    const carNumber = element[1];

    if (command === "IN") {
      parkingList.set(carNumber, command);
    } else if (command === "OUT") {
      parkingList.delete(carNumber);
    }
  });
  let sorted = Array.from(parkingList).sort((a, b) => a[0].localeCompare(b[0])); // ПО АЗБУЧЕН РЕД С LOCALECOMPARE

  if (sorted.length === 0) {
    console.log("Parking Lot is Emtpy");
  }

  sorted.forEach((el) => {
    console.log(`${el[0]}`);
  });
}
parkingInAndOut([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
