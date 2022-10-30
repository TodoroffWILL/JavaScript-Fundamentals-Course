function planeSchedule(info) {
  let flights = {};

  info[0].forEach((line) => {
    let [numberFlight, destination] = line.split(" ");
    flights[numberFlight] = {
      Destination: destination,
      Status: "Ready to fly",
    };
  });
  info[1].forEach((line) => {
    let [numberFlight, status] = line.split(" ");
    if (flights.hasOwnProperty(numberFlight)) {
      flights[numberFlight].Status = status;
    }
  });

  for (let fly in flights) {
    if (flights[fly].Status === String(info[2])) {
      console.log(flights[fly]);
    }
  }
}
planeSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],

  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],

  ["Cancelled"],
]);
