function matchDates(input) {
  let text = input.shift(); // making it string;
  let pattern =
    /\b(?<day>\d{2})([/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4}\b)/gm;

  let matches = text.matchAll(pattern);

  for (const match of matches) {
    console.log(`Day: ${match[1]}, Month: ${match[3]}, Year: ${match[4]}`); // WITH NUMS IF U KNOW THE INDEX
    console.log(
      `Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}` // WITH NAMES 
    );
  }
}
matchDates([
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016",
]);
