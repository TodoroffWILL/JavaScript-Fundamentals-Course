function adAstra(input) {
  let toCheck = input.shift();
  let pattern =
    /([|\|#])(?<itemName>[a-zA-Z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
  let matched = toCheck.matchAll(pattern);
  let totalCalories = 0;

  for (const line of matched) {
    totalCalories += Number(line.groups.calories);
  }
  let daysIcanLast = Math.floor(totalCalories / 2000);
  console.log(`You have food to last you for: ${daysIcanLast} days!`);
  matched = toCheck.matchAll(pattern);

  for (const line of matched) {
    console.log(
      `Item: ${line.groups.itemName}, Best before: ${line.groups.expirationDate}, Nutrition: ${line.groups.calories}`
    );
  }
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
