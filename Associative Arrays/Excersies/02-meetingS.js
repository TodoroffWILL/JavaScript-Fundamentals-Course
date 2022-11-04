function schedule(array) {
  const meetings = {};

  array.forEach((elements) => {
    let [day, name] = elements.split(" ");

    if (meetings[day]) {
      console.log(`Conflict on ${day}!`);
    } else {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  });
  for (const key in meetings) {
    console.log(`${key} -> ${meetings[key]}`);
  }
}
schedule(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
