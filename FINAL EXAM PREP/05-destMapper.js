function destinationMapper(destinations) {
  let pattern = /([=|\/])(?<locations>[A-Z][A-Za-z]{2,})\1/g;
  let matched = destinations.matchAll(pattern);

  let destinationsArr = [];

  let travelPoints = 0;
  for (const line of matched) {
    travelPoints += line.groups.locations.length;
    destinationsArr.push(line.groups.locations);
  }
  let joined = destinationsArr.join(", ");
  console.log(`Destinations: ${joined}`);
  console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");
