function adAstra(input) {
  let pattern =
    /([\|#])(?<product>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm;
  let totalCalories = 0;
  let matches = pattern.exec(input);
  let productsStore = [];

  while (matches) {
    let name = matches.groups.product;
    let date = matches.groups.date;
    let calories = matches.groups.calories;
    totalCalories += Number(calories);

    let currentProductData = `Item: ${name}, Best before: ${date}, Nutrition: ${calories}`;
    productsStore.push(currentProductData);

    matches = pattern.exec(input);
  }
  let days = Math.floor(totalCalories / 2000);
  console.log(`You have food to last you for: ${days} days!`);
  productsStore.forEach((product) => console.log(product));
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
