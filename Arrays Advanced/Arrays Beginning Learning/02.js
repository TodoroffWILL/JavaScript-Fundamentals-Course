function dayOfWeek(dayNum) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (dayNum < 1 || dayNum > 7) {
    console.log("Invalid day!");
  } else {
    console.log(days[dayNum - 1]);
  }
}

dayOfWeek(3);
